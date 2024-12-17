// import "./styles.scss";
import Image from "next/image";
import TextBlock from "@/components/TextBlock01/v1";
import { useResponsive } from "@/lib/hooks/useResponsive";
import type Props from "./types";

const Card: React.FC<Props> = ({ classNames = "", styles, data }) => {
    const { responsive } = useResponsive();

    const iconWidth = responsive("36", "43", "43");
    const iconHeight = responsive("36", "43", "43");

    return (
        <div className={`card01 ${classNames}`} style={styles.container}>
            {data.icon && (
                <Image
                    className="icon"
                    style={styles.icon}
                    src={`/images/cm/${data.icon}`}
                    alt="icon"
                    width={parseInt(iconWidth)}
                    height={parseInt(iconHeight)}
                />
            )}
            <TextBlock data={data.textBlock} styles={styles.textBlock} />
        </div>
    );
};

export default Card;
