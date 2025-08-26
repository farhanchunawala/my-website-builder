import sendMail from "./mailer.js";

(async () => {
  try {
    await sendMail("Test Email ✔", "Hi");
    console.log("✅ Test email sent successfully! Check your inbox.");
  } catch (err) {
    console.error("❌ Test email failed:", err);
  }
})();
