import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles2";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";
import AutosizeInput from "react-input-autosize";
import { setProperty } from "@/lib/features/data/dataSlice";
// import Button from "@mui/material/Button";
// import Button from "@mui/base/Button";
import Button from "@/elements/Button/v1.1";

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
            {/* <Button
                variant="contained"
                size={get(config, `${path}.button.size`)}
                color={get(config, `${path}.button.color`)}
                href={
                    mode !== "builder"
                        ? `#${get(content, `${path}.button.link`)}`
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
                        value={get(content, `${path}.button.text`)}
                        placeholder=""
                        onChange={(event) =>
                            dispatch(
                                setProperty({
                                    path: `content.${path}.button.text`,
                                    value: event.target.value,
                                })
                            )
                        }
                        {...frameHandlers(`${path}.button.text`)}
                        inputStyle={{
                            ...frameStyles(`${path}.button.text`),
                        }}
                    />
                ) : (
                    get(content, `${path}.button.text`)
                )}
            </Button> */}
			<Button path={`${path}.button`}></Button>
        </Box>
    );
};

export default CtaBlock;
