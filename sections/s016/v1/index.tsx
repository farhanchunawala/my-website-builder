import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock01/v1";
import { mapStyles } from "@/lib/helpers/mapStyles";

const Section016: React.FC<Props> = ({
    styles,
    content,
    config,
    variables,
	styleKit,
    id,
}) => {
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
            sx={{ ...mapStyles(styles?.container, styleKit, device) }}
            className={id}
            id={id}
        >
            <Image
                style={{
                    ...mapStyles(styles?.image, styleKit, device),
                }}
                src={`${variables.imageDir}/${content?.imageUrl}`}
                alt="company logo"
                // width={1305}
                // height={833}
                width={1275}
                height={850}
                layout="responsive"
            />
            <CtaBlock
                content={content?.ctaBlock}
                config={config?.ctaBlock}
                styles={styles?.ctaBlock}
				styleKit={styleKit}
				variables={variables}
            />
        </Box>
    );
};

export default Section016;
