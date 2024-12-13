"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import content from "./content";
import config from "./config";
import { useCustomStyles } from "./customStyles";
// import "./page.css";
// import Section011 from "@/sections/s011/v1";
import Section013 from "@/sections/s013/v1";
import Section014 from "@/sections/s014/v1";
import Section015 from "@/sections/s015/v1";
import Section016 from "@/sections/s016/v1";
import Section017 from "@/sections/s017/v1";
import Section018 from "@/sections/s018/v1";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Box from "@mui/material/Box";
import axios from "axios";
import { usePathname } from 'next/navigation';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home() {
    const { isMobile, isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );
    const [mounted, setMounted] = useState(false);
    const { styles } = useCustomStyles();
    const [data, setData] = useState(null);

	const pathname = usePathname();
    const route = pathname.split('/')[1];
	
    const fetchContent = async () => {
        try {
            const response = await axios.get(
                `${baseUrl}/api/contents/${route}`
            );
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchContent();
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <Box className="page" sx={styles.page}>
                {/* <Section011 /> */}
                <Section013
                    styles={styles.s013}
                    content={content.s013}
                    config={config.s013}
                />
                <Section014
                    styles={styles.s014}
                    content={content.s014}
                    config={config.s014}
                    id="s014"
                />
                <Section015
                    styles={styles.s015}
                    content={content.s015}
                    config={config.s015}
                    id={content.s014.ctaBlock.buttonLink}
                />
                <Section016
                    styles={styles.s016}
                    content={content.s016}
                    config={config.s016}
                    id={content.s013.navlinks[0].link}
                />
                <Section016
                    styles={styles.s016a}
                    content={content.s016a}
                    config={config.s016a}
                    id={content.s013.navlinks[1].link}
                />
                <Section017
                    styles={styles.s017}
                    content={content.s017}
                    config={config.s017}
                    id={content.s013.navlinks[2].link}
                />
                <Section018
                    styles={styles.s018}
                    content={content.s018}
                    config={config.s018}
                    id={content.s013.navlinks[3].link}
                />
            </Box>
        </ThemeProvider>
    );
}
