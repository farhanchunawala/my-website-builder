import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock/v1.1/builder";
import { mapStyles } from "@/lib/utils/mapStyles";

const Section018: React.FC<Props> = ({
    styles,
    content,
    config,
    styleKit,
	variables,
    id,
}) => {
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Box
            component="section"
            sx={{
				...mapStyles(styles?.container, styleKit, device)
            }}
            id={id}
            className={id}
        >
            <CtaBlock
                content={content?.ctaBlock}
                config={config?.ctaBlock}
                styles={styles?.ctaBlock}
                styleKit={styleKit}
				variables={variables}
            />
        </Box>
    );
};

export default Section018;
