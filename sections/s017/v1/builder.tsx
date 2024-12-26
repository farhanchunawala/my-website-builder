import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1/builder";
import { mapStyles } from "@/lib/helpers/mapStyles";

const Section017: React.FC<Props> = ({
    styles,
    content,
    config,
    styleKit,
    id,
}) => {
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Box
            component="section"
            sx={{ ...mapStyles(styles?.container, styleKit, device) }}
            className={id}
            id={id}
        >
            <TextBlock
                content={content?.textBlock}
                config={config?.textBlock}
                styles={styles?.textBlock}
                styleKit={styleKit}
            />
            <Box
                sx={{
                    ...mapStyles(
                        styles?.columns?.container,
                        styleKit,
                        device
                    ),
                }}
            >
                <TextBlock
                    content={content?.columns[0]}
                    config={config?.columns[0]}
                    styles={styles?.columns?.textBlock}
                    styleKit={styleKit}
                />
                <TextBlock
                    content={content?.columns[1]}
                    config={config?.columns[1]}
                    styles={styles?.columns?.textBlock}
                    styleKit={styleKit}
                />
                <TextBlock
                    content={content?.columns[2]}
                    config={config?.columns[2]}
                    styles={styles?.columns?.textBlock}
                    styleKit={styleKit}
                />
            </Box>
        </Box>
    );
};

export default Section017;
