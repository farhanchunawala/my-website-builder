import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
// import { Box } from '@mui/system';
import CtaBlock from "@/components/CtaBlock01/v1/builder";
import useEvent from "@/lib/hooks/useEvent";
import { useMapStyles } from "@/lib/hooks/useMapStyles";

const Section014: React.FC<Props> = ({ path, id }) => {
    const { mapStyles } = useMapStyles();
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
            {...createHandlers(`${path}.container`)}
            sx={{
                ...mapStyles(`${path}.container`),
                outline: getOutline(`${path}.container`),
            }}
            id={id}
            className={id}
        >
            <CtaBlock path={`${path}.ctaBlock`} />
        </Box>
    );
};

export default Section014;
