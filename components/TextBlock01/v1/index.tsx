import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const TextBlock: React.FC<Props> = ({
    content = [],
    config = [],
    styles = {
        container: {},
        texts: [],
    },
    styleKit,
}) => {
    const { isMobile, isTablet, isDesktop, device } = useSelector(
        (state: RootState) => state.responsive
    );

    return (
        <Stack
            className="textBlock01"
            sx={{
                marginBottom:
                    styleKit?.sp?.[styles?.container?.marginBottom],
                ...styles?.container?.css,
                ...styles?.container?.[device]?.css,
                // ...(isTablet && {
                // 	...styles?.container?.tablet?.css,
                // }),
                // ...(isDesktop && {
                // 	...styles?.container?.desktop?.css,
                // }),
                // ...(isTablet ? styles?.container?.tablet : {}),
                // ...(isDesktop ? styles?.container?.desktop : {}),
                // ...styles?.container?.[
                //     isDesktop ? "desktop" : isTablet ? "tablet" : null
                // ],
                // ...(isDesktop
                //     ? styles?.container?.desktop
                //     : isTablet
                //       ? styles?.container?.tablet
                //       : {}),
            }}
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
