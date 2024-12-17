import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1";

const Section021: React.FC<Props> = ({ styles, config, content, id }) => {
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
        >
			
			<TextBlock
			content={content?.textBlock1}
			config={config?.textBlock}
			styles={styles?.textBlock}
			/>
			<TextBlock
			content={content?.textBlock2}
			config={config?.textBlock}
			styles={styles?.textBlock}
			/>
			<TextBlock
			content={content?.textBlock3}
			config={config?.textBlock}
			styles={styles?.textBlock}
			/>
			<TextBlock
			content={content?.textBlock4}
			config={config?.textBlock}
			styles={styles?.textBlock}
			/>
		</Box>
	);
};

export default Section021;
