"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import data from "./data";
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

export default function Home() {
	const { isMobile, isTablet, isDesktop } = useSelector(
		(state: RootState) => state.responsive
    );
    const [mounted, setMounted] = useState(false);
	const { styles } = useCustomStyles();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <Box className="page" sx={styles.page} >
                {/* <Section011 /> */}
                <Section013 styles={styles.s013} data={data.s013} />
                <Section014 styles={styles.s014} data={data.s014} id="s014" />
                <Section015 styles={styles.s015} data={data.s015} id="s015" />
                <Section016 styles={styles.s016} data={data.s016} id="s016" />
                <Section016 styles={styles.s016a} data={data.s016a} id="s016a" />
                <Section017 styles={styles.s017} data={data.s017} id="s017" />
                <Section018 styles={styles.s018} data={data.s018} id="s018" />
            </Box>
        </ThemeProvider>
    );
}
