// page.tsx
"use client";
import { AppDispatch, RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, saveData } from "@/lib/features/data/dataThunks";
import { useEffect, useState } from "react";
// import "./page.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Box, Fab } from "@mui/material";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useMode from "@/lib/hooks/useMode";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
// import Section011 from "@/sections/s011/v1";
import Section013 from "@/sections/s013/v1";
// import Section014 from "@/sections/s014/v1";
import Section014 from "@/sections/s014/v3";
import Section015 from "@/sections/s015/v1";
import Section016 from "@/sections/s016/v1";
import Section017 from "@/sections/s017/v1";
import Section018 from "@/sections/s018/v1";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
// import BuilderPanel from "@/components/BuilderPanel/v1.1";
import BuilderPanel from "@/components/BuilderPanel2/v1.1";
import { useRenderStructure } from "@/lib/hooks/useRenderStructure";
import { get } from "lodash-es";

export default function Home() {
    // useMode();
    const dispatch: AppDispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.mode);
    const { config, content, styles } = useSelector(
        (state: RootState) => ({
            globalConfig: state.data.data.config,
            config: get(state, `data.data.config`),
            content: get(state, `data.data.content`),
            styles: get(state, `data.data.styles`),
        })
    );
    const [mounted, setMounted] = useState(false);
    const { mapStyles } = useMapStyles();
    const [builderPanel, setBuilderPanel] = useState(true);
    const pathname = usePathname().slice(1);
    const { designFrame } = useDesignFrame();
    const { renderStructure } = useRenderStructure();

    useEffect(() => {
        dispatch(fetchData({ pathname }));
    }, [dispatch, pathname]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !content) {
        return null;
    }

    const toggleSidePanel = () => {
        setBuilderPanel(!builderPanel);
    };

    function ModeInitializer() {
        useMode();
        return null;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ModeInitializer />
            <ThemeProvider theme={theme}>
                <Box className="page-builder">
					{mode === "builder" && (
                        <>
                            {builderPanel && <BuilderPanel panel="leftPanel" />}
                            <Fab
                                color="primary"
                                aria-label="Save Data"
                                sx={{
                                    position: "fixed",
                                    bottom: 32,
                                    right: 32,
                                }}
                                onClick={() =>
                                    dispatch(saveData({ pathname }))
                                }
                            >
                                <SaveAltIcon />
                            </Fab>
                        </>
                    )}
                    {renderStructure("")}
                    {/* <Box
                        className="page"
                        sx={{ ...mapStyles(styles.styles) }}
                        {...designFrame(`page`)}
                    > */}
                    {/* <Section013 path="s013" /> */}
                    {/* <Section014 path="s014" /> */}
                    {/* {styles.children.map((item, index) => (
                            
                        ))} */}
                    {/* <Section015
                            path="s015"
                            id={content.s014.ctaBlock.buttonLink}
                        />
                        <Section016
                            path="s016"
                            id={content.s013.navlinks[0].link}
                        />
                        <Section016
                            path="s016a"
                            id={content.s013.navlinks[1].link}
                        />
                        <Section017
                            path="s017"
                            id={content.s013.navlinks[2].link}
                        />
                        <Section018
                            path="s018"
                            id={content.s013.navlinks[3].link}
                        /> */}
                    {/* </Box> */}
                    {mode === "builder" && (
                        <>
                            {builderPanel && <BuilderPanel panel="rightPanel" />}
                            <Fab
                                color="primary"
                                aria-label="Save Data"
                                sx={{
                                    position: "fixed",
                                    bottom: 32,
                                    right: 32,
                                }}
                                onClick={() =>
                                    dispatch(saveData({ pathname }))
                                }
                            >
                                <SaveAltIcon />
                            </Fab>
                        </>
                    )}
                </Box>
            </ThemeProvider>
        </Suspense>
    );
}
