import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import Stripe from "npm:stripe@14.1.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");

  if (!signature && webhookSecret) {
    return new Response("No signature", { status: 400 });
  }

  let event;

  try {
    const body = await req.text();
    if (webhookSecret && signature) {
      event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
    } else {
      event = JSON.parse(body);
    }
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || "Builder";
    
    // Retrieve line items to see what they bought
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
    const productName = lineItems.data[0]?.description || "Hustle Labs Academy Program";

    console.log(`Payment successful for ${customerEmail} - Product: ${productName}`);

    if (customerEmail) {
      try {
        await resend.emails.send({
          from: "Hustle Labs Academy <academy@hustlelabs.gr>",
          to: [customerEmail],
          bcc: ["info@hustlelabs.gr"], // Copy to admin
          subject: `Καλώς ήρθες στο ${productName} - Hustle Labs Academy`,
          html: `
            <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background-color: #050505; color: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid #1a1a1a;">
              <div style="padding: 40px; text-align: center; background: linear-gradient(135deg, #d0ff00 0%, #b8e600 100%);">
                <h1 style="margin: 0; color: #000; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">Payment Confirmed</h1>
              </div>
              <div style="padding: 50px 40px;">
                  <p style="font-size: 18px; line-height: 1.6; color: #ffffff; margin-bottom: 30px; font-weight: 500;">
                      Γεια σου ${customerName},
                  </p>
                  <p style="font-size: 16px; line-height: 1.8; color: #a0a0a0; margin-bottom: 25px;">
                      Συγχαρητήρια για την εγγραφή σου στο <strong>${productName}</strong>. Η πληρωμή σου ολοκληρώθηκε επιτυχώς και η θέση σου έχει δεσμευτεί.
                  </p>
                  <div style="background-color: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 16px; padding: 30px; margin-bottom: 40px;">
                      <h4 style="margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #d0ff00;">Επόμενα Βήματα:</h4>
                      <ul style="margin: 0; padding: 0; list-style: none; color: #ffffff; font-size: 15px;">
                          <li style="margin-bottom: 12px; display: flex; align-items: center;">
                              <span style="color: #d0ff00; margin-right: 10px;">•</span> Θα λάβεις ένα προσωπικό email από εμάς εντός 24 ωρών.
                          </li>
                          <li style="margin-bottom: 12px; display: flex; align-items: center;">
                              <span style="color: #d0ff00; margin-right: 10px;">•</span> Θα σου στείλουμε το link για το private group (Discord/Slack).
                          </li>
                          <li style="margin-bottom: 0; display: flex; align-items: center;">
                              <span style="color: #d0ff00; margin-right: 10px;">•</span> Θα λάβεις το Calendar Invite για τα sessions.
                          </li>
                      </ul>
                  </div>
                  <p style="font-size: 15px; line-height: 1.8; color: #666; margin-bottom: 40px;">
                      Αν έχεις οποιαδήποτε απορία μέχρι τότε, απάντησε απλά σε αυτό το email ή βρες μας στο Instagram.
                  </p>
                  <div style="padding: 25px; border-left: 2px solid #d0ff00; background-color: #0a0a0a; border-radius: 0 12px 12px 0;">
                      <p style="margin: 0; font-size: 13px; font-style: italic; color: #d0ff00; letter-spacing: 1.5px; text-transform: uppercase; font-weight: bold;">
                          Think Wild. Build Smart.
                      </p>
                  </div>
              </div>
              <div style="padding: 30px; text-align: center; border-top: 1px solid #1a1a1a; background-color: #080808;">
                  <p style="margin: 0; font-size: 11px; color: #444; text-transform: uppercase; letter-spacing: 1px;">
                      © ${new Date().getFullYear()} Hustle Labs Academy · Chania, Greece
                  </p>
              </div>
            </div>
          `,
        });
        console.log("Confirmation email sent to customer");
      } catch (err) {
        console.error("Failed to send confirmation email:", err);
      }
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
