import "./styles.scss";
import type { Section013Props } from "./types";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import Button from "@/elements/Button01/v1";
import NavLinks from "@/components/NavLinks01/v1";

const Section013: React.FC<Section013Props> = ({
	styles,
	data
}) => {
    const { isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="s013 container" style={styles.container}>
            <Image
                src="/images/webflow/company_logo.svg"
                alt={""}
                width={141}
                height={36}
            />
			<NavLinks data={data.navlinks} styles={styles.navlinks} />
            {isDesktop && (
                <Button data={data.button} styles={styles.button} />
            )}
            <Bars3Icon
                className="barsIcon"
                strokeWidth={2}
                width={"24px"}
            />
        </div>
    );
};

export default Section013;
