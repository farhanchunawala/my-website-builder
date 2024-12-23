import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock01/v1/builder";

const Section018: React.FC<Props> = ({ styles, content, config, id }) => {
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
			<CtaBlock
				content={content?.ctaBlock}
				config={config?.ctaBlock}
				styles={styles?.ctaBlock}
			/>
		</Box>
	);
};

export default Section018;
