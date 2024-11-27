// import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1";

const Section017: React.FC<Props> = ({ styles, content, config, id }) => {
	const { isMobile, isTablet, isDesktop } = useSelector(
		(state: RootState) => state.responsive
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
            sx={styles?.container}
            id={id}
        >
			<TextBlock
				content={content?.textBlock}
				config={config?.textBlock}
				styles={styles?.textBlock}
			/>
			<Box sx={styles?.columns?.container}>
				<TextBlock
					content={content?.columns[0]}
					config={config?.columns[0]}
					styles={styles?.columns?.textBlock}
				/>
				<TextBlock
					content={content?.columns[1]}
					config={config?.columns[1]}
					styles={styles?.columns?.textBlock}
				/>
				<TextBlock
					content={content?.columns[2]}
					config={config?.columns[2]}
					styles={styles?.columns?.textBlock}
				/>
			</Box>
		</Box>
	);
};

export default Section017;
