import { useState } from "react";
import "./page.scss";
import { Accordion } from "radix-ui";
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

const icons = [
    {
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                    d="M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 Z M 8 8 L 5 8 C 4.448 8 4 8.448 4 9 C 4 9.552 4.448 10 5 10 L 8 10 L 8 13 C 8 13.552 8.448 14 9 14 C 9.552 14 10 13.552 10 13 L 10 10 L 13 10 C 13.552 10 14 9.552 14 9 C 14 8.448 13.552 8 13 8 L 10 8 L 10 5 C 10 4.448 9.552 4 9 4 C 8.448 4 8 4.448 8 5 Z"
                    fill="currentColor"
                ></path>
            </svg>
        ),
    },
];

const cards = [
    {
        text: "Add",
    },
    {
        text: "Add",
    },
    {
        text: "Add",
    },
    {
        text: "Add",
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
            <Box
                width={48}
                className="side-bar"
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

            {/* <Box
                className="side-bar"
                sx={{
                    left: "47px",
                    width: "260px",
                    borderRight: "#ddd solid 1px",
                }}
            >
                <Box className="cards-container">
                    {cards.map((crd, index) => (
                        <Box className="card" key={index}>
                            {" "}
                            {crd.text}
                        </Box>
                    ))}
                </Box>
            </Box> */}

            <Accordion.Root
                collapsible
                className="side-bar"
                id="layers"
                type="multiple"
            >
                <Box className="layers-container">
                    {/* Layer 1 */}
                    <Accordion.Item
                        className="layer-container"
                        value="1"
                        id="lc-1"
                    >
                        <Accordion.Trigger className="layer">
                            Layer 1
                        </Accordion.Trigger>
                        <Accordion.Content className="layer">
                            <Accordion.Root
                                type="multiple"
                                collapsible
                                className="layer"
                            >
                                {/* Layer 1.1 */}
                                <Accordion.Item
                                    className="layer-container"
                                    value="1.1"
                                    id="lc-1-1"
                                >
                                    <Accordion.Trigger className="layer">
                                        Layer 1.1
                                    </Accordion.Trigger>
                                    <Accordion.Content className="layer">
                                        <Accordion.Root
                                            type="multiple"
                                            collapsible
                                            className="layer"
                                        >
                                            {/* Layer 1.1.1 */}
                                            <Accordion.Item
                                                className="layer-container"
                                                value="1.1.1"
                                                id="lc-1-1-1"
                                            >
                                                <Accordion.Trigger className="layer">
                                                    Layer 1.1.1
                                                </Accordion.Trigger>
                                                <Accordion.Content className="layer">
                                                    <Accordion.Root
                                                        type="multiple"
                                                        collapsible
                                                        className="layer"
                                                    >
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="1.1.1.1"
                                                            id="lc-1-1-1-1"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 1.1.1.1
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="1.1.1.2"
                                                            id="lc-1-1-1-2"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 1.1.1.2
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                    </Accordion.Root>
                                                </Accordion.Content>
                                            </Accordion.Item>

                                            {/* Layer 1.1.2 */}
                                            <Accordion.Item
                                                className="layer-container"
                                                value="1.1.2"
                                                id="lc-1-1-2"
                                            >
                                                <Accordion.Trigger className="layer">
                                                    Layer 1.1.2
                                                </Accordion.Trigger>
                                                <Accordion.Content className="layer">
                                                    <Accordion.Root
                                                        type="multiple"
                                                        collapsible
                                                        className="layer"
                                                    >
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="1.1.2.1"
                                                            id="lc-1-1-2-1"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 1.1.2.1
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="1.1.2.2"
                                                            id="lc-1-1-2-2"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 1.1.2.2
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                    </Accordion.Root>
                                                </Accordion.Content>
                                            </Accordion.Item>
                                        </Accordion.Root>
                                    </Accordion.Content>
                                </Accordion.Item>

                                {/* Layer 1.2 */}
                                <Accordion.Item
                                    className="layer-container"
                                    value="1.2"
                                    id="lc-1-2"
                                >
                                    <Accordion.Trigger className="layer">
                                        Layer 1.2
                                    </Accordion.Trigger>
                                    <Accordion.Content className="layer">
                                        <Accordion.Root
                                            type="multiple"
                                            collapsible
                                            className="layer"
                                        >
                                            <Accordion.Item
                                                className="layer-container"
                                                value="1.2.1"
                                                id="lc-1-2-1"
                                            >
                                                <Accordion.Trigger className="layer">
                                                    Layer 1.2.1
                                                </Accordion.Trigger>
                                                <Accordion.Content className="layer">
                                                    <Accordion.Root
                                                        type="multiple"
                                                        collapsible
                                                        className="layer"
                                                    >
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="1.2.1.1"
                                                            id="lc-1-2-1-1"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 1.2.1.1
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="1.2.1.2"
                                                            id="lc-1-2-1-2"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 1.2.1.2
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                    </Accordion.Root>
                                                </Accordion.Content>
                                            </Accordion.Item>

                                            <Accordion.Item
                                                className="layer-container"
                                                value="1.2.2"
                                                id="lc-1-2-2"
                                            >
                                                <Accordion.Trigger className="layer">
                                                    Layer 1.2.2
                                                </Accordion.Trigger>
                                                <Accordion.Content className="layer">
                                                    <Accordion.Root
                                                        type="multiple"
                                                        collapsible
                                                        className="layer"
                                                    >
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="1.2.2.1"
                                                            id="lc-1-2-2-1"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 1.2.2.1
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="1.2.2.2"
                                                            id="lc-1-2-2-2"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 1.2.2.2
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                    </Accordion.Root>
                                                </Accordion.Content>
                                            </Accordion.Item>
                                        </Accordion.Root>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion.Root>
                        </Accordion.Content>
                    </Accordion.Item>

                    {/* Layer 2 */}
                    <Accordion.Item
                        className="layer-container"
                        value="2"
                        id="lc-2"
                    >
                        <Accordion.Trigger className="layer">
                            Layer 2
                        </Accordion.Trigger>
                        <Accordion.Content className="layer">
                            <Accordion.Root
                                type="multiple"
                                collapsible
                                className="layer"
                            >
                                <Accordion.Item
                                    className="layer-container"
                                    value="2.1"
                                    id="lc-2-1"
                                >
                                    <Accordion.Trigger className="layer">
                                        Layer 2.1
                                    </Accordion.Trigger>
                                    <Accordion.Content className="layer">
                                        <Accordion.Root
                                            type="multiple"
                                            collapsible
                                            className="layer"
                                        >
                                            <Accordion.Item
                                                className="layer-container"
                                                value="2.1.1"
                                                id="lc-2-1-1"
                                            >
                                                <Accordion.Trigger className="layer">
                                                    Layer 2.1.1
                                                </Accordion.Trigger>
                                                <Accordion.Content className="layer">
                                                    <Accordion.Root
                                                        type="multiple"
                                                        collapsible
                                                        className="layer"
                                                    >
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="2.1.1.1"
                                                            id="lc-2-1-1-1"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 2.1.1.1
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="2.1.1.2"
                                                            id="lc-2-1-1-2"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 2.1.1.2
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                    </Accordion.Root>
                                                </Accordion.Content>
                                            </Accordion.Item>
                                        </Accordion.Root>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion.Root>
                        </Accordion.Content>
                    </Accordion.Item>

                    {/* Layer 3 */}
                    <Accordion.Item
                        className="layer-container"
                        value="3"
                        id="lc-3"
                    >
                        <Accordion.Trigger className="layer">
                            Layer 3
                        </Accordion.Trigger>
                        <Accordion.Content className="layer">
                            <Accordion.Root
                                type="multiple"
                                collapsible
                                className="layer"
                            >
                                <Accordion.Item
                                    className="layer-container"
                                    value="3.1"
                                    id="lc-3-1"
                                >
                                    <Accordion.Trigger className="layer">
                                        Layer 3.1
                                    </Accordion.Trigger>
                                    <Accordion.Content className="layer">
                                        <Accordion.Root
                                            type="multiple"
                                            collapsible
                                            className="layer"
                                        >
                                            <Accordion.Item
                                                className="layer-container"
                                                value="3.1.1"
                                                id="lc-3-1-1"
                                            >
                                                <Accordion.Trigger className="layer">
                                                    Layer 3.1.1
                                                </Accordion.Trigger>
                                                <Accordion.Content className="layer">
                                                    <Accordion.Root
                                                        type="multiple"
                                                        collapsible
                                                        className="layer"
                                                    >
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="3.1.1.1"
                                                            id="lc-3-1-1-1"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 3.1.1.1
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                        <Accordion.Item
                                                            className="layer-container"
                                                            value="3.1.1.2"
                                                            id="lc-3-1-1-2"
                                                        >
                                                            <Accordion.Trigger className="layer">
                                                                Layer 3.1.1.2
                                                            </Accordion.Trigger>
                                                        </Accordion.Item>
                                                    </Accordion.Root>
                                                </Accordion.Content>
                                            </Accordion.Item>
                                        </Accordion.Root>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion.Root>
                        </Accordion.Content>
                    </Accordion.Item>
                </Box>
            </Accordion.Root>
        </>
    ) : (
        <Box
            className="side-bar"
            sx={{
                right: 0,
                flex: "0 0 260px",
                borderLeft: "#ddd solid 1px",
            }}
        >
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
