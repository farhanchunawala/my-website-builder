import "./styles.scss";
import data from "./data";
import { getCustomStyles } from "./customStyles";
import TextBlock from "@/components/TextBlock01/v1";
import Card from "@/components/Card01/v1";
import Button from "@/elements/Button01/v1";

const Section004 = () => {
    const { styles } = getCustomStyles();

    return (
        <div className="s004" style={styles.container}>
            <TextBlock data={data.textBlock} styles={styles.textBlock} />
            <div className="flexGrid" style={styles.flexGrid.container}>
                {data.flexGrid.cards.map((card, index) => (
                    <Card
                        key={index}
                        classNames="flexCenter noFlex"
                        styles={styles.flexGrid.card}
                        data={card}
                    />
                ))}
            </div>
            <Button data={data.button} styles={styles.button} />
        </div>
    );
};

export default Section004;
