import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";

interface Props {
	id: string
    path: string
}

const Section018: React.FC<Props> = ({ id, path }) => {
	const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Box
            component="section"
            className="s018"
            id={id}
            sx={{ ...mapStyles(`${path}.container`) }}
        >
			<CtaBlock path={`${path}.ctaBlock`} />
        </Box>
    );
};

export default Section018;
