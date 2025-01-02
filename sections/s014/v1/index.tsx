import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock01/v1";
import useEvent from "@/lib/hooks/useEvent";
import { useMapStyles } from "@/lib/hooks/useMapStyles";

const Section014: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { createHandlers, getOutline } = useEvent();
    const [mounted, setMounted] = useState(false);
    const mode = useSelector((state: RootState) => state.mode);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Box
            component="section"
            className="s014"
            id="s014"
            {...(mode === "builder" &&
                createHandlers(`${path}.container`))}
            // {...createHandlers(`${path}.container`)}
            sx={{
                ...mapStyles(`${path}.container`),
                outline: getOutline(`${path}.container`),
            }}
        >
            <CtaBlock path={`${path}.ctaBlock`} />
        </Box>
    );
};

export default Section014;
