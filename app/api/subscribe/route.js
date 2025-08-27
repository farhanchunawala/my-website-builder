import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer"; // we’ll make this next

export async function POST(req) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Invalid email" },
                { status: 400 }
            );
        }

        // Call mailer function
        await sendMail({
            to: process.env.MAIL_USER, // send to yourself for now
            subject: "New Newsletter Subscription",
            text: `New subscriber: ${email}`,
        });

        return NextResponse.json(
            { success: true, message: "Email sent" },
            { status: 200 }
        );
    } catch (err) {
        console.error("Error in subscribe API:", err);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
