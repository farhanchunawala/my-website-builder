import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock01/v1";
import Image from "next/image";

const Section022: React.FC<Props> = ({ styles, config, content, variables, id }) => {
    const { isMobile, isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
		<Box
            component="section"
            sx={styles?.container}
            id={id}
        >
			<TextBlock
				content={content?.textBlock}
				config={config?.textBlock}
				styles={styles?.textBlock} styleKit={undefined}			/>
			<Image
				style={styles?.image1}
				src={`${variables.imageDir}/${content?.imageUrl}`}
				alt="firexio"
				layout="responsive"
			/>
			<Image
				style={styles?.image2}
				src={`${variables.imageDir}/${content?.imageUrl}`}
				alt="firexio"
				layout="responsive"
			/>
			<Image
				style={styles?.image3}
				src={`${variables.imageDir}/${content?.imageUrl}`}
				alt="firexio"
				layout="responsive"
			/>
			<Image
				style={styles?.image4}
				src={`${variables.imageDir}/${content?.imageUrl}`}
				alt="firexio"
				layout="responsive"
			/>
			<Image
				style={styles?.imag5}
				src={`${variables.imageDir}/${content?.imageUrl}`}
				alt="firexio"
				layout="responsive"
			/>
			<Image
				style={styles?.image6}
				src={`${variables.imageDir}/${content?.imageUrl}`}
				alt="firexio"
				layout="responsive"
			/>
			<Image
				style={styles?.image7}
				src={`${variables.imageDir}/${content?.imageUrl}`}
				alt="firexio"
				layout="responsive"
			/>
			<Image
				style={styles?.image8}
				src={`${variables.imageDir}/${content?.imageUrl}`}
				alt="firexio"
				layout="responsive"
			/>
		</Box>
	);
};

export default Section022;
