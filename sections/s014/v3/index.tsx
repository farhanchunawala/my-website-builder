import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Box } from "@mui/material";
import CtaBlock from "@/components/CtaBlock/v1.1";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
import get from "lodash-es/get";
import { renderStructure } from "@/lib/utils/renderStructure";

interface Props {
    path: string;
}

const Section014: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { structure, styles } = useSelector((state: RootState) => ({
        structure: get(state, `data.data.structure.${path}`),
        styles: get(state, `data.data.styles.${path}`),
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

    return <>{renderStructure(structure, "")}</>;
};

export default Section014;
