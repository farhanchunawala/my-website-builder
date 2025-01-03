import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock01/v1";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { useMapStyles } from "@/lib/hooks/useMapStyles";

interface Props {
    path: string;
}

const Section014: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
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
            className="s014"
            id="s014"
            sx={{ ...mapStyles(`${path}.container`) }}
            {...designFrame(`${path}.container`)}
        >
            <CtaBlock path={`${path}.ctaBlock`} />
        </Box>
    );
};

export default Section014;
