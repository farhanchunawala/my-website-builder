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
    variables,
    styleKit,
    path,
    id,
}) => {
    const { config, content, styles } = useSelector(
        (state) => state.data.data
    );
    const [mounted, setMounted] = useState(false);
    const { createHandlers, getOutline } = useEvent();
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Box
            component="section"
            {...createHandlers(`${path}.container`)}
            sx={{
                ...mapStyles(
                    styles?.[path]?.container,
                    styleKit,
                    device
                ),
                outline: getOutline(`${path}.container`),
            }}
            id={id}
            className={id}
        >
            <CtaBlock
                content={content?.[path]?.ctaBlock}
                config={config?.[path]?.ctaBlock}
                styles={styles?.[path]?.ctaBlock}
                styleKit={styleKit}
                variables={variables}
                path={`${path}.ctaBlock`}
                id={id}
            />
        </Box>
    );
};

export default Section014;
