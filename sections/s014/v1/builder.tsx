// import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
// import { Box } from '@mui/system';
import CtaBlock from "@/components/CtaBlock01/v1/builder";
import Image from "next/image";

const Section014: React.FC<Props> = ({
    styles,
    content,
    config,
    variables,
    styleKit,
	parentPath,
    updateData,
    id,
}) => {
	const childPath = `${parentPath}.childValue`;
    const grandChildPath = `${parentPath}.ctaBlock`;
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
            sx={{
                padding: styleKit.layout.sectionGap,
				position: "relative",
                marginBottom:
                    styleKit.scale?.[styles?.container?.marginBottom],
                ...styles.container.css,
            }}
            id={id}
        >
            <Image
                style={{
                    ...styles?.image,
                }}
                src={`${variables.imageDir}/${content?.imageUrl}`}
                alt="Hero Banner"
                width={1200}
                height={620}
            />
            <CtaBlock
                content={content?.ctaBlock}
                config={config?.ctaBlock}
                styles={styles?.ctaBlock}
                styleKit={styleKit}
				updateData={updateData}
                parentPath={grandChildPath}
                id={id}
            />
        </Box>
    );
};

export default Section014;
