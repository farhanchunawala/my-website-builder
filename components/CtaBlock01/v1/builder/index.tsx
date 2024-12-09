import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1/builder";
import Button from "@mui/material/Button";
// import { Button } from "@mui/base/Button";
// import { Box, styled } from "@mui/system";
import useEvent from "@/app/hooks/useEvent";

const CtaBlock: React.FC<Props> = ({ content, config, styles }) => {
    const { hoveredElement, focusedElement, createHandlers } =
        useEvent();

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
            >
                {content?.buttonText}
            </Button>
        </Box>
    );
};

export default CtaBlock;
