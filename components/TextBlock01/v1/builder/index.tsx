// import "./styles.scss";
import { useState } from "react";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";
// import TextField from "@mui/material/TextField";
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import { styled } from "@mui/system";
// import Typography from "@mui/material/Typography";
import useHover from "@/app/hooks/useHover";

const TextBlock: React.FC<Props> = ({ content, config, styles }) => {
    const { hoveredElement, handleMouseEnter, handleMouseLeave } =
        useHover();
    // const {
    //     hoveredElement: hoveredElement1,
    //     handleMouseEnter: handleMouseEnter1,
    //     handleMouseLeave: handleMouseLeave1,
    // } = useHover();
    // const {
    //     hoveredElement: hoveredElement2,
    //     handleMouseEnter: handleMouseEnter2,
    //     handleMouseLeave: handleMouseLeave2,
    // } = useHover();

    return (
        <Stack
            className="textBlock01"
            onMouseEnter={() => handleMouseEnter(23)}
            onMouseLeave={handleMouseLeave}
            sx={{
                ...styles.container,
                "&:hover": {
                    outline:
                        hoveredElement === null ||
                        hoveredElement === 23
                            ? "1px solid #007BFF"
                            : "none",
                },
            }}
        >
            {content.map((item, index) => (
                <InputBase
                    key={index}
                    defaultValue={item}
                    multiline
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                        ...styles.texts[index],
                        outline:
                            hoveredElement === index
                                ? "1px solid #007BFF"
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
