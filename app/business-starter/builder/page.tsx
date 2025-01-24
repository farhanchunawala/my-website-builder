"use client";
import { useEffect, useState } from "react";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "@/lib/features/data/dataThunks";
import "./page.scss";
import variables from "../variables";
// import { content } from "../content";
// import config from "../config";
// import { useCustomStyles } from "../customStyles";
import { ThemeProvider } from "@mui/material/styles";
// import { ThemeProvider } from '@mui/system';
import { theme } from "../theme";
import { usePathname } from "next/navigation";
import axios from "axios";
import Box from "@mui/material/Box";
// import { Box } from '@mui/system';
import Fab from "@mui/material/Fab";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import UploadIcon from "@mui/icons-material/Upload";
import useEvent from "@/lib/hooks/useEvent";
import TextField from "@mui/material/TextField";
import { mapStyles } from "@/lib/helpers/mapStyles";
// import { updateData } from "@/lib/helpers/updateData";
// import Section013 from "@/sections/s013/v1/builder";
import Section013 from "@/sections/s013/v1/builder";
import Section014 from "@/sections/s014/v1/builder";
import Section015 from "@/sections/s015/v1/builder";
import Section016 from "@/sections/s016/v1/builder";
import Section017 from "@/sections/s017/v1/builder";
import Section018 from "@/sections/s018/v1/builder";

export default function Home() {
    const dispatch = useDispatch();
    const { config, content, styles, styleKit } = useSelector(
        (state: RootState) => state.data.data
    );
    const { device } = useSelector(
        (state: RootState) => state.responsive
    );
    const { createHandlers, getOutline } = useEvent();
    const [mounted, setMounted] = useState(false);
    const [sidePanel, setSidePanel] = useState(false);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const pathname = usePathname().slice(1);

    const path2 = pathname.replace("/builder", "");
    // if (pathname.includes("/builder")) {
    // 	const path2 = pathname.replace("/builder", "");
    // }

    const panelStyles = {
        // transform: "scaleX(90vw)",
        // scale: "0.9",
        // transformOrigin: "top left",
        // overflow: "hidden",
    };

    const toggleSidePanel = () => {
        setSidePanel(!sidePanel);
    };

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !content) {
        return null;
    }

    const saveData = async () => {
        try {
            const res = await axios.post(
                `${baseUrl}/api/contents/upsert/${path2}`,
                { route: path2, config, content, styles }
            );
            console.log(res.data);
        } catch (err) {
            console.error("Error:", err);
        }
    };

    // const updateData = (path, newValue) => {
    //     setContent((currentState) =>
    //         produce(currentState, (draft) => {
    //             const keys = path.split(".");
    //             const lastKey = keys.pop();
    //             const target = keys.reduce(
    //                 (node, key) => node[key],
    //                 draft
    //             );
    //             target[lastKey] = newValue;
    //         })
    //     );
    // };

    // const saveFile = async () => {
    //     try {
    //         const data = {
    //             fileName: "content",
    //             fileDir: path2,
    //             fileContent: `export const content = ${JSON.stringify(content, null, 4)};`,
    //         };

    //         const response = await fetch("/api/saveFile", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             console.error("Error response:", errorData);
    //             return;
    //         }

    //         const result = await response.json();
    //         console.log(result.message);
    //     } catch (error) {
    //         console.error("Error saving file:", error);
    //     }
    // };

    // const saveFile2 = async () => {
    //     try {
    //         const fileContent = `
	// 			export const myContent = {
	// 				title: "Dynamic File",
	// 				description: "This file was created dynamically.",
	// 			};
	// 			`;

    //         const response = await fetch("/api/saveFile2", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ fileContent }),
    //         });

    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             console.error("Error response:", errorData);
    //             alert(`Error: ${errorData.error}`);
    //             return;
    //         }

    //         const result = await response.json();
    //         alert(result.message);
    //     } catch (error) {
    //         console.error("Error saving file:", error);
    //         alert("An unexpected error occurred.");
    //     }
    // };

    return (
        <ThemeProvider theme={theme}>
            <Box className="page">
                <Box
                    className="page-content"
                    {...createHandlers(`page.container`)}
                    sx={{
                        ...mapStyles(styles?.page, styleKit, device),
                        ...(sidePanel ? panelStyles : {}),
                        // transform: "scale(0.8)",
                        outline: getOutline(`page.container`),
                    }}
                >
                    {/* <button onClick={toggleSidePanel}>
                        {sidePanel ? "Close Panel" : "Open Panel"}
                    </button> */}
                    <Section013
                        styles={styles.s013}
                        content={content.s013}
                        config={config.s013}
                        styleKit={styleKit}
                        variables={variables}
                    />
                    <Section014
                        path="s014"
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
                {sidePanel && (
                    <Box className="side-bar">
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                        />
                        <button onClick={toggleSidePanel}>
                            {sidePanel ? "Close Panel" : "Open Panel"}
                        </button>
                    </Box>
                )}
                <Fab
                    color="primary"
                    aria-label="add"
                    sx={{
                        position: "fixed",
                        bottom: 32,
                        right: 32,
                    }}
                    onClick={saveData}
                >
                    <SaveAltIcon />
                    {/* <UploadIcon /> */}
                </Fab>
            </Box>
        </ThemeProvider>
    );
}
