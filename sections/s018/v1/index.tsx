import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Text from "@/elements/Text01/v1";
import Button from "@/elements/Button01/v1";

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
			<Text data={data?.text1} styles={styles?.text1} />
			<Text data={data?.text2} styles={styles?.text2} />
			<Button data={data?.button} styles={styles?.button} />
		</section>
	);
};

export default Section018;
