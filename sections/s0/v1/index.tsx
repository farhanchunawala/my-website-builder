import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type { Section0Props } from "./types";

const Section0: React.FC<Section0Props> = ({
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
		<div className="s0 container" style={styles.container}>
			
		</div>
	);
}

export default Section0;
