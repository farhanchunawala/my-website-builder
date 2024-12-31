import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { mapStyles } from "@/lib/helpers/mapStyles";

const NavLinks: React.FC<Props> = ({
    content,
    config,
    styles,
    styleKit,
}) => {
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );
    return (
        <Stack
            className="navLinks"
            sx={{
                ...mapStyles(styles?.container, styleKit, device),
            }}
        >
            {content?.map((item, index) => (
                <Link
                    key={index}
                    sx={{
                        ...mapStyles(styles?.link, styleKit, device),
                    }}
                    underline="none"
                    href={`#${item.link}`}
                >
                    {item.text}
                </Link>
            ))}
        </Stack>
    );
};

export default NavLinks;
