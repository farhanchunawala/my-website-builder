// elements/Typraphy/v2.2/index.tsx
// import DOMPurify from "dompurify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { get } from "lodash-es";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import {
    setProperty,
    addProperty,
} from "@/lib/features/data/dataSlice";
import AutosizeInput from "react-input-autosize";
import InputBase from "@mui/material/InputBase";
import { useDragAndDrop } from "@/lib/hooks/useDragAndDrop/v3.1";

interface Props {
    path: string;
    children?: React.ReactNode;
}

const Typography: React.FC<Props> = ({ path, children }) => {
    const dispatch = useDispatch();
    const { mapStyles } = useMapStyles();
    const { frameHandlers, frameStyles } = useDesignFrame();
    const mode = useSelector((state: RootState) => state.mode);
    const { config, content, styles } = useSelector(
        (state: RootState) => ({
            config: get(state, `data.data.config.${path}`),
            content: get(state, `data.data.content.${path}.text`),
            styles: get(state, `data.data.styles.${path}.styles`),
        })
    );
    const Element = config?.element || "p";
    // const { handleDragEnter, handleDragLeave, dragStyles } = useDragAndDrop();
    const [isDraggedOver, setIsDraggedOver] = useState(false);

    const pathArray = path.split(".");
    const componentKey = pathArray.pop();
    const parentPath = pathArray.join(".");
    // console.log(pathArray, componentKey, parentPath);

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggedOver(true);
        // e.dataTransfer.dropEffect = "none";
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggedOver(true);
        // e.dataTransfer.dropEffect = "none";
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggedOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggedOver(false);
        // console.log(
        //     "componentKey+1",
        //     parseInt(componentKey as string, 10) + 1
        // );

        dispatch(
            addProperty({
                path: `config.${parentPath}`,
                key: parseInt(componentKey as string, 10) + 1,
                value: {
                    component: "Typography",
                    element: "h6",
                },
            })
        );
        dispatch(
            addProperty({
                path: `content.${parentPath}`,
                key: parseInt(componentKey as string, 10) + 1,
                value: {
                    component: "Typography",
                    text: "hi",
                },
            })
        );
        dispatch(
            addProperty({
                path: `styles.${parentPath}`,
                key: parseInt(componentKey as string, 10) + 1,
                value: {
                    component: "Typography",
                    styles: {
                        imports: ["texts.paragraph"],
                        color: "#aaeedd",
                        opacity: "tokens.textLight",
                        textAlign: "center",
                        tablet: {
                            imports: ["texts.paragraphBigger"],
                        },
                        desktop: {
                            imports: ["texts.paragraphBigger"],
                        },
                    },
                },
            })
        );
    };

    const dragStyles = isDraggedOver
        ? {
              borderBottom: "3px solid #1976d2", // Blue bottom border
              // backgroundColor: 'rgba(25, 118, 210, 0.05)', // Very subtle background
              transition: "all 0.2s ease-in-out",
          }
        : {
              transition: "all 0.2s ease-in-out",
          };

    return (
        <>
            {mode === "builder" ? (
                // <AutosizeInput
                //     className="auto-size-input"
                //     value={content}
                //     placeholder=""
                //     onChange={(event) =>
                //         dispatch(
                //             setProperty({
                //                 path: `content.${path}`,
                //                 value: event.target.value,
                //             })
                //         )
                //     }
                //     {...frameHandlers(`${path}`)}
                //     inputStyle={{
                // 		...mapStyles(styles),
                //         ...frameStyles(`${path}`),
                //     }}
                // />

                <InputBase
                    multiline
                    defaultValue={content}
                    // onDragEnter={handleDragEnter}
                    // onDragOver={handleDragOver}
                    // // onDragOver={(e) => handleDragOver(e, index)}
                    // onDragLeave={handleDragLeave}
                    // // onDrop={(e) => handleDrop(e, index)}
                    // onDrop={handleDrop}
                    onChange={(event) =>
                        dispatch(
                            setProperty({
                                path: `content.${path}.text`,
                                value: event.target.value,
                            })
                        )
                    }
                    sx={{
                        ...mapStyles(styles),
                        ...frameStyles(`${path}`),
                        ...dragStyles,
                        width: "100%",
                        "&:hover": {
                            opacity: 1,
                        },
                        "&:focus": {
                            opacity: 1,
                        },
                        "& .MuiInputBase-input": {
                            textAlign: styles?.textAlign,
                        },
                        "&:hover .MuiInputBase-input": {
                            opacity: styles?.opacity,
                        },
                        "&:focus .MuiInputBase-input": {
                            opacity: styles?.opacity,
                        },
                    }}
                    {...frameHandlers(`${path}`)}
                />
            ) : (
                <Element
                    style={{
                        ...mapStyles(styles),
                        ...frameStyles(`${path}`),
                    }}
                    {...frameHandlers(`${path}`)}
                >
                    {content}
                </Element>
            )}
        </>
    );
};

export default Typography;
