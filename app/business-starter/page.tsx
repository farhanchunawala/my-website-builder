"use client";
import { AppDispatch, RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, saveData } from "@/lib/features/data/dataThunks";
import { useEffect, useState } from "react";
import "./page.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Box from "@mui/material/Box";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
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
import { Suspense } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
    // useMode();
    const dispatch: AppDispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.mode);
    const { config, content, styles, styleKit } = useSelector(
        (state: RootState) => state.data.data
    );
    const [mounted, setMounted] = useState(false);
    const { mapStyles } = useMapStyles();
    const [sidePanel, setSidePanel] = useState(false);
    const pathname = usePathname().slice(1);

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
        setSidePanel(!sidePanel);
    };

    function ModeInitializer() {
        useMode();
        return null;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ModeInitializer />
            <ThemeProvider theme={theme}>
                <Box className="page">
                    <Box
                        className="page-content"
                        sx={{ ...mapStyles(`page`) }}
                    >
                        <Section013 path="s013" />
                        <Section014 path="s014" />
                        <Section015
                            id={content.s014.ctaBlock.buttonLink}
                            path="s015"
                        />
                        <Section016
                            id={content.s013.navlinks[0].link}
                            path="s016"
                        />
                        <Section016
                            id={content.s013.navlinks[1].link}
                            path="s016a"
                        />
                        <Section017
                            id={content.s013.navlinks[2].link}
                            path="s017"
                        />
                        <Section018
                            id={content.s013.navlinks[3].link}
                            path="s018"
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
                            onClick={() =>
                                dispatch(saveData({ pathname }))
                            }
                        >
                            <SaveAltIcon />
                        </Fab>
                    </>
                )}
            </ThemeProvider>
        </Suspense>
    );
}
