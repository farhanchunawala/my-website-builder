// import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock01/v1";

const Section016: React.FC<Props> = ({ styles, content, config, id }) => {
    const { isMobile, isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Box
            component="section"
            sx={styles?.container}
            id={id}
        >
            <Image
                style={styles?.image}
                src={content?.imageUrl}
                alt="company logo"
                width={1305}
                height={833}
                layout="responsive"
            />
            <CtaBlock
                content={content?.ctaBlock}
                config={config?.ctaBlock}
                styles={styles?.ctaBlock}
            />
        </Box>
    );
};

export default Section016;
