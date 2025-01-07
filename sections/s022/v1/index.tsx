import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import TextBlock from "@/components/TextBlock/v1.1";
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
				styles={styles?.textBlock} 
				styleKit={undefined}
			/>
			<Box
				sx={styles?.imgContainer}
				id={id}
			>
				<Image
					style={styles?.image}
					src={`${variables.imageDir}/${content?.image1?.imageUrl}`}
					width={136}
					height={164}
					alt="firexio"
					// layout="responsive"
				/>
				<Image
					style={styles?.image}
					src={`${variables.imageDir}/${content?.image2?.imageUrl}`}
					width={136}
					height={164}
					alt="firexio"
					// layout="responsive"
				/>
				<Image
					style={styles?.image}
					src={`${variables.imageDir}/${content?.image3?.imageUrl}`}
					width={136}
					height={164}
					alt="firexio"
					// layout="responsive"
				/>
				<Image
					style={styles?.image}
					src={`${variables.imageDir}/${content?.image4?.imageUrl}`}
					width={136}
					height={164}
					alt="firexio"
					// layout="responsive"
				/>
				<Image
					style={styles?.image}
					src={`${variables.imageDir}/${content?.image5?.imageUrl}`}
					width={136}
					height={164}
					alt="firexio"
					// layout="responsive"
				/>
				<Image
					style={styles?.image}
					src={`${variables.imageDir}/${content?.image6?.imageUrl}`}
					width={136}
					height={164}
					alt="firexio"
					// layout="responsive"
				/>
				<Image
					style={styles?.image}
					src={`${variables.imageDir}/${content?.image7?.imageUrl}`}
					width={136}
					height={164}
					alt="firexio"
					// layout="responsive"
				/>
				<Image
					style={styles?.image}
					src={`${variables.imageDir}/${content?.image8?.imageUrl}`}
					width={136}
					height={164}
					alt="firexio"
					// layout="responsive"
				/>
			</Box>
		</Box>
	);
};

export default Section022;
