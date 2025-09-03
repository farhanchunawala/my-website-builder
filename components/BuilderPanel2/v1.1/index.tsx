import { useState } from "react";
import "./page.scss";
import { Accordion } from "radix-ui";
import { Box, Button } from "@mui/material";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import ElementsPanel from "@/components/ElementsPanel/v1.1";
import MiniPanel from "@/components/MiniPanel/v1.1";

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

// const icons = [
//     {
//         svg: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
//                 <path
//                     d="M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 Z M 8 8 L 5 8 C 4.448 8 4 8.448 4 9 C 4 9.552 4.448 10 5 10 L 8 10 L 8 13 C 8 13.552 8.448 14 9 14 C 9.552 14 10 13.552 10 13 L 10 10 L 13 10 C 13.552 10 14 9.552 14 9 C 14 8.448 13.552 8 13 8 L 10 8 L 10 5 C 10 4.448 9.552 4 9 4 C 8.448 4 8 4.448 8 5 Z"
//                     fill="currentColor"
//                 ></path>
//             </svg>
//         ),
//     },
//     {
//         svg: (
//             <LayersRoundedIcon
//                 sx={{ justifySelf: "center", display: "flex" }}
//             />
//         ),
//     },
// ];

const cards = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                    d="M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 Z M 4.5 6 C 4.5 6.552 4.948 7 5.5 7 L 8 7 L 8 12.5 C 8 13.052 8.448 13.5 9 13.5 C 9.552 13.5 10 13.052 10 12.5 L 10 7 L 12.5 7 C 13.052 7 13.5 6.552 13.5 6 C 13.5 5.448 13.052 5 12.5 5 L 5.5 5 C 4.948 5 4.5 5.448 4.5 6 Z"
                    fill="currentColor"
                ></path>
            </svg>
        ),
        text: "Text",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="18px"
                height="18px"
                viewBox="0 0 52 52"
            >
                <path d="M31.9981689,11.9995104 C33.4659424,11.9985117 34.998291,13.1328 34.998291,16.1348 L34.998291,16.1348 L34.998291,26 C34.998291,27.5134277 36.3779053,28.1114014 36.9779053,28.3114014 L36.9779053,28.3114014 L43.8,30.8 C46.7,31.9 48.5,35 47.7,38.2 L47.7,38.2 L44.5,48.5995 C44.3,49.3995 43.6,49.9995 42.7,49.9995 L42.7,49.9995 L26.6,49.9995 C25.8,49.9995 25.1,49.5995 24.8,48.8995 C20.9318685,39.9190553 18.7869873,34.9395752 18.3653564,33.9610596 C17.9437256,32.9825439 18.2219401,32.1955241 19.2,31.6 C21,30.3 23.7,31.6395508 24.8,33.5395508 L24.8,33.5395508 L26.4157715,35.7431828 C27.0515137,36.9508 29,36.9508 29,35.1508 L29,35.1508 L29,16.1348 C29,13.1328 30.5303955,12.0005117 31.9981689,11.9995104 Z M46,2 C48.2,2 50,3.8 50,6 L50,6 L50,21 C50,22.882323 48.1813389,25.0030348 46,25 L46,25 L40.010437,25 C39,25 39,24.1881157 39,24.059082 L39,15.5 C39,11.6547018 37.0187988,8 32,8 C26.9812012,8 25,11.1879783 25,15.5 L25,15.5 L25,24.059082 C25,24.4078007 24.7352295,25 23.987793,25 L23.987793,25 L6,25 C3.8,25 2,23.2 2,21 L2,21 L2,6 C2,3.8 3.8,2 6,2 L6,2 Z" />
            </svg>
        ),
        text: "Button",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                    d="M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 Z"
                    fill="currentColor"
                ></path>
            </svg>
        ),
        text: "Frame",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                    d="M 0 10.5 C 0 9.948 0.448 9.5 1 9.5 L 7.5 9.5 C 8.052 9.5 8.5 9.948 8.5 10.5 L 8.5 17 C 8.5 17.552 8.052 18 7.5 18 L 4 18 C 1.791 18 0 16.209 0 14 Z M 9.5 10.5 C 9.5 9.948 9.948 9.5 10.5 9.5 L 17 9.5 C 17.552 9.5 18 9.948 18 10.5 L 18 14 C 18 16.209 16.209 18 14 18 L 10.5 18 C 9.948 18 9.5 17.552 9.5 17 Z M 0 4 C 0 1.791 1.791 0 4 0 L 7.5 0 C 8.052 0 8.5 0.448 8.5 1 L 8.5 7.5 C 8.5 8.052 8.052 8.5 7.5 8.5 L 1 8.5 C 0.448 8.5 0 8.052 0 7.5 Z M 9.5 1 C 9.5 0.448 9.948 0 10.5 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 7.5 C 18 8.052 17.552 8.5 17 8.5 L 10.5 8.5 C 9.948 8.5 9.5 8.052 9.5 7.5 Z"
                    fill="currentColor"
                ></path>
            </svg>
        ),
        text: "Grid",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                    d="M 0 11.5 C 0 10.395 0.895 9.5 2 9.5 L 16 9.5 C 17.105 9.5 18 10.395 18 11.5 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 Z M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 6.5 C 18 7.605 17.105 8.5 16 8.5 L 2 8.5 C 0.895 8.5 0 7.605 0 6.5 Z"
                    fill="currentColor"
                ></path>
            </svg>
        ),
        text: "Rows",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                    d="M 0 11.5 C 0 10.395 0.895 9.5 2 9.5 L 16 9.5 C 17.105 9.5 18 10.395 18 11.5 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 Z M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 6.5 C 18 7.605 17.105 8.5 16 8.5 L 2 8.5 C 0.895 8.5 0 7.605 0 6.5 Z"
                    transform="rotate(-90 9 9)"
                    fill="currentColor"
                ></path>
            </svg>
        ),
        text: "Columns",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                    d="M0 4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4Zm12 .5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-9.34 8.6A1.25 1.25 0 0 0 3.73 15h10.5a1.25 1.25 0 0 0 1.05-1.92l-1.22-1.92a1.25 1.25 0 0 0-2.12 0l-.91 1.44-2.96-4.85a1.25 1.25 0 0 0-2.14 0Z"
                    fill="currentColor"
                ></path>
            </svg>
        ),
        text: "Images",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                    fill="currentColor"
                    d="M0 4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4Zm6 8.617a.5.5 0 0 0 .757.429l6.028-3.617a.5.5 0 0 0 0-.858L6.757 4.954A.5.5 0 0 0 6 5.383Z"
                ></path>
            </svg>
        ),
        text: "Video",
    },
];

const layers = [
    {
        text: "hello",
    },
];

const BuilderPanel = ({ panel }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // const

    return panel == "leftPanel" ? (
        <>
            <MiniPanel type="panel"/>
            <Box
                className="panel-container"
                sx={{
                    left: "47px",
                    width: "260px",
                    borderRight: "#ddd solid 1px",
                }}
            >
                <ElementsPanel type="panel" />
            </Box>
        </>
    ) : (
        <Accordion.Root
            type="single"
            collapsible
            className="panel-container"
            style={{
                right: 0,
                flex: "0 0 260px",
                borderLeft: "1px solid #ddd",
            }}
        >
            {buttons.map((btn, index) => (
                <Accordion.Item value={index} className="button" key={index}>
                    <Accordion.Trigger
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
                    </Accordion.Trigger>

                    <Accordion.Content>{btn.subItems}</Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
};

export default BuilderPanel;
