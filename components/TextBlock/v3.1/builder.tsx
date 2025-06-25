import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";
// import TextField from "@mui/material/TextField";
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import { styled } from "@mui/system";
// import Typography from "@mui/material/Typography";
import useEvent from "@/lib/hooks/useEvent";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
import { setProperty } from "@/lib/features/data/dataSlice";
import { get } from "lodash-es";

const TextBlock: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
	const { createHandlers, getOutline } = useEvent();
    const dispatch = useDispatch();
    const { content, styles } = useSelector(
        (state: RootState) => state.data.data
    );

    return (
        <Stack
            className="textBlock01"
            {...createHandlers(`${path}.container`)}
            sx={{
                ...mapStyles(`${path}.container`),
                outline: getOutline(`${path}.container`),
            }}
        >
            {get(content, path)?.map((item, index) => (
                <InputBase
                    key={index}
                    defaultValue={item}
                    multiline
                    onChange={(event) =>
                        dispatch(
                            setProperty({
                                path: `content.${path}.${index}`,
                                value: event.target.value,
                            })
                        )
                    }
                    {...createHandlers(`${path}.text.${index}`)}
                    sx={{
                        ...mapStyles(`${path}.texts.${index}`),
                        width: "100%",
                        outline: getOutline(`${path}.text.${index}`),
                        "&:hover": {
                            opacity: 1,
                        },
                        "&:focus": {
                            opacity: 1,
                        },
                        "& .MuiInputBase-input": {
                            textAlign: get(
                                styles,
                                `${path}.texts.${index}.textAlign`
                            ),
                        },
                        "&:hover .MuiInputBase-input": {
                            opacity: get(
                                styles,
                                `${path}.texts.${index}.opacity`
                            ),
                        },
                        "&:focus .MuiInputBase-input": {
                            opacity: get(
                                styles,
                                `${path}.texts.${index}.opacity`
                            ),
                        },
                    }}
                />
            ))}
        </Stack>
    );
};

export default TextBlock;
