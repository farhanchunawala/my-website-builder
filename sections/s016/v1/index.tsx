import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Box from "@mui/material/Box";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";

interface Props {
	path: string;
    id: string;
}

const Section016: React.FC<Props> = ({ path, id }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { globalConfig, content, styles } = useSelector(
        (state: RootState) => ({
            globalConfig: state.data.data.config,
            content: get(state, `data.data.content.${path}`),
            styles: get(state, `data.data.styles.${path}`),
        })
    );

    return (
        <Box
            component="section"
            className="s016"
            id={id}
            sx={{ ...mapStyles(styles?.container) }}
            {...designFrame(`${path}.container`)}
        >
            <Image
                style={{ ...mapStyles(styles?.image) }}
                src={`${globalConfig?.imageDir}/${content?.imageUrl}`}
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
