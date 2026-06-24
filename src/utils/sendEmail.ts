import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

/**
 * Sends an email using Nodemailer (configured for Hostinger or custom SMTP).
 */
export const sendEmail = async ({ to, subject, text, html, replyTo }: EmailOptions): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: process.env.SMTP_PORT === "465" || !process.env.SMTP_PORT, // true for port 465 SSL, false for other ports
    auth: {
      user: process.env.SMTP_USER || "info@theaisolutions.net",
      pass: process.env.SMTP_PASSWORD || "",
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER || "info@theaisolutions.net",
    to,
    replyTo: replyTo || undefined,
    subject,
    text,
    html: html || `<p>${text}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Nodemailer SMTP error:", error.message);
    } else {
      console.error("Unknown Nodemailer SMTP error:", error);
    }
    throw new Error("Failed to send email");
  }
};

