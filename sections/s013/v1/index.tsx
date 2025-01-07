import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import NavLinks from "@/components/NavLinks/v1.1";
import Button from "@mui/material/Button";
// import { mapStyles } from "@/lib/helpers/mapStyles";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";

interface Props {
    path: string;
}

const Section013: React.FC<Props> = ({ path }) => {
    const dispatch = useDispatch();
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const mode = useSelector((state: RootState) => state.mode);
    const { config, content } = useSelector(
        (state: RootState) => state.data.data
    );
    const { isDesktop, device } = useSelector(
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
                ...mapStyles(`${path}.container`),
            }}
        >
            <Image
                src={`${config?.imageDir}/${get(content, `${path}.imageUrl`)}`}
                alt={""}
                // width={config.image.width}
                width={get(config, `${path}.image.width`)}
                height={get(config, `${path}.image.height`)}
                // height={config.image.height}
                style={{
                    height: "80px",
                    width: "230px",
                }}
            />
            {showNav && (
                <NavLinks
                    // content={content.navlinks}
                    // config={config.navlinks}
                    // styles={styles?.navlinks}
                    // styleKit={styleKit}
                    path={`${path}.navlinks`}
                />
            )}
            {isDesktop ? (
                <Button
                    variant="contained"
                    sx={{
                        ...mapStyles(`${path}.button.container`),
                        // ...mapStyles(
                        //     styles?.button?.container,
                        //     styleKit,
                        //     device
                        // ),
                    }}
                >
                    {/* {content.buttonText} */}
                    {get(content, `${path}.buttonText`)}
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
