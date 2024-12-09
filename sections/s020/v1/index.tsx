import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";

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
            component="section"
            sx={styles?.container}
        >
			
		</Box>
	);
};

export default Section020;
