// import { NextResponse } from 'next/server';
// import { content } from '../../../content'; // Adjust the path to match your project structure
// import fs from 'fs';
// import path from 'path';

// export async function POST() {
//     try {
//         const fileName = 's013.ts'; // Static file name, can also be passed dynamically

//         const filePath = path.join(process.cwd(), 'data', fileName);
//         const directoryPath = path.dirname(filePath);

//         // Ensure the directory exists
//         if (!fs.existsSync(directoryPath)) {
//             fs.mkdirSync(directoryPath, { recursive: true });
//         }

//         // Write the imported content to the file
//         fs.writeFileSync(filePath, content);

//         return NextResponse.json({ message: `File ${fileName} saved successfully` }, { status: 200 });
//     } catch (error) {
//         console.error('Error saving file:', error);
//         return NextResponse.json({ error: 'Failed to save the file' }, { status: 500 });
//     }
// }
