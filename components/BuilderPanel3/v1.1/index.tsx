import "./page.scss";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Form, Select } from "radix-ui";
import { LayersPanel } from "@/components/LayersPanel/v1.1";
// import { StylingPanel } from "@/components/StylingPanel/v1.1";
import StylingPanel from "@/components/StylingPanel/v1.1";

// const buttons = [
//     {
//         label: "styles",
//         subItems: ["Color", "Image", "Background"],
//     },
//     {
//         label: "components",
//         subItems: ["H1", "H2", "Paragraph"],
//     },
//     {
//         label: "typography",
//         subItems: ["Font", "Weight", "Line Height"],
//     },
//     {
//         label: "layout",
//         subItems: ["Grid", "Flex", "Spacing"],
//     },
//     {
//         label: "interactions",
//         subItems: ["Hover", "Focus", "Click"],
//     },
// ];

const icons = [
    {
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
            >
                <path
                    d="M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 Z M 8 8 L 5 8 C 4.448 8 4 8.448 4 9 C 4 9.552 4.448 10 5 10 L 8 10 L 8 13 C 8 13.552 8.448 14 9 14 C 9.552 14 10 13.552 10 13 L 10 10 L 13 10 C 13.552 10 14 9.552 14 9 C 14 8.448 13.552 8 13 8 L 10 8 L 10 5 C 10 4.448 9.552 4 9 4 C 8.448 4 8 4.448 8 5 Z"
                    fill="currentColor"
                ></path>
            </svg>
        ),
    },
];

const accordionData = [
    {
        value: "desktop",
        title: "Desktop",
        content: ["Hero", "Testimonials", "Pricing", "Footer"],
    },
    {
        value: "tablet",
        title: "Tablet",
        content: ["Hero", "Testimonials", "Pricing", "Footer"],
    },
    {
        value: "mobile",
        title: "Mobile",
        content: ["Hero", "Testimonials", "Pricing", "Footer"],
    },
];

const BuilderPanel = ({ panel }) => {
    const data = useSelector((state: RootState) => state.data.data);
    const config = data.config;
    // const content = data.content;
    // const styling = data.styling;
    // const styles = styling?.styles || {};

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return panel == "leftPanel" ? (
        <>
            <Box
                width={48}
                className="panel-container"
                sx={{
                    left: 0,
                    flex: "0 0 48px",
                    borderRight: "#ddd solid 1px",
                }}
            >
                {icons.map((icn, index) => (
                    <Box className="icons-container" key={index}>
                        <Box className="icon">{icn.svg}</Box>
                    </Box>
                ))}
            </Box>
            <Box
                className="panel-container"
                sx={{
                    left: "47px",
                    width: "260px",
                    borderRight: "#ddd solid 1px",
                }}
            >
                {/* {JSON.stringify(config?.children)} */}
                <LayersPanel data={config?.children} />
            </Box>
        </>
    ) : (
        <Box
            className="side-bar0"
            sx={{
                right: 0,
                flex: "0 0 260px",
                borderLeft: "#ddd solid 1px",
            }}
        >
            <StylingPanel panel="stylingPanel" />
        </Box>
    );
};

export default BuilderPanel;
