import { useState } from "react";
import "./page.scss";
import { Box } from "@mui/material";

const buttons = [
    {
        label: "styles",
        subItems: ["Color", "Image", "Background"],
    },
    {
        label: "components",
        subItems: ["H1", "H2", "Paragraph"],
    },
    {
        label: "typography",
        subItems: ["Font", "Weight", "Line Height"],
    },
    {
        label: "layout",
        subItems: ["Grid", "Flex", "Spacing"],
    },
    {
        label: "interactions",
        subItems: ["Hover", "Focus", "Click"],
    },
];

const BuilderPanel = ({ panel }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return panel == "leftPanel" ? (
        <Box className="side-bar" sx={{ left: 0, width: "48px" }}></Box>
    ) : (
        <Box className="side-bar" sx={{ right: 0 }}>
            {buttons.map((btn, index) => (
                <Box className="button" key={index}>
                    <Box
                        className="text-container"
                        onClick={() => toggleDropdown(index)}
                    >
                        <p className="button-text">{btn.label}</p>
                        <svg
                            className={`toggle-icon ${openIndex === index ? "open" : ""}`}
                            viewBox="-2 -1 12 12"
                            width="12"
                            height="12"
                        >
                            <path d="M9.99 1.01A1 1 0 0 0 8.283.303L5 3.586 1.717.303A1 1 0 1 0 .303 1.717l3.99 3.98a1 1 0 0 0 1.414 0l3.99-3.98a.997.997 0 0 0 .293-.707Z"></path>
                        </svg>
                    </Box>

                    {/* Dropdown */}
                    {openIndex === index && (
                        <Box className="dropdown">
                            {btn.subItems.map((item, i) => (
                                <p key={i}>{item}</p>
                            ))}
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default BuilderPanel;
