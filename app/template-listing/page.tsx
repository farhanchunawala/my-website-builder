"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import variables from "./variables";
import content from "./content";
import config from "./config";
import { useCustomStyles } from "./customStyles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import TextBlock from "@/components/TextBlock01/v1";
import { Typography } from "@mui/material";
import templates from "./templates";

export default function Home() {
	const { isMobile, isTablet, isDesktop } = useSelector(
		(state: RootState) => state.responsive
	);
	const [mounted, setMounted] = useState(false);
	const { styles } = useCustomStyles();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={styles?.container}
				// id={id}
			>
				<Box
					sx={styles?.imagesContainer}
					// id={id}
				>
					{templates.map((template, index) => (
						<Box sx={styles?.imgContainer} key={index}>
							<Image
								style={styles?.image}
								src={`/images/templates/listing/${template?.image}`}
								width={256}
								height={369}
								alt="firexio"
								layout="responsive"
							/>
							<Box sx={styles?.infoContainer}>
								<Typography
									component="h2"
									style={styles?.name}
								>
									{template?.title}
								</Typography>
								<Typography
									component="h2"
									style={styles?.rate}
								>
									{/* {template?.price} */}
								</Typography>
							</Box>
						</Box>
					))}
					{/* <Box sx={styles?.imgContainer}>
						<Image
							style={styles?.image}
							src="/images/templates/listing/blurr.jpeg"
							width={256}
							height={369}
							alt="firexio"
							layout="responsive"
						/>
						<Box sx={styles?.infoContainer}>
							<Typography
								component="h2"
								style={styles?.name}
							>
								Firexio
							</Typography>
							<Typography
								component="h2"
								style={styles?.rate}
							>
								$49 USD
							</Typography>
						</Box>
					</Box> */}
				</Box>
			</Box>
		</ThemeProvider>
	);
}
