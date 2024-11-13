import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import TextBlock from "@/components/TextBlock01/v1";

const Section015: React.FC<Props> = ({ styles, data, id }) => {
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
            sx={styles?.container}
            id={id}
        >
			<TextBlock
                data={data?.textBlock}
                styles={styles?.textBlock}
            />
            <Divider sx={styles?.divider} />
        </Box>
    );
};

export default Section015;
