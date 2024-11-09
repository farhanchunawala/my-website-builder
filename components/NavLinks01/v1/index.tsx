import type Props from "./types";
import Stack from '@mui/material/Stack';
import Link from "@mui/material/Link";

const NavLinks: React.FC<Props> = ({ data, styles }) => {
    return (
        <Stack sx={styles?.container}>
            {data?.map((item, index) => (
                <Link
                    key={index}
                    sx={styles?.link}
                    underline="none"
                    href="#"
                >
                    {item.content}
                </Link>
            ))}
        </Stack>
    );
};

export default NavLinks;
