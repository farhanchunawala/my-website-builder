import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import Typography from "@/elements/Typography/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import { get } from "lodash-es";
import useDesignFrame from "@/lib/hooks/useDesignFrame";

interface Props {
    path: string;
}

const TextBlock: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { config, content, styles } = useSelector(
        (state: RootState) => ({
            config: get(state, `data.data.config.${path}`),
            content: get(state, `data.data.content.${path}`),
            styles: get(state, `data.data.styles.${path}`),
        })
    );

    return (
        <Stack
            className="textBlock01"
            sx={{ ...mapStyles(styles?.container) }}
            {...designFrame(`${path}.container`)}
        >
            {content?.map((item: string, index: number) => (
                <Typography
                    key={index}
                    component={get(
                        config,
                        `${path}.${index}.element`
                    )}
                    sx={{ ...mapStyles(styles?.texts?.[index]) }}
                    {...designFrame(`${path}.text.${index}`)}
                >
                    {item}
                </Typography>
            ))}
        </Stack>
    );
};

export default TextBlock;
