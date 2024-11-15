import { writeFileSync } from 'fs';
import { join } from 'path';

// Tokens and responsive utility (example)
const tokens = {
    fonts: {
        title: 'Arial, sans-serif',
        primary: 'Verdana, sans-serif',
    },
    colors: {
        blackPrimary: '#000',
        blackSecondary: '#333',
        blackTertiary: '#666',
    },
    lineHeight: 1.5,
};

const responsive = (mobile, tablet, desktop) => {
    return {
        mobile,
        tablet,
        desktop,
    };
};

// textStyles object from your code
const textStyles = {
    titleText: {
        fontFamily: tokens.fonts.title,
        fontSize: responsive("18px", "30px", "30px"),
        fontWeight: 600,
        letterSpacing: "0.02em",
    },
    subtitleText: {
        fontFamily: tokens.fonts.primary,
        fontSize: responsive("12px", "18px", "18px"),
        fontWeight: 500,
        lineHeight: tokens.lineHeight,
    },
    cardTitle: {
        fontFamily: tokens.fonts.primary,
        fontSize: responsive("12px", "18px", "18px"),
        fontWeight: 600,
        lineHeight: tokens.lineHeight,
    },
    cardSubtitle: {
        fontFamily: tokens.fonts.primary,
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: tokens.lineHeight,
    },
    cardText: {
        fontFamily: tokens.fonts.primary,
        fontSize: "11px",
        fontWeight: 500,
        lineHeight: tokens.lineHeight,
    },
    buttonText: {
        fontFamily: tokens.fonts.title,
        fontSize: "14px",
        fontWeight: 600,
    },
};

// styles object from your code
const styles = {
    container: {
        maxWidth: "900px",
        margin: responsive("0 16px", "0 auto", "0 auto"),
    },
    textBlock: {
        container: {},
        texts: [
            {
                ...textStyles.titleText,
                color: tokens.colors.blackPrimary,
                textAlign: "center",
            },
            {
                ...textStyles.subtitleText,
                color: tokens.colors.blackSecondary,
                marginTop: responsive("2px", "8px", "8px"),
                maxWidth: "650px",
                margin: "0 auto",
            },
        ],
    },
    flexGrid: {
        container: {
            marginTop: "14px",
            marginBottom: "12px",
            rowGap: "var(--card-gap)",
            columnGap: "var(--card-gap)",
        },
        card: {
            container: {
                backgroundColor: "#E5EDEE",
                aspectRatio: responsive("1 / 1", "4 / 3", "4 / 3"),
                padding: responsive("0", "0 18px", "0 18px"),
            },
            icon: {
                alignSelf: responsive("center", "start", "start"),
            },
            textBlock: {
                container: {},
                texts: [
                    {
                        ...textStyles.cardTitle,
                        color: tokens.colors.blackPrimary,
                        marginTop: responsive("6px", "14px", "14px"),
                        textAlign: responsive("center", "left", "left"),
                    },
                    {
                        ...textStyles.cardSubtitle,
                        color: tokens.colors.blackSecondary,
                        display: responsive("none", "", ""),
                        textAlign: responsive("center", "left", "left"),
                        marginTop: "4px",
                    },
                    {
                        ...textStyles.cardText,
                        color: tokens.colors.blackTertiary,
                        display: responsive("none", "", ""),
                        textAlign: responsive("center", "left", "left"),
                        marginTop: "8px",
                    },
                ],
            },
        },
    },
    button: {
        container: {
            ...textStyles.buttonText,
            display: responsive("", "none", "none"),
            marginTop: "12px",
            height: "40px",
            borderRadius: "6px",
        },
    },
};

// Helper function to convert camelCase to kebab-case
const toKebabCase = (str) =>
    str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

// Function to handle responsive values and generate media queries
const handleResponsive = (property, value) => {
    if (typeof value === 'object' && value.mobile && value.tablet && value.desktop) {
        return `
  ${property}: ${value.mobile};

  @media(min-width: 768px) {
    ${property}: ${value.tablet};
  }

  @media(min-width: 1024px) {
    ${property}: ${value.desktop};
  }
  `;
    }
    return `  ${property}: ${value};\n`;
};

// Function to generate SCSS from styles object
const generateScss = (styles, selector = '') => {
    let scss = '';

    for (const [key, value] of Object.entries(styles)) {
        if (typeof value === 'object' && !Array.isArray(value)) {
            // If value is an object, it means it's a nested style
            const nestedSelector = selector ? `${selector} .${key}` : `.${key}`;
            scss += generateScss(value, nestedSelector);
        } else if (typeof value === 'object' && Array.isArray(value)) {
            // For handling array styles (like text blocks with multiple texts)
            value.forEach((v, index) => {
                const nestedSelector = `${selector} .text-block-${index}`;
                scss += generateScss(v, nestedSelector);
            });
        } else {
            if (!selector) continue;
            scss += handleResponsive(toKebabCase(key), value);
        }
    }

    return selector ? `${selector} {\n${scss}}\n` : scss;
};

// Generate SCSS string from both styles and textStyles
const scssContent = generateScss(styles);

// Write to a .scss file
writeFileSync(join(__dirname, 'generated-styles.scss'), scssContent);

console.log('SCSS generated successfully!');
