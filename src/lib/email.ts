import { supabase } from "./supabase";

export interface EmailData {
  to?: string;
  subject: string;
  html: string;
  from?: string;
}

/**
 * Sends an email using the Supabase Edge Function 'send-email'.
 * This function handles the integration with Resend.
 */
export const sendEmail = async (data: EmailData) => {
  try {
    const { data: response, error } = await supabase.functions.invoke('send-email', {
      body: data,
    });

    if (error) {
      console.error('Error calling send-email function:', error);
      return { success: false, error };
    }

    return { success: true, data: response };
  } catch (err) {
    console.error('Unexpected error sending email:', err);
    return { success: false, error: err };
  }
};

/**
 * Utility to format form data into a clean HTML table for the email body.
 */
export const formatEmailHtml = (title: string, data: Record<string, any>) => {
  const rows = Object.entries(data)
    .filter(([_, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%; color: #666;">
          ${key.charAt(0).toUpperCase() + key.slice(1)}
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">
          ${value}
        </td>
      </tr>
    `)
    .join("");

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #d0ff00; padding: 20px; text-align: center;">
        <h1 style="margin: 0; color: #000; font-size: 24px;">Hustle Labs</h1>
        <p style="margin: 5px 0 0; color: #000; opacity: 0.7;">New Brief Received</p>
      </div>
      <div style="padding: 30px;">
        <h2 style="margin-top: 0; color: #333; font-size: 20px;">${title}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          ${rows}
        </table>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
          This is an automated notification from Hustle Labs.
        </div>
      </div>
    </div>
  `;
};
