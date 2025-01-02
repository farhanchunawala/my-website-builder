import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock01/v1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";

const Section014: React.FC<Props> = ({ path, id }) => {
    const { mapStyles } = useMapStyles();
    const device = useSelector(
        (state: RootState) => state.responsive.device
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
            sx={{ ...mapStyles(`${path}.container`) }}
            className={id}
            id={id}
        >
            <CtaBlock path={`${path}.ctaBlock`} />
        </Box>
    );
};

export default Section014;
