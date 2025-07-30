import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock/v1.1";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
import get from "lodash-es/get";

interface Props {
    path: string;
}

const Section014: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
	const { styles } = useSelector(
        (state: RootState) => ({
            styles: get(state, `data.data.styles.${path}`),
        })
    );

    return (
        <Box
            component="section"
            className="s014"
            id="s014"
            sx={{ ...mapStyles(styles?.container) }}
            {...designFrame(`${path}.container`)}
        >
            <CtaBlock path={`${path}.ctaBlock`} />
        </Box>
    );
};

export default Section014;
