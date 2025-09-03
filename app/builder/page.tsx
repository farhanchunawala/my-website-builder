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
import useMode from "@/z_archive/useMode";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import ComputerIcon from "@mui/icons-material/Computer";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
// import Section011 from "@/sections/s011/v1";
import Section013 from "@/sections/s013/v1";
// import Section014 from "@/sections/s014/v1";
import Section014 from "@/sections/s014/v3";
import Section015 from "@/sections/s015/v1";
import Section016 from "@/sections/s016/v1";
import Section017 from "@/sections/s017/v1";
import Section018 from "@/sections/s018/v1";
import { Suspense } from "react";
// import { useSearchParams } from "next/navigation";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
// import BuilderPanel from "@/components/BuilderPanel/v1.1";
// import BuilderPanel from "@/components/BuilderPanel2/v1.1";
import BuilderPanel from "@/components/BuilderPanel3/v1.1";
import { useRenderStructure } from "@/lib/hooks/useRenderStructure";
import { setMode } from "@/lib/features/builder/builderSlice";
import { useViewport } from "@/lib/hooks/useViewport";
import MiniPanel from "@/components/MiniPanel/v1.1";
import TopPanel from "@/components/TopPanel/v1.1";
import { LayersPanel } from "@/components/LayersPanel/v1.1";
import StylingPanel from "@/components/StylingPanel/v1.1";
import ElementsPanel from "@/components/ElementsPanel/v1.1";
import React from "react";
// import TopPanel from "@/components/TopPanel/v1.1"

export default function Home() {
    const dispatch: AppDispatch = useDispatch();
    // const { mode } = useSelector((state: RootState) => state.builder);
    const { renderStructure } = useRenderStructure();
    const [mounted, setMounted] = useState(false);
    const [route, setRoute] = useState("");
    const data = useSelector((state: RootState) => state.data.data);
    const config = data?.config;
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const viewport = useViewport();
    const screenSize = "1080px";
    const zoom = "100%";
    const previewSizes = {
        mobile: { minWidth: 0, maxWidth: 375 },
        tablet: { minWidth: 768, maxWidth: 1024 },
        desktop: { minWidth: 1280, maxWidth: "100%" },
    };

    const pageWidth = (() => {
        if (zoom === "100%") return screenSize;
        // if (viewport.width >= 1600) return "1400px";
        // if (viewport.width >= 1200) return "1100px";
        // if (viewport.width >= 992) return "900px";
        // if (viewport.width >= 768) return "700px";
        // return "100%";
    })();

    const screens = [
        {
            svg: (
                // <DesktopMacIcon/>
                <svg
                    data-wf-icon="DesktopStarBreakpointIcon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 5.36602L10.1519 6.43301L9.65192 5.56699L11.5 4.5L9.65193 3.43301L10.1519 2.56699L12 3.63397V1.5H13V3.63397L14.8481 2.56699L15.3481 3.43301L13.5 4.5L15.3481 5.56699L14.8481 6.43301L13 5.36602V7.5H12V5.36602ZM3 4H8V5H3V12H13V9H14V12H16V13H0V12H2V5C2 4.44772 2.44772 4 3 4Z"
                        fill="currentColor"
                    ></path>
                </svg>
            ),
        },
        {
            svg: (
                // <ComputerIcon />,
                <svg
                    data-wf-icon="TabletPortraitBreakpointIcon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 3H12V13H4V3ZM3 3C3 2.44772 3.44772 2 4 2H12C12.5523 2 13 2.44772 13 3V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V3ZM9.5 11H6.5V12H9.5V11Z"
                        fill="currentColor"
                    ></path>
                </svg>
            ),
        },
        {
            svg: (
                // <TabletMacIcon />
                <svg
                    data-wf-icon="MobileLandscapeBreakpointIcon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 9V7H11V9H12Z" fill="currentColor"></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 12C2.89543 12 2 11.1046 2 10L2 6C2 4.89543 2.89543 4 4 4L12 4C13.1046 4 14 4.89543 14 6V10C14 11.1046 13.1046 12 12 12H4ZM3 10L3 6C3 5.44772 3.44772 5 4 5L12 5C12.5523 5 13 5.44772 13 6V10C13 10.5523 12.5523 11 12 11L4 11C3.44772 11 3 10.5523 3 10Z"
                        fill="currentColor"
                    ></path>
                </svg>
            ),
        },
        {
            svg: (
                // <SmartphoneIcon />
                <svg
                    data-wf-icon="MobileBreakpointIcon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7 12H9V11H7V12Z" fill="currentColor"></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 4C4 2.89543 4.89543 2 6 2H10C11.1046 2 12 2.89543 12 4V12C12 13.1046 11.1046 14 10 14H6C4.89543 14 4 13.1046 4 12V4ZM6 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H6C5.44772 13 5 12.5523 5 12V4C5 3.44772 5.44772 3 6 3Z"
                        fill="currentColor"
                    ></path>
                </svg>
            ),
        },
    ];

    // const searchParams = useSearchParams();
    // const route = searchParams.get("page") ?? "";

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setRoute(params.get("page") ?? "");
    }, []);

    useEffect(() => {
        dispatch(fetchData({ route }));
    }, [dispatch, route]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        dispatch(setMode("builder"));
    }, [dispatch]);

    if (!mounted) {
        return null;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider theme={theme}>
                <Box className="page-builder">
                    {/* <Box className="top-bar">
                        {screens.map((scrn, index) => (
                            <Box className="screens-container" key={index}>
                                <Box
                                    className="screen-sizes"
                                    sx={{
                                        color: "#999999",
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "#000000",
                                        },
                                    }}
                                >
                                    {scrn.svg}
                                </Box>
                            </Box>
                        ))}
                    </Box> */}
                    <TopPanel type="panel"/>
                    {/* <MiniPanel type="panel" /> */}
                    {/* <ElementsPanel type="panel"/> */}
                    {/* {JSON.stringify(config?.children)} */}
                    <LayersPanel data={config?.children} />
                    {/* <BuilderPanel panel="leftPanel" /> */}
                    <Box
                        className="page-frame"
                        sx={{
                            // width: "100%",
                            flex: `1 1 auto`,
                            overflowX: "scroll",
                            display: "flex",
                        }}
                    >
                        <Box
                            className="page"
                            sx={{
                                // width: pageWidth,
                                // width: screenSize,
                                flex: `0 0 ${screenSize}`,
                                // zoom: "75%",
                                // transform: "scale(0.75)",
                                // transformOrigin: "top left",
                                // position: "absolute",
                                // marginLeft: "-260px",
                                // left: "48px",
                                // right: "260px",
                                // right: `calc(260px - 48px)`,
                                margin: "60px auto 0",
                                // overflowX: "scroll",
                                // display: "flex",
                                // flexGrow: 1,
                            }}
                        >
                            {renderStructure("")}
                        </Box>
                    </Box>
                    <BuilderPanel panel="rightPanel" />
                    <Fab
                        color="primary"
                        aria-label="Save Data"
                        sx={{
                            position: "fixed",
                            bottom: 32,
                            right: 32,
                        }}
                        onClick={() => dispatch(saveData({ route }))}
                    >
                        <SaveAltIcon />
                    </Fab>
                </Box>
            </ThemeProvider>
        </Suspense>
    );
}
