import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock/v1.1";
import CtaBlock from "@/components/CtaBlock/v1.1";

const Section019: React.FC<Props> = ({ styles, content, config, id }) => {
    const { isMobile, isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
		<Box
            component="section"
            sx={styles?.container}
			id={id}
        >
			<TextBlock
				content={content?.textBlock}
				config={config?.textBlock}
				styles={styles?.textBlock}
			/>
			<CtaBlock
				content={content?.ctaBlock}
				config={config?.ctaBlock}
				styles={styles?.ctaBlock}
			/>
		</Box>
	);
};

export default Section019;
