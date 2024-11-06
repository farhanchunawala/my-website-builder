import { useResponsive } from "@/app/hooks/useResponsive";
import { useTheme } from "./theme";
import { S013Styles } from "@/sections/s013/v1/types";
import { S014Styles } from "@/sections/s014/v1/types";
import { S015Styles } from "@/sections/s015/v1/types";
import { S016Styles } from "@/sections/s016/v1/types";
import { S017Styles } from "@/sections/s017/v1/types";
import { S018Styles } from "@/sections/s018/v1/types";
import { Montserrat } from "next/font/google";

const useCustomStyles = () => {
	const { tokens, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

	const s013: S013Styles = {
		container: {},
		navlinks: {
			container: {},
			hyperlink: { ...texts.hyperlink },
		},
		button: { ...buttons.primary },
	}

	const s014: S014Styles = {
		container: {},
		backGround: {
			height: "620px",
			backgroundColor: "black",
			width: responsive(
				"calc(100% - 30px)",
				"calc(100% - 30px)",
				"calc(100% - 60px)"
			),
			margin: responsive("15px", "15px", "30px"),
			marginBottom: "100px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
		},
		heading: {
			color: "white",
			fontSize: responsive("36px", "50px", "64px"),
			fontWeight: "400",
			maxWidth: responsive("80%", "80%", "50%"),
			textAlign: "center",
			marginBottom: "10px",
			lineHeight: responsive("48px", "70px", "80px"),
		},
		subheading: {
			color: "#fff",
			opacity: "0.6",
			fontSize: responsive("16px", "20px", "20px"),
			fontWeight: responsive("450", "400", "500"),
			maxWidth: responsive("85%", "65%", "65%"),
			textAlign: "center",
			marginBottom: "17px",
			lineHeight: responsive("28px", "34px", "34px"),
		},
		button: {
			flexDirection: "row",
			height: "44px",
			width: "153px",
			backgroundColor: "#fff",
			display: "flex",
			textAlign: "center",
			justifyContent: "center",
			marginTop: "17px",
			fontWeight: "400",
			fontSize: "12px",
			// lineHeight: "20px",
			fontFamily: "Montserrat",
			border: "solid white",
		},
	}

	const s015: S015Styles = {
		container: {},
		textContainer: {
			marginTop: "85px",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
		},
		accentText: {
			textShadow: "0px 1px 1px #0003",
			color: "#1a1b1f",
			fontSize: "12px",
			fontWeight: "500",
			marginBottom: "10px",
			lineHeight: "20px",
			letterSpacing: "1px",
			textAlign: "center",
			opacity: "0.6",
		},
		heading: {
			color: "#1a1b1f",
			marginTop: "10px",
			fontSize: responsive("30px", "36px", "36px"),
			fontWeight: "400",
			lineHeight: responsive("52px", "50px", "50px"),
			textAlign: "center",
			justifySelf: "center",
			textShadow: "0px 1px 1px #0003",
			marginBottom: "86px",
			maxWidth: responsive("72%", "72%", "80%"),
		},
		vector: {
			height: "1px",
			width: "calc(100% - 30px)",
			margin: "15px",
			backgroundColor: "#eeeeee",
		},
	}

	const s016: S016Styles = {
		container: {
			display: responsive("block", "block", "flex"),
		},
		image: {
			justifySelf: responsive("center", "center", "right"),
			width: responsive("100%", "100%", "50%"),
			backgroundColor: "#000",
			height: responsive("185px", "451px", "376px"),
			maxWidth: responsive("1280px", "1280px", "63.5%"),
			marginTop: responsive("45px", "30px", "30px"),
			marginBottom: "15px",
			margin: responsive("15px", "30px", "30px"),
			marginLeft: responsive("none", "none", "30px"),
			display: responsive("none", "none", "flex"),
		},
		textContainer: {
			maxWidth: responsive("none", "none", "30.5%"),
			marginLeft: responsive("none", "none", "30px"),
		},
		accentText: {
			color: "#1a1b1f",
			textShadow: "0 0 0 1px #003",
			marginTop: "50px",
			fontSize: "12px",
			fontWeight: 500,
			letterSpacing: "1px",
			textAlign: responsive("center", "center", "left"),
			lineHeight: "20px",
			marginBottom: "10px",
			opacity: 0.6,
		},
		heading: {
			color: "#1a1b1f",
			marginBottom: "20px",
			marginTop: "10px",
			fontSize: "36px",
			fontWeight: 400,
			lineHeight: "50px",
			textAlign: responsive("center", "center", "left"),
			justifySelf: responsive("center", "center", "left"),
			maxWidth: responsive("none", "none", "80%"),
			textShadow: "0 0 0 1px #003",
		},
		subheading: {
			justifySelf: responsive("center", "center", "left"),
			color: "#1a1b1f",
			fontSize: "16px",
			fontWeight: responsive("450", "400", "400"),
			lineHeight: "28px",
			textAlign: responsive("center", "center", "left"),
			maxWidth: responsive("90%", "90%", "95%"),
			opacity: 0.6,
			marginBottom: "17px",
		},
		button: {
			container: {
				color: "#fff",
				flexDirection: "row",
				height: "44px",
				width: "153px",
				backgroundColor: "#1a1b1f",
				display: "flex",
				justifyContent: "center",
				textAlign: "center",
				marginTop: "30px",
				fontWeight: 400,
				fontSize: "12px",
				fontFamily: "montserrat",
				border: "solid #1a1b1f",
				borderWidth: "1px",
				justifySelf: responsive("center", "center", "left"),
			},
			hover: {},
		},
	}

	const s017: S017Styles = {
		container: {},
		textBlock: {
			container: {},
			texts: [
				{
					marginTop: responsive("85px", "70px", "85px"),
					color: "#1a1b1f",
					fontFamily: "montserrat",
					fontSize: "12px",
					fontWeight: 500,
					lineHeight: "20px",
					opacity: 0.6,
					letterSpacing: "1px",
					textAlign: "center",
					marginBottom: "10px",
				},
				{
					color: "#1a1b1f",
					fontFamily: undefined,
					fontSize: "36px",
					fontWeight: 400,
					lineHeight: "50px",
					marginBottom: "20px",
					textAlign: "center",
				},
			],
		},
		columns: {
			container: {
				display: responsive("block", "block", "flex"),
			},
			textBlock: {
				container: {
					marginLeft: responsive("none", "none", "30px"),
				},
				texts: [
					{
						color: "#1a1b1f",
						fontFamily: undefined,
						fontSize: "24px",
						fontWeight: "500",
						lineHeight: "38px",
						marginTop: "70px",
						marginBottom: "10px",
						textAlign: responsive(
							"center",
							"center",
							"left"
						),
						maxWidth: responsive("70%", "70%", "87%"),
						justifySelf: responsive(
							"center",
							"center",
							"left"
						),
						// marginLeft: responsive("none","none","30px")
					},
					{
						color: "#1a1b1f",
						fontFamily: undefined,
						fontSize: "12px",
						fontWeight: "500",
						lineHeight: "20px",
						marginTop: "20px",
						opacity: 0.6,
						textTransform: "uppercase",
						textAlign: responsive(
							"center",
							"center",
							"left"
						),
						justifySelf: responsive(
							"center",
							"center",
							"left"
						),
						letterSpacing: "1px",
					},
					{
						color: "#1a1b1f",
						fontFamily: undefined,
						fontSize: "16px",
						fontWeight: "400",
						lineHeight: "28px",
						marginTop: "10px",
						opacity: 0.6,
						textAlign: responsive(
							"center",
							"center",
							"left"
						),
						justifySelf: responsive(
							"center",
							"center",
							"left"
						),
						maxWidth: responsive("65%", "70%", "87%"),
					},
				],
			},
		},
	}

	const s018: S018Styles = {
		container: {
			backgroundColor: "#f4f4f4",
			padding: responsive(
				"95px 30px 105px",
				"80px 50px 90px",
				"110px 80px 120px"
			),
			margin: responsive("15px", "30px", "30px"),
		},
		text1: {
			color: "#1a1b1f",
			fontFamily: undefined,
			fontSize: responsive("30px", "36px", "36px"),
			fontWeight: 400,
			lineHeight: "52px",
			marginTop: "10px",
			marginBottom: "15px",
			textAlign: "center",
		},
		text2: {
			color: "#1a1b1f",
			fontFamily: undefined,
			fontSize: responsive("16px", "20px", "20px"),
			fontWeight: 400,
			lineHeight: responsive("28px", "34px", "34px"),
			marginTop: "10px",
			opacity: 0.6,
			textAlign: "center",
			marginBottom: "15px",
			justifySelf: "center",
			maxWidth: responsive("100%", "100%", "70%"),
		},
		button: {
			container: {
				height: "58px",
				width: "174px",
				textAlign: "center",
				justifyContent: "center",
				justifySelf: "center",
				marginTop: "35px",
				backgroundColor: "#1a1b1f",
				color: "#fff",
				border: "1px solid #1a1b1f",
				// borderRadius: "0",
				fontFamily: "Montserrat",
				letterSpacing: "2px",
				fontSize: "14px",
			},
			hover: undefined,
		},
	};

	const styles = {
		s013: s013,
		s014: s014,
		s015: s015,
		s016: s016,
		s017: s017,
		s018: s018,
	}

	return { styles };
};

export { useCustomStyles };
