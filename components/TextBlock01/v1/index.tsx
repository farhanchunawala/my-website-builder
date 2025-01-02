import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import { get } from "lodash-es";

const TextBlock: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { config, content, styles } = useSelector(
        (state: RootState) => state.data.data
    );

    return (
        <Stack
            className="textBlock01"
            sx={{
                ...mapStyles(`${path}.container`),
            }}
        >
            {get(content, path)?.map((item, index) => (
                <Typography
                    key={index}
                    sx={{
                        ...mapStyles(`${path}.texts.${index}`),
                    }}
                    component={get(
                        config,
                        `${path}.${index}.element`
                    )}
                >
                    {item}
                </Typography>
            ))}
        </Stack>
    );
};

export default TextBlock;
