import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock/v1.1";
import Button from "@mui/material/Button";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";
import AutosizeInput from "react-input-autosize";
import { setProperty } from "@/lib/features/data/dataSlice";

interface Props {
    path: string;
}

const CtaBlock: React.FC<Props> = ({ path }) => {
    const dispatch = useDispatch();
    const { mapStyles } = useMapStyles();
    const { frameHandlers, frameStyles, designFrame } =
        useDesignFrame();
    const mode = useSelector((state: RootState) => state.mode);
    const { config, content } = useSelector(
        (state: RootState) => state.data.data
    );

    return (
        <Box
            className="ctaBlock"
            sx={{
                ...mapStyles(`${path}.container`),
                ...(get(content, `${path}.backgroundImage`) && {
                    backgroundImage: `url(${config.imageDir}/${get(content, `${path}.backgroundImage`)})`,
                }),
            }}
            {...designFrame(`${path}.container`)}
        >
            <TextBlock path={`${path}.textBlock`} />
            <Button
                variant="contained"
                size={get(config, `${path}.button.size`)}
                color={get(config, `${path}.button.color`)}
                href={
                    mode !== "builder"
                        ? `#${get(content, `${path}.buttonLink`)}`
                        : undefined
                }
                sx={{
                    ...mapStyles(`${path}.button.container`),
                }}
                {...designFrame(`${path}.button`)}
            >
                {mode === "builder" ? (
                    <AutosizeInput
                        className="auto-size-input"
                        value={get(content, `${path}.buttonText`)}
                        placeholder=""
                        onChange={(event) =>
                            dispatch(
                                setProperty({
                                    path: `content.${path}.buttonText`,
                                    value: event.target.value,
                                })
                            )
                        }
                        {...frameHandlers(`${path}.buttonText`)}
                        inputStyle={{
                            ...frameStyles(`${path}.buttonText`),
                        }}
                    />
                ) : (
                    get(content, `${path}.buttonText`)
                )}
            </Button>
        </Box>
    );
};

export default CtaBlock;
