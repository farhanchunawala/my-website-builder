import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";
// import TextField from "@mui/material/TextField";
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import { styled } from "@mui/system";
// import Typography from "@mui/material/Typography";
import useEvent from "@/lib/hooks/useEvent";
import { mapStyles } from "@/lib/utils/mapStyles";

const TextBlock: React.FC<Props> = ({
    content,
    config,
    styles,
    styleKit,
    id,
}) => {
    const { createHandlers, getOutline } = useEvent();
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );

    return (
        <Stack
            className="textBlock"
            {...createHandlers(`${id}.textBlock.container`)}
            sx={mapStyles(styles?.container, styleKit, device)}
            // sx={{
            //     ...styles.container,
            //     outline: getOutline(`${id}.textBlock.container`),
            // }}
        >
            {content.map((item, index) => (
                <InputBase
                    key={index}
                    defaultValue={item}
                    multiline
                    {...createHandlers(
                        `${id}.textBlock.text.${index}`
                    )}
                    sx={{
                        ...styles.texts[index],
                        width: "100%",
                        outline: getOutline(
                            `${id}.textBlock.text.${index}`
                        ),
                        "&:hover": {
                            opacity: 1,
                        },
                        "&:focus": {
                            opacity: 1,
                        },
                        "& .MuiInputBase-input": {
                            textAlign: styles.texts[index].textAlign,
                        },
                        "&:hover .MuiInputBase-input": {
                            opacity: styles.texts[index].opacity,
                        },
                        "&:focus .MuiInputBase-input": {
                            opacity: styles.texts[index].opacity,
                        },
                    }}
                />
            ))}
        </Stack>
    );
};

export default TextBlock;
