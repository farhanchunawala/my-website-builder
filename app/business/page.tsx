"use client";
import { useCustomStyles } from "./customStyles";
import data from "./data";
// import "./page.scss";
// import Section011 from "@/sections/s011/v1";
import Section013 from "@/sections/s013/v1";
import Section014 from "@/sections/s014/v1";
import Section015 from "@/sections/s015/v1";
import Section016 from "@/sections/s016/v1";
import Section017 from "@/sections/s017/v1";

export default function Home() {
    const { styles } = useCustomStyles();

    return (
        <div className="page">
            {/* <Section011 /> */}
            <Section013
                styles={styles.s013}
                data={data.s013}
            />
            <Section014
				styles={styles.s014}
				data={data.s014}
			/>
            <Section015
				styles={styles.s015}
				data={data.s015}
			/>
            <Section016
				styles={styles.s016}
				data={data.s016}
			/>
            <Section017
				styles={styles.s017}
				data={data.s017}
			/>
        </div>
    );
}
