import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1/builder";
import Button from "@mui/material/Button";
// import { Button } from "@mui/base/Button";
// import { Box, styled } from "@mui/system";
import useEvent from "@/lib/hooks/useEvent";
import AutosizeInput from "react-input-autosize";
import { mapStyles } from "@/lib/helpers/mapStyles";
import { setProperty } from "@/lib/features/data/dataSlice";

const CtaBlock: React.FC<Props> = ({
    content,
    config,
    styles,
    styleKit,
    variables,
    path,
    id,
}) => {
    const dispatch = useDispatch();
    const { createHandlers, getOutline } = useEvent();
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );

    return (
        <Box
            className="ctaBlock"
            {...createHandlers(`${id}.ctaBlock.container`)}
            sx={{
                ...mapStyles(styles?.container, styleKit, device),
                ...(content.backgroundImage && {
                    backgroundImage: `url(${variables.imageDir}/${content.backgroundImage})`,
                }),
                outline: getOutline(`${id}.ctaBlock.container`),
            }}
        >
            <TextBlock
                content={content?.textBlock}
                config={config?.textBlock}
                styles={styles?.textBlock}
                styleKit={styleKit}
				path={`${path}.textBlock`}
                id={id}
            />
            <Button
                variant="contained"
				size={config?.button?.size}
				color={config?.button?.color}
				// href={`#${content?.buttonLink}`}
                {...createHandlers(`${id}.ctaBlock.button`)}
                sx={{
                    ...mapStyles(
                        styles?.button?.container,
                        styleKit,
                        device
                    ),
                    outline: getOutline(`${id}.ctaBlock.button`),
                }}
            >
                <AutosizeInput
                    className="auto-size-input"
                    value={content?.buttonText}
                    placeholder=""
                    onChange={(event) =>
                        dispatch(
                            setProperty({
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
