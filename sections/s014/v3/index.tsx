import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Box } from "@mui/material";
import CtaBlock from "@/components/CtaBlock/v1.1";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import get from "lodash-es/get";
import { useRenderStructure } from "@/lib/utils/renderStructure";

interface Props {
    path: string;
}

const Section014: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { styles } = useSelector((state: RootState) => ({
        styles: get(state, `data.data.styles.${path}.styles`),
    }));

    // function traverse(obj, path = "") {
    //     for (let key in obj) {
    //         if (obj.hasOwnProperty(key)) {
    //             let newPath = path ? `${path}.${key}` : key;
    //             console.log(key);

    //             if (
    //                 typeof obj[key] === "object" &&
    //                 obj[key] !== null
    //             ) {
    //                 traverse(obj[key], newPath);
    //             }
    //         }
    //     }
    // }
    // traverse(structure);

	// console.log(styles);
	
    return (
        <Box
            component="section"
            className="s014"
            id="s014"
			sx={{ ...mapStyles(styles) }}
            // {...designFrame(`${path}.container`)}
        >
			{/* {JSON.stringify(mapStyles(styles))} */}
            {useRenderStructure(path)}
        </Box>
    );
};

export default Section014;
