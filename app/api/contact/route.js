import { sendMail } from "@/lib/mailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { firstName, lastName, phone, email, subject, message } = body;

        const emailText = `
New Contact Form Submission:

First Name: ${firstName}
Last Name: ${lastName}
Phone: ${phone}
Email: ${email}
Subject: ${subject}
Message: ${message}
    `;

        await sendMail(subject, emailText);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("❌ Error in /api/contact:", error);
        return new Response(
            JSON.stringify({ error: "Failed to send message" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
