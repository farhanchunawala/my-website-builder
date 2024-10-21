import "./styles.scss";
import { NavLinksProps } from "./types";
import Hyperlink from "@/elements/Hyperlink01/v1";

const NavLinksName: React.FC<NavLinksProps> = ({
    data,
    classNames = "",
    styles,
}) => {
    return (
        <div className="navLinks" style={styles.container}>
            {data.map((item, index) => (
                <Hyperlink
                    key={index}
                    data={item}
                    classNames={classNames}
                    styles={styles.hyperlink}
                />
            ))}
        </div>
    );
};

export default NavLinksName;
