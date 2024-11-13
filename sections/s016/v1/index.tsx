import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock01/v1";

const Section016: React.FC<Props> = ({ styles, data }) => {
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
            className="s016"
        >
            <Image
                style={styles?.image}
                src={data.imageUrl}
                alt="company logo"
                width={1305}
                height={833}
                layout="responsive"
            />
            <CtaBlock
                data={data?.ctaBlock}
                styles={styles?.ctaBlock}
            />
        </Box>
    );
};

export default Section016;
