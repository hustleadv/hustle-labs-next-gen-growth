import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    const payload = await req.json();
    const { to, subject, html, from } = payload;
    
    // 1. Send Notification to Admin (You)
    const adminEmail = await resend.emails.send({
      from: from || "Hustle Labs <onboarding@resend.dev>",
      to: to || ["info@hustlelabs.gr"],
      subject: subject,
      html: html,
    });

    console.log("Admin notification sent:", adminEmail);

    // 2. Send Confirmation to Client (if email exists in payload)
    const clientEmailAddr = payload.email || payload.emailAddress;
    
    if (clientEmailAddr) {
      const clientName = payload.name || "εκεί";
      const confirmationEmail = await resend.emails.send({
        from: from || "Hustle Labs <onboarding@resend.dev>",
        to: [clientEmailAddr],
        subject: "Λάβαμε το brief σου - Hustle Labs",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #050505; color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #1a1a1a;">
            <div style="padding: 40px; text-align: center; background-color: #d0ff00;">
              <h1 style="margin: 0; color: #000; font-size: 28px; font-weight: 900; letter-spacing: -1px;">HUSTLE LABS</h1>
            </div>
            <div style="padding: 50px 40px;">
                <p style="font-size: 18px; line-height: 1.6; color: #ffffff; margin-bottom: 30px;">
                    Γεια σου ${clientName},
                </p>
                <p style="font-size: 16px; line-height: 1.8; color: #a0a0a0; margin-bottom: 25px;">
                    Σε ευχαριστούμε που επικοινώνησες μαζί μας. Λάβαμε το brief σου και η ομάδα μας έχει ήδη ξεκινήσει να το μελετά.
                </p>
                <p style="font-size: 16px; line-height: 1.8; color: #a0a0a0; margin-bottom: 40px;">
                    Θα επικοινωνήσουμε μαζί σου εντός των επόμενων 24 ωρών για να συζητήσουμε τα επόμενα βήματα και να ορίσουμε μια πρώτη συνάντηση αν χρειαστεί.
                </p>
                <div style="padding: 25px; border-left: 2px solid #d0ff00; background-color: #0a0a0a;">
                    <p style="margin: 0; font-size: 14px; font-style: italic; color: #d0ff00; letter-spacing: 1px; text-transform: uppercase; font-weight: bold;">
                        We build. We back. We grow.
                    </p>
                </div>
            </div>
            <div style="padding: 30px; text-align: center; border-top: 1px solid #1a1a1a; background-color: #080808;">
                <p style="margin: 0; font-size: 12px; color: #444;">
                    © ${new Date().getFullYear()} Hustle Labs. Chania, Greece.
                </p>
            </div>
          </div>
        `,
      });
      console.log("Client confirmation sent:", confirmationEmail);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in send-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
