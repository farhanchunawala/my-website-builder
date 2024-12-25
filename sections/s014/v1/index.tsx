import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock01/v1";
import { mapStyles } from "@/lib/helpers/mapStyles";

const Section014: React.FC<Props> = ({
    styles,
    content,
    config,
    variables,
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

export default Section014;
