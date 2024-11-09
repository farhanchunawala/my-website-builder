import "./styles.scss";
import type Props from "./types";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import NavLinks from "@/components/NavLinks01/v1";
import Button from "@mui/material/Button";

const Section013: React.FC<Props> = ({ styles, data }) => {
    const { isMobile, isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );
    const [mounted, setMounted] = useState(false);
    const [showNav, setShowNav] = useState(isDesktop ? true : false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <header className="s013 container" style={styles.container}>
            <Image
                src="/images/webflow/company_logo.svg"
                alt={""}
                width={141}
                height={36}
            />
            {showNav && (
                <NavLinks
                    data={data.navlinks}
                    styles={styles.navlinks}
                />
            )}
            {isDesktop ? (
                <Button
                    variant="contained"
                    sx={styles.button.container}
                >
                    { data.button.content }
                </Button>
            ) : (
                <Bars3Icon
                    className="barsIcon"
                    strokeWidth={2}
                    width={"24px"}
                    onClick={() => setShowNav(!showNav)}
                />
            )}
        </header>
    );
};

export default Section013;
