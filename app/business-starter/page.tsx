"use client";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setData } from "@/lib/features/data/dataSlice";
import { useEffect, useState } from "react";
// import "./page.css";
import variables from "./variables";
import { ThemeProvider } from "@mui/material/styles";
import { theme, useTheme } from "./theme";
import Box from "@mui/material/Box";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useMode from "@/lib/hooks/useMode";
// import Section011 from "@/sections/s011/v1";
import Section013 from "@/sections/s013/v1";
import Section014 from "@/sections/s014/v1";
import Section015 from "@/sections/s015/v1";
import Section016 from "@/sections/s016/v1";
import Section017 from "@/sections/s017/v1";
import Section018 from "@/sections/s018/v1";

export default function Home() {
    useMode();
    const dispatch = useDispatch();
	const { config, content, styles, styleKit } = useSelector(
		(state: RootState) => state.data.data
	);
    const { device } = useSelector(
        (state: RootState) => state.responsive
    );
    const [mounted, setMounted] = useState(false);
    const { mapStyles } = useMapStyles();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

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
                    ...mapStyles(`page`),
                    // ...mapStyles(styles?.page, styleKit, device),
                }}
            >
                <Section013
                    styles={styles.s013}
                    content={content.s013}
                    config={config.s013}
                    styleKit={styleKit}
                    variables={variables}
                />
                <Section014 path="s014" />
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
