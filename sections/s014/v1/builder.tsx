import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
// import { Box } from '@mui/system';
import CtaBlock from "@/components/CtaBlock01/v1/builder";
import Image from "next/image";
import useEvent from "@/lib/hooks/useEvent";
import { mapStyles } from "@/lib/helpers/mapStyles";

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
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );
    const { createHandlers, getOutline } = useEvent();
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
            {...createHandlers(`${id}.container`)}
            sx={{
                // padding: styleKit.layout.sectionGap,
                // // position: "relative",
                // marginBottom:
                //     styleKit.scale?.[styles?.container?.marginBottom],
                // // backgroundImage: `url("${variables.imageDir}/${content?.imageUrl}")`,
                // // backgroundImage: `${variables.imageDir}/${content?.imageUrl}`,
                // ...styles.container,
				...mapStyles(styles?.container, styleKit, device),
                outline: getOutline(`${id}.container`),
            }}
            id={id}
            className={id}
        >
            <CtaBlock
                content={content?.ctaBlock}
                config={config?.ctaBlock}
                styles={styles?.ctaBlock}
                styleKit={styleKit}
                variables={variables}
                updateData={updateData}
                parentPath={grandChildPath}
                id={id}
            />
        </Box>
    );
};

export default Section014;
