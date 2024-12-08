import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1/builder";
import Button from "@mui/material/Button";
// import { Button } from "@mui/base/Button";
// import { Box, styled } from "@mui/system";
import useHover from "@/app/hooks/useHover";

const CtaBlock: React.FC<Props> = ({ content, config, styles }) => {
	// const {
    //     hoveredElement: hoveredElement,
    //     handleMouseEnter: handleMouseEnter,
    //     handleMouseLeave: handleMouseLeave,
    // } = useHover();
	
    return (
        <Box
            sx={{
                ...styles?.container,
                "&:hover": {
                    outline: "1px solid #007BFF",
					// outline:
                    //     hoveredElement === 31
                    //         ? "1px solid #007BFF"
                    //         : "none",
                },
            }}
			// onMouseEnter={() => handleMouseEnter(31)}
            // onMouseLeave={handleMouseLeave}
        >
            <TextBlock
                content={content?.textBlock}
                config={config?.textBlock}
                styles={styles?.textBlock}
            />
            <Button
                variant="contained"
                sx={styles?.button?.container}
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
