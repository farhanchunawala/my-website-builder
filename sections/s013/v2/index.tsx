import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import type Props from "./types";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import NavLinks from "@/components/NavLinks/v2.1";
import Button from "@mui/material/Button";
import { useMapStyles } from "@/lib/hooks/useMapStyles";

const Section013: React.FC<Props> = ({
    styles,
    content,
    config,
    // styleKit,
    // variables,
}) => {
	const { mapStyles } = useMapStyles();
    const { isMobile, isTablet, isDesktop, device } = useSelector(
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
        <header
            className="s013"
            style={{
                ...mapStyles(styles?.container),
            }}
        >
            <Image
                src={`${content.imageUrl}`}
                alt={""}
                width={config.image.width}
                height={config.image.height}
                style={{
                    height: "80px",
                    width: "230px",
                }}
            />
            {showNav && (
                <NavLinks
                    content={content.navlinks}
                    config={config.navlinks}
                    styles={styles?.navlinks}
                />
            )}
            {isDesktop ? (
                <Button
                    variant="contained"
                    sx={{
                        ...mapStyles(styles?.button?.container),
                    }}
                >
                    {content.buttonText}
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
