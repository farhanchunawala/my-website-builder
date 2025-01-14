// import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { get } from "lodash-es";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import { setProperty } from "@/lib/features/data/dataSlice";
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
    const mode = useSelector((state: RootState) => state.mode);
    const { config, content, styles } = useSelector(
        (state: RootState) => ({
            config: get(state, `data.data.config.${path}`),
            content: get(state, `data.data.content.${path}`),
            styles: get(state, `data.data.styles.${path}`),
        })
    );
    const Element = config?.element;

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
                    onChange={(event) =>
                        dispatch(
                            setProperty({
                                path: `content.${path}`,
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
                    {content}
                </Element>
            )}
        </>
    );
};

export default Typography;
