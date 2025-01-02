import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1";
import Button from "@mui/material/Button";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import { get } from "lodash-es";

const CtaBlock: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { config, content } = useSelector(
        (state: RootState) => state.data.data
    );

    return (
        <Box
            className="ctaBlock"
            sx={{
                ...mapStyles(`${path}.container`),
                ...(get(content, `${path}.backgroundImage`) && {
                    backgroundImage: `url(${config.imageDir}/${get(content, `${path}.backgroundImage`)})`,
                }),
            }}
        >
            <TextBlock path={`${path}.textBlock`} />
            <Button
                variant="contained"
                sx={{
                    ...mapStyles(`${path}.button.container`),
                }}
                href={`#${get(content, `${path}.buttonLink`)}`}
                size={get(config, `${path}.button.size`)}
                color={get(config, `${path}.button.color`)}
            >
                {get(content, `${path}.buttonText`)}
            </Button>
        </Box>
    );
};

export default CtaBlock;
