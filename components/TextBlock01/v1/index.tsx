import "./styles.scss";
import type Props from "./types";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

const TextBlock: React.FC<Props> = ({
    data = [],
    styles = {
        container: {},
        texts: [],
    },
}) => {
    return (
        <Stack className="textBlock01" sx={styles.container}>
            {data.map((item, index) => (
                <Typography
                    key={index}
					sx={styles.texts[index]}
                    component={item.component}
                >
					{item.content}
                </Typography>
            ))}
        </Stack>
    );
};

export default TextBlock;
