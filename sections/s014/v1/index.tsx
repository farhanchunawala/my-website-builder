import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Text from "@/elements/Text01/v1";
import Button from "@mui/material/Button";
import CtaBlock from "@/components/CtaBlock01/v1";

const Section014: React.FC<Props> = ({ styles, data }) => {
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
		<section style={styles.container}>
			<CtaBlock
				data={data?.ctaBlock}
				styles={styles?.ctaBlock}
			/>
			{/* <div style={styles.backGround}>
				<Text
					data={data?.heading}
					styles={styles?.heading}
				/>
				<Text
					data={data?.subheading}
					styles={styles.subheading}
				/>
				<Button
                    variant="contained"
                    sx={styles.button.container}
                >
                    { data.button.content }
                </Button>
			</div> */}
		</section>
	);
};

export default Section014;
