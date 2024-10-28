"use client";
import { getCustomStyles } from "./customStyles";
import data from "./data";
// import "./page.scss";
// import Section011 from "@/sections/s011/v1";
import Section013 from "@/sections/s013/v1";
import Section014 from "@/sections/s014/v1";

export default function Home() {
    const { styles } = getCustomStyles();

    return (
        <div className="page">
            {/* <Section011 /> */}
            <Section013
                styles={styles.s013}
                data={data.s013}
            />
            <Section014 />
        </div>
    );
}
