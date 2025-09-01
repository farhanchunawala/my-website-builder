import React, { useState } from "react";
import "./styles.scss";
import { Box } from "@mui/material";
import * as Form from "@radix-ui/react-form";
// import * as Select from "@radix-ui/react-select"; // only if needed later

const buttons = [
    { label: "styles", subItems: ["Color", "Image", "Background"] },
    { label: "components", subItems: ["H1", "H2", "Paragraph"] },
    { label: "typography", subItems: ["Font", "Weight", "Line Height"] },
    { label: "layout", subItems: ["Grid", "Flex", "Spacing"] },
    { label: "interactions", subItems: ["Hover", "Focus", "Click"] },
];

type StylingPanelProps = {
    panel: string;
};

const StylingPanel: React.FC<StylingPanelProps> = ({ panel }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (panel !== "stylingPanel") return null;

    return (
        <Box
            className="panel-container"
            sx={{
                right: 0,
                flex: "0 0 260px",
                borderLeft: "#ddd solid 1px",
            }}
        >
            {buttons.map((btn, index) => (
                <Box className="button" key={index}>
                    {/* Button header */}
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
                            <path d="M9.99 1.01A1 1 0 0 0 8.283.303L5 3.586 1.717.303A1 1 0 1 0 .303 1.717l3.99 3.98a1 1 0 0 0 1.414 0l3.99-3.98a.997.997 0 0 0 .293-.707Z" />
                        </svg>
                    </Box>

                    {/* Dropdown */}
                    {openIndex === index && (
                        <Box className="dropdown">
                            <Form.Root className="FormRoot">
                                {btn.subItems.map((item, i) => (
                                    <Form.Field
                                        key={i}
                                        className="dropdown-item"
                                        name={item
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "baseline",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Form.Label className="FormLabel">
                                                {item}
                                            </Form.Label>
                                        </div>
                                        <Form.Control asChild>
                                            <input
                                                placeholder={`Enter ${item}`}
                                                className="Input"
                                                type="text"
                                                required
                                            />
                                        </Form.Control>
                                    </Form.Field>
                                ))}
                            </Form.Root>
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default StylingPanel;
