import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import { get } from "lodash-es";
import useDesignFrame from "@/lib/hooks/useDesignFrame";

interface Props {
	path: string
}

const TextBlock: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { config, content } = useSelector(
        (state: RootState) => state.data.data
    );

    return (
        <Stack
            className="textBlock01"
            sx={{
                ...mapStyles(`${path}.container`),
            }}
            {...designFrame(`${path}.container`)}
        >
            {get(content, path)?.map((item, index) => (
                <Typography
                    key={index}
					component={get(
						config,
						`${path}.${index}.element`
					)}
                    sx={{
                        ...mapStyles(`${path}.texts.${index}`),
                    }}
                    {...designFrame(`${path}.text.${index}`)}
                >
                    {item}
                </Typography>
            ))}
        </Stack>
    );
};

export default TextBlock;
