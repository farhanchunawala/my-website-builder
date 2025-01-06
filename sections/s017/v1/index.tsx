import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";

interface Props {
	id: string
    path: string
}

const Section017: React.FC<Props> = ({ id, path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const [mounted, setMounted] = useState(false);
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
            className="s017"
            id={id}
            sx={{ ...mapStyles(`${path}.container`) }}
        >
            <TextBlock path={`${path}.textBlock`} />
            <Box
                sx={{ ...mapStyles(`${path}.columns?.container`) }}
            >
                <TextBlock
                    // content={content?.columns[0]}
                    // config={config?.columns[0]}
                    // styles={styles?.columns?.textBlock}
                    // styleKit={styleKit}
                    path={`${path}.columns.0`}
                />
                <TextBlock
                    // content={content?.columns[1]}
                    // config={config?.columns[1]}
                    // styles={styles?.columns?.textBlock}
                    // styleKit={styleKit}
                    path={`${path}.columns.1`}
                />
                <TextBlock
                    // content={content?.columns[2]}
                    // config={config?.columns[2]}
                    // styles={styles?.columns?.textBlock}
                    // styleKit={styleKit}
                    path={`${path}.columns.2`}
                />
            </Box>
        </Box>
    );
};

export default Section017;
