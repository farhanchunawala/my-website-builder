import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Text from "@/elements/Text01/v1";
import Button from "@mui/material/Button";
import CtaBlock from "@/components/CtaBlock01/v1";

const Section018: React.FC<Props> = ({ styles, data }) => {
	const { isMobile, isTablet, isDesktop } = useSelector(
		(state: RootState) => state.responsive
	);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<section style={styles?.container}>
			<CtaBlock
				data={data?.ctaBlock}
				styles={styles?.ctaBlock}
			/>
		</section>
	);
};

export default Section018;
