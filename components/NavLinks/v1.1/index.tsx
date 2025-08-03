import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";

interface Props {
    path: string;
}

const NavLinks: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { mode } = useSelector((state: RootState) => state.builder);
    const { content, styles } = useSelector((state: RootState) => ({
        content: get(state, `data.data.content.${path}`),
        styles: get(state, `data.data.styles.${path}`),
    }));

    return (
        <Stack
            className="navLinks"
            sx={{ ...mapStyles(styles?.container) }}
            {...designFrame(`${path}.container`)}
        >
            {content?.map((item, index) => (
                <Link
                    key={index}
                    underline="none"
                    sx={{ ...mapStyles(styles?.link) }}
                    {...designFrame(`${path}.link.${index}`)}
                    href={`#${item?.link}`}
                >
                    {item?.text}
                </Link>
            ))}
        </Stack>
    );
};

export default NavLinks;
