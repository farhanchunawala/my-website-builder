import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import Image from "next/image";
import TextBlock from "@/components/TextBlock/v2.1";

const Section023: React.FC<Props> = ({ styles, config, content, id }) => {
    const { isMobile, isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Box component="section" sx={styles?.container} id={id}>
            <Box sx={styles?.imgContainer}>
                <Image
                    style={styles?.logo}
                    alt="Firexio"
                    src={`${variables.imageDir}/${content?.imageUrl}`}
                    layout="responsive"
                />
                <Image
                    style={styles?.social1}
                    alt="Firexio"
                    src={`${variables.imageDir}/${content?.imageUrl}`}
                    layout="responsive"
                />
                <Image
                    style={styles?.social2}
                    alt="Firexio"
                    src={`${variables.imageDir}/${content?.imageUrl}`}
                    layout="responsive"
                />
                <Image
                    style={styles?.social3}
                    alt="Firexio"
                    src={`${variables.imageDir}/${content?.imageUrl}`}
                    layout="responsive"
                />
            </Box>
            <TextBlock
                style={styles?.text}
                config={config?.text}
                content={content?.text}
            />
		</Box>
	);
};

export default Section023;
