import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type { Section017Props } from "./types";
// import Text from "@/elements/Text01/v1";
import TextBlock from "@/components/TextBlock01/v1";

const Section017: React.FC<Section017Props> = ({ styles, data }) => {
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
		<div style={styles?.container}>
			<TextBlock
				data={data?.textBlock}
				styles={styles?.textBlock}
			/>
			<div style={styles?.columns?.container}>
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
			</div>
		</div>
	);
};

export default Section017;
