import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log(`Newsletter signup for: ${email}`);

    // Send Welcome Email
    await resend.emails.send({
      from: "Hustle Labs <academy@hustlelabs.gr>",
      to: [email],
      subject: "Καλώς ήρθες στο Inner Circle - Hustle Labs Academy",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #050505; color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #1a1a1a;">
          <div style="padding: 40px; text-align: center; background-color: #d0ff00;">
            <h1 style="margin: 0; color: #000; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">THE INNER CIRCLE</h1>
          </div>
          <div style="padding: 50px 40px;">
              <p style="font-size: 18px; line-height: 1.6; color: #ffffff; margin-bottom: 30px;">
                  Καλώς ήρθες στο Circle.
              </p>
              <p style="font-size: 16px; line-height: 1.8; color: #a0a0a0; margin-bottom: 25px;">
                  Είσαι πλέον μέλος μιας κλειστής ομάδας που λαμβάνει τα ακριβή frameworks, AI prompts και growth strategies που χρησιμοποιούμε καθημερινά στην Hustle Labs.
              </p>
              <p style="font-size: 16px; line-height: 1.8; color: #a0a0a0; margin-bottom: 40px;">
                  Κάθε Δευτέρα πρωί, θα έχεις στο inbox σου ένα email με 100% execution και 0% θεωρία.
              </p>
              <div style="padding: 25px; border-left: 2px solid #d0ff00; background-color: #0a0a0a;">
                  <p style="margin: 0; font-size: 14px; font-style: italic; color: #d0ff00; letter-spacing: 1px; text-transform: uppercase; font-weight: bold;">
                      Build. Scale. Automate.
                  </p>
              </div>
          </div>
          <div style="padding: 30px; text-align: center; border-top: 1px solid #1a1a1a; background-color: #080808;">
              <p style="margin: 0; font-size: 12px; color: #444;">
                  © ${new Date().getFullYear()} Hustle Labs Academy.
              </p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
