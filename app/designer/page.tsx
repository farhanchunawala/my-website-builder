"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import content from "./content";
import config from "./config";
import { useCustomStyles } from "./customStyles";
import { ThemeProvider } from "@mui/material/styles";
// import { ThemeProvider } from '@mui/system';
import { theme } from "./theme";
import Box from "@mui/material/Box";
// import { Box } from '@mui/system';
import "./page.scss";
import TextField from "@mui/material/TextField";
import Section014 from "@/sections/s014/v1/builder";
// import Section015 from "@/sections/s015/v1/builder";

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
                <Box className="page-content">
                    <Section014
                        styles={styles.s014}
                        content={content.s014}
                        config={config.s014}
                        id="s014"
                    />
                    {/* <Section015
                        styles={styles.s015}
                        content={content.s015}
                        config={config.s015}
                        id="s015"
                    /> */}
                </Box>
                {/* <Box className="side-bar">
                    <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                    />
                </Box> */}
            </Box>
        </ThemeProvider>
    );
}
