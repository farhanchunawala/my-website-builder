import Image from "next/image";
import styles from "./styles.module.scss";
import Wrapper from "../Wrapper";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const cards = [
	{
		icon: "svg1.svg",
	},
	{
		icon: "svg2.svg",
	},
	{
		icon: "svg3.svg",
	},
	{
		icon: "svg4.svg",
	},
	{
		icon: "svg5.svg",
	},
	{
		icon: "svg6.svg",
	}
]

export default function CardGrid({ content }) {
	const { isTablet, isDesktop } = useSelector((state: RootState) => state.responsive);
	
	const iconWidth = isTablet || isDesktop ? 43 : 36;
	const iconHeight = isTablet || isDesktop ? 43 : 36;
	
    return (
        <div className={styles.cardGrid}>
			{
				cards.map((card, index) => (
					<Wrapper className="card" key={index} >
						<Image
							src={`/images/cm/${card.icon}`}
							alt="icon"
							width={iconWidth}
							height={iconHeight}
						/>
					</Wrapper>
				))
			}
        </div>
    );
}
