"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import variables from "./variables";
import config from "./config";
import content from "./content";
import { useCustomStyles } from "./customStyles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Box from "@mui/material/Box";
import Section013 from "@/sections/s013/v1";
import Section016 from "@/sections/s016/v1";
import Section019 from "@/sections/s019/v1";
import Section020 from "@/sections/s020/v1";
import Section021 from "@/sections/s021/v1";

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
				<Section013
                    styles={styles.s013}
                    content={content.s013}
                    config={config.s013}
                />
                <Section016
                    styles={styles.s016}
                    config={config.s016}
                    content={content.s016}
					variables={variables}
                    id="s016"
                />
                <Section019
                    styles={styles.s019}
                    config={config.s019}
                    content={content.s019}
                    id="s019"
                />
                <Section020
                    styles={styles.s020}
                    config={config.s020}
                    content={content.s020}
                    id="s020"
                />
                <Section021
                    styles={styles.s021}
                    config={config.s021}
                    content={content.s021}
                    id="s021"
                />
            </Box>
        </ThemeProvider>
    );
}
