import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1";
import Button from "@mui/material/Button";
import { mapStyles } from "@/lib/helpers/mapStyles";

const CtaBlock: React.FC<Props> = ({
    content,
    config,
    styles,
    styleKit,
    variables,
}) => {
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );

    return (
        <Box
            className="ctaBlock"
            sx={{
                ...mapStyles(styles?.container, styleKit, device),
                ...(content.backgroundImage && {
                    backgroundImage: `url(${variables.imageDir}/${content.backgroundImage})`,
                }),
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
                sx={{
                    ...mapStyles(
                        styles?.button?.container,
                        styleKit,
                        device
                    ),
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
