import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock01/v1";

const Section020: React.FC<Props> = ({ styles, config, content, id }) => {
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
			sx={styles?.cardContainer}
			id={id}
		>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<CtaBlock
					content={content?.ctaBlock}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<CtaBlock
					content={content?.ctaBlock}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<CtaBlock
					content={content?.ctaBlock}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<CtaBlock
					content={content?.ctaBlock}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<CtaBlock
					content={content?.ctaBlock}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<CtaBlock
					content={content?.ctaBlock}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
		</Box>
	);
};

export default Section020;
