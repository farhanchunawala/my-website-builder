// pages/api/send.js
import { sendMail } from "../../lib/mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { email } = req.body || {};
    if (!email || typeof email !== "string") {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    await sendMail("New Subscription ✔", `A new user subscribed: ${email}`);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Mail error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send email" });
  }
}
