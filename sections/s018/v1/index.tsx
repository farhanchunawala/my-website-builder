import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import get from "lodash-es/get";

interface Props {
    path: string
	id: string
}

const Section018: React.FC<Props> = ({ path, id }) => {
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
            className="s018"
            id={id}
			sx={{ ...mapStyles(styles?.container) }}
            {...designFrame(`${path}.container`)}
        >
			<CtaBlock path={`${path}.ctaBlock`} />
        </Box>
    );
};

export default Section018;
