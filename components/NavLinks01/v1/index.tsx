import type Props from "./types";
import Link from "@/elements/Link01/v1";

const NavLinks: React.FC<Props> = ({
    data,
    styles,
}) => {
    return (
        <div style={styles?.container}>
            {data?.map((item, index) => (
                <Link
                    key={index}
                    data={item}
                    styles={styles.link}
                />
            ))}
        </div>
    );
};

export default NavLinks;
