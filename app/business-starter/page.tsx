"use client";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setData } from "@/lib/features/data/dataSlice";
import { useEffect, useState } from "react";
// import "./page.css";
import variables from "./variables";
// import { content } from "./content";
// import config from "./config";
// import styles from "./customStyles";
import { ThemeProvider } from "@mui/material/styles";
import { theme, useTheme } from "./theme";
import Box from "@mui/material/Box";
import axios from "axios";
import { usePathname } from "next/navigation";
import { mapStyles } from "@/lib/helpers/mapStyles";
// import Section011 from "@/sections/s011/v1";
import Section013 from "@/sections/s013/v1";
import Section014 from "@/sections/s014/v1";
import Section015 from "@/sections/s015/v1";
import Section016 from "@/sections/s016/v1";
import Section017 from "@/sections/s017/v1";
import Section018 from "@/sections/s018/v1";

const imageDir = "starter";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home() {
    const styleKit = useTheme();
    const { isMobile, isTablet, isDesktop, device } = useSelector(
        (state: RootState) => state.responsive
    );
    const dispatch = useDispatch();
    const { config, content, styles } = useSelector(
        (state) => state.data.data
    );
    const [mounted, setMounted] = useState(false);
    // const { styles } = useCustomStyles();
    // const [config, setConfig] = useState(null);
    // const [content, setContent] = useState(null);
    // const [styles, setStyles] = useState(null);

    const pathname = usePathname().slice(1);

    const fetchContent = async () => {
        try {
            const response = await axios.get(
                `${baseUrl}/api/contents/${pathname}`
            );
            setConfig(response.data.config);
            setContent(response.data.content);
            setStyles(response.data.styles);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    // useEffect(() => {
    //     fetchContent();
    // }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !content) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                className="page"
                sx={{
                    ...mapStyles(styles?.page, styleKit, device),
                    // transform: "scale(0.8)",
                    // transformOrigin: "top left",
                }}
            >
                <Section013
                    styles={styles.s013}
                    content={content.s013}
                    config={config.s013}
                    styleKit={styleKit}
                    variables={variables}
                />
                <Section014
                    styles={styles.s014}
                    content={content.s014}
                    config={config.s014}
                    variables={variables}
                    styleKit={styleKit}
                    id="s014"
                />
                <Section015
                    styles={styles.s015}
                    content={content.s015}
                    config={config.s015}
                    styleKit={styleKit}
                    id={content.s014.ctaBlock.buttonLink}
                />
                <Section016
                    styles={styles.s016}
                    content={content.s016}
                    config={config.s016}
                    variables={variables}
                    styleKit={styleKit}
                    id={content.s013.navlinks[0].link}
                />
                <Section016
                    styles={styles.s016a}
                    content={content.s016a}
                    config={config.s016a}
                    variables={variables}
                    styleKit={styleKit}
                    id={content.s013.navlinks[1].link}
                />
                <Section017
                    styles={styles.s017}
                    content={content.s017}
                    config={config.s017}
                    styleKit={styleKit}
                    id={content.s013.navlinks[2].link}
                />
                <Section018
                    styles={styles.s018}
                    content={content.s018}
                    config={config.s018}
                    styleKit={styleKit}
                    id={content.s013.navlinks[3].link}
                />
            </Box>
        </ThemeProvider>
    );
}
