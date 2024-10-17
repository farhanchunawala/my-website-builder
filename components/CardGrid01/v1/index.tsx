import Image from "next/image";
import "./styles.scss";
import Wrapper from "../../Wrapper01/v1";
import TextBlock from "@/components/TextBlock01/v1";
import { CardGridProps } from "./types";
import { useResponsive } from "@/app/hooks/useResponsive";

const CardGrid: React.FC<CardGridProps> = ({
    data,
    styles
}) => {
    const { responsive } = useResponsive();

    const iconWidth = responsive("36", "43", "43");
    const iconHeight = responsive("36", "43", "43");

    return (
        <div className="cardGrid01" style={styles.container}>
            {data.cards.map((card, index) => (
                <Wrapper
                    classNames="flexCenter noFlex"
                    styles={styles.card}
                    key={index}
                >
                    <Image
                        className="icon"
                        style={styles.icon}
                        src={`/images/cm/${card.icon}`}
                        alt="icon"
                        width={parseInt(iconWidth)}
                        height={parseInt(iconHeight)}
                    />
                    <TextBlock
                        data={card.textBlock}
                        styles={styles.textBlock}
                    />
                </Wrapper>
            ))}
        </div>
    );
};

export default CardGrid;
