import "./styles.scss";
import data from "./data";
import { getCustomStyles } from "./customStyles";
import Button from "@/elements/Button01/v1";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Section011 = () => {
    const { styles } = getCustomStyles();

    return (
        <div className="s011 container" style={styles.container}>
            <Image
                src="/images/webflow/company_logo.svg"
                alt={""}
                width={141}
                height={36}
            />
            <div className="navLinks">
                <div className="navLink">Feature</div>
                <div className="navLink">User Examples</div>
                <div className="navLink">Pricing</div>
                <div className="navLink">Resources</div>
				<div className="divider"></div>
				<div className="navLinkAccent">Docs</div>
                <Button data={data.button} styles={styles.button} />
            </div>
            <Bars3Icon
                className="barsIcon"
                strokeWidth={2.5}
                width={"20px"}
            />
        </div>
    );
};

export default Section011;
