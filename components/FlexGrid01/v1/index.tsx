import Image from "next/image";
import "./styles.scss";
import Card from "../../Card01/v1";
import TextBlock from "@/components/TextBlock01/v1";
import { FlexGridProps } from "./types";

const FlexGrid: React.FC<FlexGridProps> = ({
    data,
    styles
}) => {

    return (
        <div className="flexGrid01" style={styles.container}>
            
        </div>
    );
};

export default FlexGrid;
