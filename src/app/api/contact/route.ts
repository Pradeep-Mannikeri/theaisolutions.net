import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";

export async function POST(request: Request) {
  try {
    const { name, email, message, phone, countryCode } = await request.json();

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: "All fields including phone number are required" },
        { status: 400 }
      );
    }

    const now = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dubai",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    
    // Send to RECEIVER_EMAIL from environment variables (or fallback)
    await sendEmail({
      to: process.env.RECEIVER_EMAIL || "info@theaisolutions.net",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ? `${countryCode} ${phone}` : 'Not provided'}\nMessage: ${message}\nSubmitted: ${now}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
          <h2 style="color: #66318B;">📩 New Inquiry via Website Contact Form</h2>
          
          <p style="margin-bottom: 20px;">
            You've received a new message from the contact form on your website. Here are the details:
          </p>
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone ? `${countryCode} ${phone}` : 'Not provided'}</p>
          <p><strong>Submitted:</strong> ${now}</p>

          <hr style="margin: 20px 0;" />

          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #66318B;">
            ${message.replace(/\n/g, "<br>")}
          </div>

          <hr style="margin: 30px 0;" />

          <p style="font-size: 14px; color: #555;">
            Please respond to the user at <strong>${email}</strong> if follow-up is required.
            ${phone ? `<br>Alternatively, you can call them at <strong>${countryCode} ${phone}</strong>` : ''}
          </p>

          <p style="font-size: 12px; color: #999; margin-top: 40px;">
            — This message was automatically generated from your website's contact form. If you believe this was sent in error, please disregard.
          </p>
        </div>
      `,
    });

    // Auto-reply to user
    await sendEmail({
      to: email,
      subject: "Thank you for contacting AI Solutions",
      text: `Hi ${name},\n\nThank you for reaching out to us. We've received your message and will get back to you shortly.\n\nBest regards,\nAI Solutions Team`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to us. We've received your message and will get back to you shortly.</p>
        <p>Best regards,<br/>AI Solutions Team</p>
      `,
    });

    return NextResponse.json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
