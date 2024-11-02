import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type { Section017Props } from "./types";
import Text from "@/elements/Text01/v1";

const Section017: React.FC<Section017Props> = ({
	styles,
	data
}) => {
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
		<div className="s017 container" style={styles?.container}>
			
		</div>
	);
}

export default Section017;
