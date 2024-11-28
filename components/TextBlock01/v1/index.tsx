// import "./styles.scss";
import type Props from "./types";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

const TextBlock: React.FC<Props> = ({
    content = [],
    config = [],
    styles = {
        container: {},
        texts: [],
    },
}) => {
    return (
        <Stack className="textBlock01" sx={styles.container}>
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
