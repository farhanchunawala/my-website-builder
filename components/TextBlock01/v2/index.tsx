import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { mapStyles } from "@/lib/helpers/mapStyles";

const TextBlock: React.FC<Props> = ({
    content = [],
    config = [],
    styles = {
        container: {},
        texts: [],
    },
    styleKit,
}) => {
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );

    return (
        <Stack
            className="textBlock01"
            sx={mapStyles(styles?.container, styleKit, device)}
        >
            {content.map((item, index) => (
                <Typography
                    key={index}
                    sx={mapStyles(
                        styles?.texts?.[index],
                        styleKit,
                        device
                    )}
                    component={config?.[index]?.element}
					onChange={item}
                >
                    {item}
                </Typography>
            ))}
        </Stack>
    );
};

export default TextBlock;
