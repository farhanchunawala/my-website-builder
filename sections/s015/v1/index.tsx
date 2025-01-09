import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextBlock from "@/components/TextBlock/v1.1";
import { mapStyles } from "@/lib/helpers/mapStyles";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
import useDesignFrame from "@/lib/hooks/useDesignFrame";

interface Props {
    id: string;
    path: string;
}

const Section015: React.FC<Props> = ({ id, path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
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
            className="s015"
            id={id}
            sx={{ ...mapStyles(`${path}.container`) }}
            // sx={{
            //     // ...mapStyles(styles?.container, styleKit, device)
            // }}
        >
            <TextBlock
                // content={content?.textBlock}
                // config={config?.textBlock}
                // styles={styles?.textBlock}
                // styleKit={styleKit}
                path={`${path}.textBlock`}
            />
            <Divider
                sx={{ ...mapStyles(`${path}.divider`) }}
                // sx={{
                //         ...mapStyles(styles?.divider, styleKit, device)
                //     }}
            />
        </Box>
    );
};

export default Section015;
