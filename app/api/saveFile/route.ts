import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
    try {
        // Parse incoming JSON data
        const body = await request.json();
        const { fileName, fileDir, fileContent } = body;

        if (!fileName || !fileContent) {
            return NextResponse.json(
                { error: "fileName and fileContent are required" },
                { status: 400 }
            );
        }

        const filePath = path.join(
            process.cwd(),
			'app/',
			fileDir,
            `${fileName}.ts`
        );
        const directoryPath = path.dirname(filePath);

        // Ensure the directory exists
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }

        // Write the file with provided content
        fs.writeFileSync(filePath, fileContent);

        return NextResponse.json(
            { message: "File saved successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error saving file:", error);
        return NextResponse.json(
            { error: "Failed to save the file" },
            { status: 500 }
        );
    }
}
