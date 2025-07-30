import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { useMapStyles } from "@/lib/hooks/useMapStyles";

const NavLinks: React.FC<Props> = ({
    content,
    config,
    styles,
}) => {
	const { mapStyles } = useMapStyles();
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );
    return (
        <Stack
            className="navLinks"
            sx={{
                ...mapStyles(styles?.container),
            }}
        >
            {content?.map((item, index) => (
                <Link
                    key={index}
                    sx={{
                        ...mapStyles(styles?.link),
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
