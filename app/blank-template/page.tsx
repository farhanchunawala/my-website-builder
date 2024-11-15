"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import data from "./data";
import { useCustomStyles } from "./customStyles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Box from "@mui/material/Box";

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
			<Box className="page">
				
			</Box>
		</ThemeProvider>
    );
}
