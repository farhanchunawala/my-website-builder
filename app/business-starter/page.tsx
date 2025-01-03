"use client";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setData } from "@/lib/features/data/dataSlice";
import { useEffect, useState } from "react";
import "./page.scss";
import variables from "./variables";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Box from "@mui/material/Box";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useMode from "@/lib/hooks/useMode";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
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
    const mode = useSelector((state: RootState) => state.mode);
    const { config, content, styles, styleKit } = useSelector(
        (state: RootState) => state.data.data
    );
    const [mounted, setMounted] = useState(false);
    const { mapStyles } = useMapStyles();
    const [sidePanel, setSidePanel] = useState(false);

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
            <Box className="page">
                <Box
                    className="page-content"
                    sx={{
                        ...mapStyles(`page`),
                        // ...mapStyles(styles?.page, styleKit, device),
                    }}
                >
                    <Section013
                        // styles={styles.s013}
                        // content={content.s013}
                        // config={config.s013}
                        // styleKit={styleKit}
                        // variables={variables}
						path="s013"
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
            </Box>
            {mode === "builder" && (
                <>
                    {sidePanel && (
                        <Box className="side-bar">
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                            />
                            <button
                                onClick={toggleSidePanel}
                                aria-label="Close Side Panel"
                            >
                                Close Panel
                            </button>
                        </Box>
                    )}
                    <Fab
                        color="primary"
                        aria-label="Save Data"
                        sx={{
                            position: "fixed",
                            bottom: 32,
                            right: 32,
                        }}
                        // onClick={saveData}
                    >
                        <SaveAltIcon />
                    </Fab>
                </>
            )}
        </ThemeProvider>
    );
}
