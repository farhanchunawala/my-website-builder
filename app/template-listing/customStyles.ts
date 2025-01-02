import { useResponsive } from "@/lib/hooks/useResponsive";
import { useTheme } from "./theme";
import { borderRadius, height, width } from "@mui/system";
import { info } from "console";
// import { Montserrat } from "next/font/google";

const useCustomStyles = () => {
	const { tokens, layout, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

	const pageStyles = {
		padding: layout.sectionPadding,
	}

	

	const styles = {
		container: {
			// paddingRight: theme.spacing(responsive(2.5, 0, 0)),
			padding: "0 20px 64px",
			// display: "flex",
			// flexDirection : "row",
			// margin: "2000px",
			// backgroundColor: "red",
			// height: "200px",
			// width: "200px",
			// columnGap: "24px",
		},
		imagesContainer: {
			display: "flex",
			flexWrap: "wrap",
			flexDirection: "row",
			// justifyContent: "space-between",
			rowGap: "24px",
			columnGap: "24px",
			// paddingBottom: "24px",
		},
		image: {
			width: "auto",
			flex: responsive("", "0 0 calc(33.3% - 16px)", "0 0 calc(25% - 18px)"),
			// layout: "responsive",
			// gap: "24px",
			// width: "300px",
			// width: "278px",
			// height: "369px",
			borderRadius: "4px",
			objectFit: "cover",
			marginBottom: "16px",
			// objectPosition: "50%, 0%",
			// verticalAlign: "middle",
		},
		infoContainer: {
			display: "flex",
			justifyContent: "space-between",
			// flexDirection: "column",
			// rowGap: "4px",
		},
		name: {
			// fontFamily: fonts?.body1.fontFamily,
			// display: "flex",
			
			fontSize: "14px",
			fontWeight: "500",
			lineHeight: "18px",
			color: "black",
			// selfAlign: "left",
			justifySelf: "left",
			// padding: "8px 0",
			// vh: "5px",
		},
		rate: {
			fontSize: "14px",
			fontWeight: "500",
			lineHeight: "18px",
			color: "black",
			justifySelf: "right",
			// selfAlign: "right",
			// padding: "8px 0",
			// vh: "5px",
		},
	}

	return { styles };
};

export { useCustomStyles };
