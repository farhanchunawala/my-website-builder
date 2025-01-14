import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Stack from "@mui/material/Stack";
import Typography from "@/elements/Typography/v1.1";
// import Typography from "@mui/material/Typography";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import { get } from "lodash-es";
import useDesignFrame from "@/lib/hooks/useDesignFrame";

interface Props {
    path: string;
}

const TextBlock: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { content, styles } = useSelector(
        (state: RootState) => ({
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
            {content?.texts?.map((item: string, index: number) => (
                <Typography
                    key={index}
                    path={`${path}.texts.${index}`}
                />
            ))}
        </Stack>
    );
};

export default TextBlock;
