import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Content from '@/models/ContentModel';

export async function GET() {
	try {
		await dbConnect();
		const content = await Content.find({});
		return NextResponse.json(content);
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
