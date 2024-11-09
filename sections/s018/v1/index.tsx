import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import type Props from "./types";
import Text from "@/elements/Text01/v1";
import Button from "@mui/material/Button";

const Section018: React.FC<Props> = ({ styles, data }) => {
    const { isMobile, isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section style={styles?.container}>
            <Text data={data?.text1} styles={styles?.text1} />
            <Text data={data?.text2} styles={styles?.text2} />
            <Button variant="contained" sx={styles.button.container}>
                {data.button.content}
            </Button>
        </section>
    );
};

export default Section018;
