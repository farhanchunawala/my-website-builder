// import "./styles.scss";
import { useState } from "react";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";
// import TextField from "@mui/material/TextField";
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import { styled } from "@mui/system";
// import Typography from "@mui/material/Typography";
import useEvent from "@/app/hooks/useEvent";

const TextBlock: React.FC<Props> = ({ content, config, styles }) => {
    const { hoveredElement, focusedElement, createHandlers } =
        useEvent();

    return (
        <Stack
            className="textBlock01"
			{...createHandlers('23')}
            sx={{
                ...styles.container,
                outline:
                    hoveredElement === "23" || focusedElement === "23"
                        ? "1px solid #007BFF"
                        : "none",
                // "&:hover": {
                //     outline:
                //         hoveredElement === null ||
                //         hoveredElement === 23
                //             ? "1px solid #007BFF"
                //             : "none",
                // },
                // "&:focus": {
                // 	outline:
                // 		focusedElement === null ||
                // 		focusedElement === 23
                // 			? "1px solid #007BFF"
                // 			: "none",
                // },
            }}
        >
            {content.map((item, index) => (
                <InputBase
                    key={index}
                    defaultValue={item}
                    multiline
					{...createHandlers(index)}
                    sx={{
                        ...styles.texts[index],
                        outline:
                            hoveredElement === index ||
                            focusedElement === index
                                ? // hoveredElement !== 23
                                  "1px solid #007BFF"
                                : "none",
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
