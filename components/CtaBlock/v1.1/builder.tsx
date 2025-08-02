import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock/v1.1/builder";
import Button from "@mui/material/Button";
// import { Button } from "@mui/base/Button";
// import { Box, styled } from "@mui/system";
import useEvent from "@/lib/hooks/useEvent";
import AutosizeInput from "react-input-autosize";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
import { setNested } from "@/lib/features/data/dataSlice";
import { get } from "lodash-es";

const CtaBlock: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { createHandlers, getOutline } = useEvent();
    const dispatch = useDispatch();
    const { config, content } = useSelector(
        (state: RootState) => state.data.data
    );

    return (
        <Box
            className="ctaBlock"
            {...createHandlers(`${path}.container`)}
            sx={{
                ...mapStyles(`${path}.container`),
                ...(get(content, `${path}.backgroundImage`) && {
                    backgroundImage: `url(${config.imageDir}/${get(content, `${path}.backgroundImage`)})`,
                }),
                outline: getOutline(`${path}.container`),
            }}
        >
            <TextBlock path={`${path}.textBlock`} />
            <Button
                variant="contained"
                size={get(config, `${path}.button.size`)}
                color={get(config, `${path}.button.color`)}
                {...createHandlers(`${path}.button`)}
                sx={{
                    ...mapStyles(`${path}.button.container`),
                    outline: getOutline(`${path}.button`),
                }}
            >
                <AutosizeInput
                    className="auto-size-input"
                    value={get(content, `${path}.buttonText`)}
                    placeholder=""
                    onChange={(event) =>
                        dispatch(
                            setNested({
                                path: `content.${path}.buttonText`,
                                value: event.target.value,
                            })
                        )
                    }
                    {...createHandlers(`${path}.buttonText`)}
                    inputStyle={{
                        outline: getOutline(`${path}.buttonText`),
                    }}
                />
            </Button>
        </Box>
    );
};

export default CtaBlock;
