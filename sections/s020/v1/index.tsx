import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type Props from "./types";
import Box from "@mui/material/Box";
import CtaBlock from "@/components/CtaBlock/v1.1";
import Image from "next/image";

const Section020: React.FC<Props> = ({ styles, config, content, id }) => {
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
			sx={styles?.cardContainer}
			id={id}
		>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<Image
                style={styles?.image}
                src={content?.imageUrl1}
                alt="firexio"
                width={60}
                height={60}
                // layout="responsive"
                />
				<CtaBlock
					content={content?.ctaBlock1}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<Image
                style={styles?.image}
                src={content?.imageUrl2}
                alt="firexio"
                width={60}
                height={60}
                // layout="responsive"
                />
				<CtaBlock
					content={content?.ctaBlock2}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<Image
                style={styles?.image}
                src={content?.imageUrl3}
                alt="firexio"
                width={60}
                height={60}
                // layout="responsive"
                />
				<CtaBlock
					content={content?.ctaBlock3}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<Image
                style={styles?.image}
                src={content?.imageUrl4}
                alt="firexio"
                width={60}
                height={60}
                // layout="responsive"
                />
				<CtaBlock
					content={content?.ctaBlock4}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<Image
                style={styles?.image}
                src={content?.imageUrl5}
                alt="firexio"
                width={60}
                height={60}
                // layout="responsive"
                />
				<CtaBlock
					content={content?.ctaBlock5}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
			<Box
				component="section"
				sx={styles?.card}
				id={id}
			>
				<Image
                style={styles?.image}
                src={content?.imageUrl6}
                alt="firexio"
                width={60}
                height={60}
                // layout="responsive"
                />
				<CtaBlock
					content={content?.ctaBlock6}
					config={config?.ctaBlock}
					styles={styles?.ctaBlock}
				/>
			</Box>
		</Box>
	);
};

export default Section020;
