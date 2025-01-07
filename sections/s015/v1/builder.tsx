import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextBlock from "@/components/TextBlock/v1.1/builder";
import { mapStyles } from "@/lib/helpers/mapStyles";

const Section015: React.FC<Props> = ({
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
            sx={{
                ...mapStyles(styles?.container, styleKit, device)
            }}
            className={id}
            id={id}
        >
            <TextBlock
                content={content?.textBlock}
                config={config?.textBlock}
                styles={styles?.textBlock}
                styleKit={styleKit}
            />
            <Divider
                sx={{
                    ...mapStyles(styles?.divider, styleKit, device)
                }}
            />
        </Box>
    );
};

export default Section015;
