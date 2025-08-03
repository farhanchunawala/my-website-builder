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
import useMode from "@/z_archive/useMode";
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
import { useSearchParams } from "next/navigation";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import BuilderPanel from "@/components/BuilderPanel/v1.1";
// import BuilderPanel from "@/components/BuilderPanel2/v1.1";
import { useRenderStructure } from "@/lib/hooks/useRenderStructure";
import { setMode } from "@/lib/features/builder/builderSlice";
import { useViewport } from "@/lib/hooks/useViewport";
import { get } from "lodash-es";

export default function Home() {
    const dispatch: AppDispatch = useDispatch();
    // const { mode } = useSelector((state: RootState) => state.builder);
    const { renderStructure } = useRenderStructure();
    const [mounted, setMounted] = useState(false);

    const viewport = useViewport();
    const screenSize = "1080px";
    const zoom = "100%";
    const previewSizes = {
        mobile: { width: 375, height: 667 },
        tablet: { width: 768, height: 1024 },
        desktop: { width: 1280, height: 800 },
    };

    const pageWidth = (() => {
        if (zoom === "100%") return screenSize;
        // if (viewport.width >= 1600) return "1400px";
        // if (viewport.width >= 1200) return "1100px";
        // if (viewport.width >= 992) return "900px";
        // if (viewport.width >= 768) return "700px";
        // return "100%";
    })();

    const searchParams = useSearchParams();
    const route = searchParams.get("page") ?? "";

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
                    <Box className="top-bar"></Box>
                    <BuilderPanel panel="leftPanel" />
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
