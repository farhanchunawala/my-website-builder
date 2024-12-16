import type Props from "./types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMappedStyles from "@/lib/hooks/useMappedStyles";

const TextBlock: React.FC<Props> = ({
    content = [],
    config = [],
    styles = {
        container: {},
        texts: [],
    },
    styleKit,
}) => {
    return (
        <Stack
            className="textBlock01"
            sx={useMappedStyles(styles?.container, styleKit)}
        >
            {content.map((item, index) => (
                <Typography
                    key={index}
                    sx={styles.texts[index]}
                    component={config[index]?.element}
                >
                    {item}
                </Typography>
            ))}
        </Stack>
    );
};

export default TextBlock;
