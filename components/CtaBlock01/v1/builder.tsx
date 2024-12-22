import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1/builder";
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
	variables,
    parentPath,
    updateData,
    id,
}) => {
    const grandChildValuePath = `${parentPath}.buttonText`;
    const [value, setValue] = useState(content?.buttonText);
    const { createHandlers, getOutline } = useEvent();

    useEffect(() => {
        if (content?.buttonText !== value) {
            setValue(content?.buttonText || ""); // Default to an empty string if undefined
        }
    }, [content?.buttonText]);

    return (
        <Box
            className="ctaBlock"
            {...createHandlers(`${id}.ctaBlock.container`)}
            sx={{
                ...styles?.container,
				...(content.backgroundImage && {
					backgroundImage: `url(${variables.imageDir}/${content.backgroundImage})`,
				}),
                outline: getOutline(`${id}.ctaBlock.container`),
            }}
        >
            <TextBlock
                content={content?.textBlock}
                config={config?.textBlock}
                styles={styles?.textBlock}
                styleKit={styleKit}
                id={id}
            />
            <Button
                variant="contained"
                {...createHandlers(`${id}.ctaBlock.button`)}
                sx={{
                    ...styles?.button?.container,
                    outline: getOutline(`${id}.ctaBlock.button`),
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
                    {...createHandlers(`${id}.ctaBlock.buttonText`)}
                    inputStyle={{
                        outline: getOutline(
                            `${id}.ctaBlock.buttonText`
                        ),
                    }}
                />
            </Button>
        </Box>
    );
};

export default CtaBlock;
