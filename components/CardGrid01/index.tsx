import Image from "next/image";
import "./styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Wrapper from "../Wrapper01";
import TextBlock from "@/components/TextBlock01";

interface ComponentProps {
	content: {
		cards: {
			icon: string;
			textBlock: {
				title: string;
				subtitle: string;
				content: string;
			};
		}[];
	};
	style: {
        container: React.CSSProperties;
		card: React.CSSProperties;
		icon: React.CSSProperties;
		textBlock: {
			title: React.CSSProperties;
			subtitle: React.CSSProperties;
			content: React.CSSProperties;
		};
	};
	textStyles: object;
}

const CardGrid: React.FC<ComponentProps> = ({
    content,
    style,
    textStyles,
}) => {
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
						className="icon"
						style={style.icon}
                        src={`/images/cm/${card.icon}`}
                        alt="icon"
                        width={iconWidth}
                        height={iconHeight}
                    />
                    <TextBlock
                        content={card.textBlock}
                        style={style.textBlock}
                        textStyles={textStyles}
                    />
                </Wrapper>
            ))}
        </div>
    );
}

export default CardGrid;
