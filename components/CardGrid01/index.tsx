import Image from "next/image";
import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Wrapper from "../Wrapper01";
import TextBlock from "@/components/TextBlock01";
import { ComponentProps } from "./types";

const CardGrid: React.FC<ComponentProps> = ({
    content,
    styles,
}) => {
    const { isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );

    const iconWidth = isTablet || isDesktop ? 43 : 36;
    const iconHeight = isTablet || isDesktop ? 43 : 36;

    return (
        <div className="cardGrid01" style={styles.container}>
            {content.cards.map((card, index) => (
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
                        width={iconWidth}
                        height={iconHeight}
                    />
                    <TextBlock
                        content={card.textBlock}
                        styles={styles.textBlock.texts}
                    />
                </Wrapper>
            ))}
        </div>
    );
};

export default CardGrid;
