import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";
// import Button from "@mui/material/Button";
// import Button from "@mui/base/Button";
import Button from "@/elements/Button/v1.1";

interface Props {
    path: string;
}

const CtaBlock: React.FC<Props> = ({ path }) => {
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
            className="ctaBlock"
            sx={{
                ...mapStyles(styles?.container),
                ...(content?.backgroundImage && {
                    backgroundImage: `url(${globalConfig?.imageDir}/${content.backgroundImage})`,
                }),
            }}
            {...designFrame(`${path}.container`)}
        >
            <TextBlock path={`${path}.textBlock`} />
            <Button path={`${path}.button`} />
        </Box>
    );
};

export default CtaBlock;
