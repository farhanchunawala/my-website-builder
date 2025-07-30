import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextBlock from "@/components/TextBlock/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import get from "lodash-es/get";

interface Props {
    path: string;
    id: string;
}

const Section015: React.FC<Props> = ({ path, id }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { styles } = useSelector((state: RootState) => ({
        styles: get(state, `data.data.styles.${path}`),
    }));

    return (
        <Box
            component="section"
            className="s015"
            id={id}
            sx={{ ...mapStyles(styles?.container) }}
            {...designFrame(`${path}.container`)}
        >
            <TextBlock path={`${path}.textBlock`} />
            <Divider sx={{ ...mapStyles(styles?.divider) }} />
        </Box>
    );
};

export default Section015;
