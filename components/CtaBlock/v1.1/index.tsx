import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";
import AutosizeInput from "react-input-autosize";
import { setProperty } from "@/lib/features/data/dataSlice";
// import Button from "@mui/material/Button";
// import Button from "@mui/base/Button";
import Button from "@/elements/Button/v1.1";

interface Props {
    path: string;
}

const CtaBlock: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
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
            {...designFrame(`${path}.container`)}
        >
            <TextBlock path={`${path}.textBlock`} />
            <Button path={`${path}.button`} />
        </Box>
    );
};

export default CtaBlock;
