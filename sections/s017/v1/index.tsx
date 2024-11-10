import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1";

const Section017: React.FC<Props> = ({ styles, data }) => {
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
            className="s017"
        >
			<TextBlock
				data={data?.textBlock}
				styles={styles?.textBlock}
			/>
			<Box sx={styles?.columns?.container}>
				<TextBlock
					data={data?.columns[0]}
					styles={styles?.columns?.textBlock}
				/>
				<TextBlock
					data={data?.columns[1]}
					styles={styles?.columns?.textBlock}
				/>
				<TextBlock
					data={data?.columns[2]}
					styles={styles?.columns?.textBlock}
				/>
			</Box>
		</Box>
	);
};

export default Section017;
