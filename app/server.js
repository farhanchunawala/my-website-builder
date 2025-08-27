import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendMail from "./mailer.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5000"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  
  console.log("📧 Received contact form submission:", { name, email, message });
  
  // Validation
  if (!name || !email || !message) {
    console.log("❌ Validation failed: Missing fields");
    return res.status(400).json({ 
      success: false, 
      message: "All fields are required." 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("❌ Invalid email format");
    return res.status(400).json({ 
      success: false, 
      message: "Please enter a valid email address." 
    });
  }

  try {
    console.log("📤 Attempting to send email...");
    
    const subject = `New Contact Form Submission from ${name}`;
    const emailText = `
Contact Form Submission Details:

Name: ${name}
Email: ${email}
Message: ${message}

Submitted at: ${new Date().toLocaleString()}
    `;

    await sendMail(subject, emailText);
    
    console.log("✅ Email sent successfully!");
    res.status(200).json({ 
      success: true, 
      message: "Thank you! Your message has been sent successfully!" 
    });
    
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ 
      success: false, 
      message: "Sorry, there was an error sending your message. Please try again later." 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    server: "Email Service",
    port: PORT
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Email server is running!", 
    endpoints: ["/api/contact", "/api/health"] 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on http://localhost:${PORT}`);
  console.log(`📧 Mail User: ${process.env.MAIL_USER}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down email server gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down email server gracefully...');
  process.exit(0);
});