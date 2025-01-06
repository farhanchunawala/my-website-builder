import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";

interface Props {
    id: string;
    path: string;
}

const Section017: React.FC<Props> = ({ id, path }) => {
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
            className="s017"
            id={id}
            sx={{ ...mapStyles(`${path}.container`) }}
        >
            <TextBlock path={`${path}.textBlock`} />
            <Box sx={{ ...mapStyles(`${path}.columns.container`) }}>
                <TextBlock path={`${path}.columns.textBlocks.0`} />
                <TextBlock path={`${path}.columns.textBlocks.1`} />
                <TextBlock path={`${path}.columns.textBlocks.2`} />
            </Box>
        </Box>
    );
};

export default Section017;
