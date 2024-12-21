import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v2/builder";
import Button from "@mui/material/Button";
// import { Button } from "@mui/base/Button";
// import { Box, styled } from "@mui/system";
import useEvent from "@/lib/hooks/useEvent";
import AutosizeInput from "react-input-autosize";
import { useEffect, useState } from "react";

const CtaBlock: React.FC<Props> = ({
    content,
    config,
    styles,
    styleKit,
    parentPath,
    updateData,
    id,
}) => {
    const grandChildValuePath = `${parentPath}.buttonText`;
    const [value, setValue] = useState(content?.buttonText);
    const { hoveredElement, focusedElement, createHandlers } =
        useEvent();

		useEffect(() => {
			if (content?.buttonText !== value) {
				setValue(content?.buttonText || ""); // Default to an empty string if undefined
			}
		}, [content?.buttonText]);
		
    return (
        <Box
            {...createHandlers("13")}
            sx={{
                ...styles?.container,
                outline:
                    hoveredElement === "13" || focusedElement === "13"
                        ? "1px solid #007BFF"
                        : "none",
            }}
        >
            <TextBlock
                content={content?.textBlock}
                config={config?.textBlock}
                styles={styles?.textBlock}
                styleKit={styleKit}
            />
            <Button
                variant="contained"
                {...createHandlers("17")}
                sx={{
                    ...styles?.button?.container,
                    outline:
                        hoveredElement === "17" ||
                        focusedElement === "17"
                            ? "1px solid #007BFF"
                            : "none",
                }}
                href={`#${content?.buttonLink}`}
                size={config?.button?.size}
                color={config?.button?.color}
                // onClick={() =>
                //     updateData(
                //         grandChildValuePath,
                //         "Updated from Grandchild"
                //     )
                // }
            >
                <AutosizeInput
                    value={value}
                    // onChange={(e) => setValue(e.target.value)}
					onChange={(e) => {
						const newValue = e.target.value;
						setValue(newValue); // Update local state
						updateData(grandChildValuePath, newValue); // Update parent state
					}}
                    placeholder=""
                    className="auto-size-input"
                    {...createHandlers("button-text")}
                    inputStyle={{
                        outline:
                            hoveredElement === "button-text" ||
                            focusedElement === "button-text"
                                ? "1px solid #007BFF"
                                : "none",
                    }}
                />
            </Button>
        </Box>
    );
};

export default CtaBlock;
