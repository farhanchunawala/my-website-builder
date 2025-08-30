import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(req) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        // Send mail
        await sendMail(
            "New Subscription",
            `Someone subscribed with the email: ${email}`
        );

        return NextResponse.json(
            { message: "Subscribed successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ Subscription error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
