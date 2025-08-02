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
import { useSearchParams } from "next/navigation";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import BuilderPanel from "@/components/BuilderPanel/v1.1";
// import BuilderPanel from "@/components/BuilderPanel2/v1.1";
import { useRenderStructure } from "@/lib/hooks/useRenderStructure";
import { setMode } from "@/lib/features/mode/modeSlice";
import { get } from "lodash-es";

export default function Home() {
    // useMode();
    const dispatch: AppDispatch = useDispatch();
    // const mode = useSelector((state: RootState) => state.mode);
    const { config, content, styles } = useSelector(
        (state: RootState) => ({
            globalConfig: state.data.data.config,
            config: get(state, `data.data.config`),
            content: get(state, `data.data.content`),
            styles: get(state, `data.data.styles`),
        })
    );
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { renderStructure } = useRenderStructure();
    const [mounted, setMounted] = useState(false);
    const [builderPanel, setBuilderPanel] = useState(true);

    const searchParams = useSearchParams();
    const route = searchParams.get("page");

    useEffect(() => {
        dispatch(fetchData({ route }));
    }, [dispatch, route]);

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
        // useMode();
        dispatch(setMode("builder"));
        return null;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ModeInitializer />
            <ThemeProvider theme={theme}>
                <Box className="page-builder">
                    {builderPanel && <BuilderPanel panel="leftPanel" />}
                    {renderStructure("")}
                    {builderPanel && <BuilderPanel panel="rightPanel" />}
                    <Fab
                        color="primary"
                        aria-label="Save Data"
                        sx={{
                            position: "fixed",
                            bottom: 32,
                            right: 32,
                        }}
                        onClick={() => dispatch(saveData({ page }))}
                    >
                        <SaveAltIcon />
                    </Fab>
                </Box>
            </ThemeProvider>
        </Suspense>
    );
}
