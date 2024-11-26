"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import data from "./data";
import { useCustomStyles } from "./customStyles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Box from "@mui/material/Box";
import Section016 from "@/sections/s016/v1";

export default function Home() {
    const { isMobile, isTablet, isDesktop } = useSelector(
		(state: RootState) => state.responsive
    );
    const [mounted, setMounted] = useState(false);
	const { styles } = useCustomStyles();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
		<ThemeProvider theme={theme}>
			<Box className="page" sx={styles.page}>
				<Section016 styles={styles.s016} data={data.s016} id="s016" />
			</Box>
		</ThemeProvider>
    );
}
