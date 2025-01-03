import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
// import { mapStyles } from "@/lib/helpers/mapStyles";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";

const NavLinks: React.FC<Props> = ({
    // content,
    // config,
    // styles,
    // styleKit,
    path,
}) => {
    const dispatch = useDispatch();
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const mode = useSelector((state: RootState) => state.mode);
    const { config, content } = useSelector(
        (state: RootState) => state.data.data
    );
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );

    return (
        <Stack
            className="navLinks"
            sx={{
                ...mapStyles(`${path}.container`),
                // ...mapStyles(styles?.container, styleKit, device),
            }}
        >
            {get(content, path)?.map((item, index) => (
                <Link
                    key={index}
                    sx={{
                        ...mapStyles(`${path}.link`),
                        // ...mapStyles(styles?.link, styleKit, device),
                    }}
                    underline="none"
                    href={`#${get(content, `${path}.item.link`)}`}
                    // href={`#${item.link}`}
                >
                    {item.text}
                </Link>
            ))}
        </Stack>
    );
};

export default NavLinks;
