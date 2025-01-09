import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";

interface Props {
    id: string;
    path: string;
}

const Section016: React.FC<Props> = ({ id, path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const [mounted, setMounted] = useState(false);
    const { config, content } = useSelector(
        (state: RootState) => state.data.data
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
            className="s016"
            id={id}
            sx={{ ...mapStyles(`${path}.container`) }}
        >
            <Image
                style={{ ...mapStyles(`${path}.image`) }}
                src={`${config.imageDir}/${get(content, `${path}.imageUrl`)}`}
                alt="Firexio"
                // width={1305}
                // height={833}
                width={1275}
                height={850}
                layout="responsive"
            />
            <CtaBlock path={`${path}.ctaBlock`} />
        </Box>
    );
};

export default Section016;
