import "./page.scss";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Form, Select } from "radix-ui";
import { LayersPanel } from "@/components/LayersPanel/v1.1";

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
            <Box
                className="side-bar"
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
                            <Form.Root className="FormRoot">
                                {btn.subItems.map((item, i) => (
                                    <Form.Field
                                        key={i}
                                        className="dropdown-item"
                                        name="email"
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "baseline",
                                                justifyContent:
                                                    "space-between",
                                            }}
                                        >
                                            <Form.Label className="FormLabel">
                                                {item}
                                            </Form.Label>
                                        </div>
                                        <Form.Control asChild>
                                            <input
                                                className="Input"
                                                type="text"
                                                required
                                            />
                                        </Form.Control>
                                    </Form.Field>

                                    // <Select.Root
                                    //     key={i}
                                    //     // defaultValue={item}
                                    // >
                                    //     <Select.Trigger
                                    //         style={{
                                    //             all: "unset",
                                    //             display: "inline-flex",
                                    //             alignItems: "center",
                                    //             justifyContent:
                                    //                 "space-between",
                                    //             padding: "8px 12px",
                                    //             border: "1px solid #ccc",
                                    //             borderRadius: "4px",
                                    //             minWidth: "160px",
                                    //             backgroundColor: "white",
                                    //             cursor: "pointer",
                                    //         }}
                                    //     >
                                    //         <Select.Value placeholder="Select a fruit" />
                                    //         <Select.Icon>
                                    //             <ArrowDropDown />
                                    //         </Select.Icon>
                                    //     </Select.Trigger>

                                    //     <Select.Portal>
                                    //         <Select.Content
                                    //             style={{
                                    //                 backgroundColor:
                                    //                     "white",
                                    //                 border: "1px solid #ccc",
                                    //                 borderRadius: "4px",
                                    //                 marginTop: "4px",
                                    //                 boxShadow:
                                    //                     "0px 2px 8px rgba(0,0,0,0.1)",
                                    //             }}
                                    //         >
                                    //             <Select.Viewport
                                    //                 style={{
                                    //                     padding: "4px 0",
                                    //                 }}
                                    //             >
                                    //                 {options.map(
                                    //                     (option) => (
                                    //                         <Select.Item
                                    //                             key={option}
                                    //                             value={
                                    //                                 option
                                    //                             }
                                    //                             style={{
                                    //                                 padding:
                                    //                                     "8px 12px",
                                    //                                 display:
                                    //                                     "flex",
                                    //                                 alignItems:
                                    //                                     "center",
                                    //                                 justifyContent:
                                    //                                     "space-between",
                                    //                                 cursor: "pointer",
                                    //                             }}
                                    //                         >
                                    //                             <Select.ItemText>
                                    //                                 {option}
                                    //                             </Select.ItemText>
                                    //                             <Select.ItemIndicator>
                                    //                                 <Check fontSize="small" />
                                    //                             </Select.ItemIndicator>
                                    //                         </Select.Item>
                                    //                     )
                                    //                 )}
                                    //             </Select.Viewport>
                                    //         </Select.Content>
                                    //     </Select.Portal>
                                    // </Select.Root>

                                    // <FormControl
                                    //     key={i}
                                    //     className="dropdown-item"
                                    // >
                                    //     <p>{item}</p>
                                    //     <Select
                                    //         className="select"
                                    //         value={age}
                                    //         onChange={handleChange}
                                    //         displayEmpty
                                    //     >
                                    //         <MenuItem value="">
                                    //             <em>None</em>
                                    //         </MenuItem>
                                    //         <MenuItem value={10}>
                                    //             Ten
                                    //         </MenuItem>
                                    //         <MenuItem value={20}>
                                    //             Twenty
                                    //         </MenuItem>
                                    //         <MenuItem value={30}>
                                    //             Thirty
                                    //         </MenuItem>
                                    //     </Select>
                                    // </FormControl>
                                ))}
                            </Form.Root>
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default BuilderPanel;
