import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Content from '@/models/ContentModel';

interface Context {
	params: undefined;
}

export async function POST(request: NextRequest, context: Context) {
	try {
		await dbConnect();
		const req = await request.json();
		const content = new Content(req);
		await content.save();
		return NextResponse.json({ content });
		// return NextResponse.json(content);
	} catch (error) {
		console.error('Database operation failed:', error);
		return NextResponse.json(
			{ error: 'Database operation failed', details: error.message },
			{
				status: 500,
			}
		);
	}
}
