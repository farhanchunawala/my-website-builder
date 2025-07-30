import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import NavLinks from "@/components/NavLinks/v1.1";
// import Button from "@mui/material/Button";
import Button from "@/elements/Button/v1.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";

interface Props {
    path: string;
}

const Section013: React.FC<Props> = ({ path }) => {
    const { mapStyles } = useMapStyles();
    const { frameHandlers, frameStyles } = useDesignFrame();
    const mode = useSelector((state: RootState) => state.mode);
    const { globalConfig, config, content, styles } = useSelector(
        (state: RootState) => ({
            globalConfig: state.data.data.config,
            config: get(state, `data.data.config.${path}`),
            content: get(state, `data.data.content.${path}`),
            styles: get(state, `data.data.styles.${path}`),
        })
    );
    const { isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );
    const [showNav, setShowNav] = useState(isDesktop ? true : false);

    return (
        <header
            className="s013"
            style={{
                ...mapStyles(styles?.container),
				...frameStyles(`${path}.container`),
            }}
            {...frameHandlers(`${path}.container`)}
        >
            <Image
                src={`${globalConfig?.imageDir}/${content?.imageUrl}`}
                alt={""}
                width={config?.image?.width}
                height={config?.image?.height}
                style={{
                    height: "80px",
                    width: "230px",
					...frameStyles(`${path}.image`),
                }}
				{...frameHandlers(`${path}.image`)}
            />
            {showNav && <NavLinks path={`${path}.navlinks`} />}
            {isDesktop ? (
                <Button path={`${path}.button`} />
            ) : (
                <Bars3Icon
                    className="barsIcon"
                    strokeWidth={2}
                    width={"24px"}
                    onClick={() => setShowNav(!showNav)}
					style={{
						...frameStyles(`${path}.barsIcon`),
					}}
					{...frameHandlers(`${path}.barsIcon`)}
                />
            )}
        </header>
    );
};

export default Section013;
