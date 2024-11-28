import type Props from "./types";
import Stack from '@mui/material/Stack';
import Link from "@mui/material/Link";

const NavLinks: React.FC<Props> = ({ content, config, styles }) => {
    return (
        <Stack sx={styles?.container}>
            {content?.map((item, index) => (
                <Link
                    key={index}
                    sx={styles?.link}
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
