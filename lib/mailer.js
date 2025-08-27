import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    pool: true,
    maxConnections: 1,
    rateDelta: 20000,
    rateLimit: 5,
});

// Verify transporter once at startup
transporter.verify((err) => {
    if (err) {
        console.error("❌ Transporter verification failed:", err);
    } else {
        console.log("✅ Email transporter ready");
    }
});

export async function sendMail(subject, text) {
    try {
        const info = await transporter.sendMail({
            from: `"Bits11 Website" <${process.env.MAIL_USER}>`,
            to: "furqanchunawala@gmail.com", // receiver (your inbox)
            subject,
            text,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Contact Form Submission</h2>
            <pre style="white-space: pre-wrap;">${text}</pre>
        </div>
        `,
        });

        console.log("✅ Email sent:", info.messageId);
        return info;
    } catch (error) {
        console.error("❌ Failed to send email:", error);
        throw error;
    }
}
