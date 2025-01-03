// const fs = require('fs');
// const path = require('path');

// // The content of the TypeScript file
// const content = `
// const s013 = {
//     container: {
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         zIndex: 5,
//         backgroundColor: "transparent",
//         width: "100%",
//         height: theme.spacing(responsive(16, 16, 20)),
//         padding: theme.spacing(0, responsive(1, 2, 4)),
//         margin: "0 auto",
//         maxWidth: "1140px",
//     },
//     navlinks: {
//         container: {
//             flexDirection: responsive("column", "column", "row"),
//             alignItems: "center",
//             position: responsive("absolute", "absolute", "static"),
//             top: theme.spacing(16),
//             left: 0,
//             right: 0,
//             zIndex: 10,
//             backgroundColor: colors.background,
//         },
//         link: {
//             ...texts.linkText,
//             padding: theme.spacing(responsive(3, 3, 2), responsive(6, 6, 4)),
//             opacity: tokens.textLight,
//         },
//     },
//     button: {},
//     image: {},
// };

// export default s013;
// `;

// // Path to save the file (adjust if needed)
// const filePath = path.join(__dirname, 's013.ts');

// // Write the file
// fs.writeFileSync(filePath, content, 'utf8');
// console.log(`File written to ${filePath}`);
