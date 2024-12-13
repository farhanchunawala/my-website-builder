import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Content from '@/models/ContentModel';

export async function GET(request: NextRequest, context: Context) {
	try {
		await dbConnect();

		const { route } = context.params;

		const content = await Content.findOne({ route: route });
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
