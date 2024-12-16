import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Content from "@/models/ContentModel";

interface Context {
    params: undefined;
}

export async function POST(request: NextRequest, context: Context) {
    try {
        await dbConnect();
		
		// const url = new URL(request.url);
		// const route = url.searchParams.get('route');
		
		const { route } = context.params;
		
        const req = await request.json();
		
		let content;
		if (route === '0') {
			content = new Content(req);
			await content.save();
		} else if (route) {
			content = await Content.findOneAndUpdate({ route: route }, req, {
				new: true,
				upsert: true,
				overwrite: true,
			});
		}
		
        return NextResponse.json({ content });
        // return NextResponse.json(content);
    } catch (error) {
        console.error("Database operation failed:", error);
        return NextResponse.json(
            {
                error: "Database operation failed",
                details: error.message,
            },
            {
                status: 500,
            }
        );
    }
}
