// import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextBlock from "@/components/TextBlock01/v2/builder";

const Section015: React.FC<Props> = ({
    styles,
    content,
    config,
    parentPath,
    updateData,
    id,
}) => {
	const childPath = `${parentPath}.childValue`;
    const grandChildPath = `${parentPath}.textBlock`;
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
        <Box component="section" sx={styles?.container} id={id}>
            <TextBlock
                content={content?.textBlock}
                config={config?.textBlock}
                styles={styles?.textBlock}
                updateData={updateData}
                parentPath={grandChildPath}
            />
            <Divider sx={styles?.divider} />
        </Box>
    );
};

export default Section015;
