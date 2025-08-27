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

// Verify transporter (optional)
transporter.verify((err) => {
    if (err) {
        console.error("❌ Email transporter verification failed:", err);
    } else {
        console.log("✅ Email transporter is ready");
    }
});

// Exported mail function
export async function sendMail({ to, subject, text }) {
    try {
        const info = await transporter.sendMail({
            from: `"Website Newsletter" <${process.env.MAIL_USER}>`,
            to: `furqanchunawala@gmail.com`,
            subject,
            text,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Newsletter Subscriber</h2>
            <p><strong>Email:</strong> ${text}</p>
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
