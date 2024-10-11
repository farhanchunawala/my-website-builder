import Image from "next/image";
import "./styles.scss";
import Wrapper from "../Wrapper01";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function CardGrid({ content, style }) {
    const { isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );

    const iconWidth = isTablet || isDesktop ? 43 : 36;
    const iconHeight = isTablet || isDesktop ? 43 : 36;

    return (
        <div className="cardGrid01" style={style.container}>
            {content.cards.map((card, index) => (
                <Wrapper
                    className="flexCenter noFlex"
                    style={style.card}
                    key={index}
                >
                    <Image
                        src={`/images/cm/${card.icon}`}
                        alt="icon"
                        width={iconWidth}
                        height={iconHeight}
                    />
					<div className="text" style={style.text}>Medical Stay</div>
                </Wrapper>
            ))}
        </div>
    );
}
