import type Props from "./types";
import Hyperlink from "@/elements/Hyperlink01/v1";

const NavLinksName: React.FC<Props> = ({
    data,
    styles,
}) => {
    return (
        <div style={styles?.container}>
            {data?.map((item, index) => (
                <Hyperlink
                    key={index}
                    data={item}
                    styles={styles.hyperlink}
                />
            ))}
        </div>
    );
};

export default NavLinksName;
