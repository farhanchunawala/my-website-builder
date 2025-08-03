// elements/Typraphy/v2.2/index.tsx
// import DOMPurify from "dompurify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { get } from "lodash-es";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import {
    updateNested,
    insertNested,
} from "@/lib/features/data/dataSlice";
import AutosizeInput from "react-input-autosize";
import InputBase from "@mui/material/InputBase";

interface Props {
    path: string;
    children?: React.ReactNode;
}

const Typography: React.FC<Props> = ({ path, children }) => {
    const dispatch = useDispatch();
    const { mapStyles } = useMapStyles();
    const { frameHandlers, frameStyles } = useDesignFrame();
    const { mode } = useSelector((state: RootState) => state.builder);
    const { config, content, styling } = useSelector(
        (state: RootState) => ({
            config: get(state, `data.data.config.${path}`),
            content: get(state, `data.data.content.${path}`),
            styling: get(state, `data.data.styling.${path}`),
        })
    );
    const styles = styling?.styles || {};
    const Element = config?.element || "p";

    return (
        <>
            {mode === "builder" ? (
                // <AutosizeInput
                //     className="auto-size-input"
                //     value={content.text}
                //     placeholder=""
                //     onChange={(event) =>
                //         dispatch(
                //             updateNested({
                //                 path: `content.text.${path}`,
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
                    defaultValue={content.text}
                    onChange={(event) =>
                        dispatch(
                            updateNested({
                                path: `content.${path}.text`,
                                value: event.target.value,
                            })
                        )
                    }
                    sx={{
                        ...mapStyles(styles),
                        ...frameStyles(`${path}`),
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
                    {content.text}
                </Element>
            )}
        </>
    );
};

export default Typography;
