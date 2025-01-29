import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Box } from "@mui/material";
import CtaBlock from "@/components/CtaBlock/v1.1";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
import get from "lodash-es/get";
import Component from "@/components/_component/v1.1";

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

	const componentMap = {
		Box: Box, // Map string names to actual components
	};
	
    return (
        <>
            {Object.keys(structure).map((key) => {
                const Component = componentMap[key];
                return <Component key={key} />;
            })}
        </>
    );
    // return (
    //     // <Box
    //     //     component="section"
    //     //     className="s014"
    //     //     id="s014"
    //     //     sx={{ ...mapStyles(styles?.container) }}
    //     //     {...designFrame(`${path}.container`)}
    //     // >
    //     //     <CtaBlock path={`${path}.ctaBlock`} />
    //     // </Box>
    // );
};

export default Section014;
