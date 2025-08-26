import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create transporter with better error handling
const createTransporter = () => {
    try {
        return nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            // Additional options for better reliability
            pool: true,
            maxConnections: 1,
            rateDelta: 20000,
            rateLimit: 5,
        });
    } catch (error) {
        console.error("❌ Failed to create email transporter:", error);
        throw error;
    }
};

const transporter = createTransporter();

// Verify transporter configuration - FIXED VERSION
// Make this async and don't block server startup
const verifyTransporter = async () => {
    try {
        await transporter.verify();
        console.log("✅ Email transporter is ready to send messages");
    } catch (error) {
        console.error("❌ Email transporter verification failed:", error);
        console.error("❌ Check your MAIL_USER and MAIL_PASS environment variables");
        console.error("❌ For Gmail, make sure you're using an App Password, not your regular password");
    }
};

// Call verification but don't wait for it
verifyTransporter();

export default async function sendMail(subject, text) {
    try {
        console.log("📧 Preparing to send email...");
        console.log("📧 Subject:", subject);
        console.log("📧 To:", process.env.MAIL_USER);
        
        const info = await transporter.sendMail({
            from: `"Website Contact Form" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: subject,
            text: text,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; text-align: center;">New Contact Form Submission</h2>
                    </div>
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
                        <div style="background: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            ${text.split('\n').map(line => {
                                if (line.trim() === '') return '<br>';
                                if (line.includes(':')) {
                                    const [label, value] = line.split(':');
                                    return `<p style="margin: 10px 0;"><strong style="color: #495057;">${label}:</strong> <span style="color: #6c757d;">${value}</span></p>`;
                                }
                                return `<p style="margin: 10px 0; color: #6c757d;">${line}</p>`;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `
        });
        
        console.log("✅ Email sent successfully!");
        console.log("📨 Message ID:", info.messageId);
        return info;
    } catch (error) {
        console.error("❌ Failed to send email:", error);
        throw error;
    }
}