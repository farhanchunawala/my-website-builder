import { useResponsive } from "@/app/hooks/useResponsive";
import { useTheme } from "./theme";
import { Styles as S013 } from "@/sections/s013/v1/types";
import { Styles as S014 } from "@/sections/s014/v1/types";
import { Styles as S015 } from "@/sections/s015/v1/types";
import { Styles as S016 } from "@/sections/s016/v1/types";
import { Styles as S017 } from "@/sections/s017/v1/types";
import { Styles as S018 } from "@/sections/s018/v1/types";
import { Montserrat } from "next/font/google";

const useCustomStyles = () => {
	const { tokens, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

    const s013: S013 = {
        container: {
			position: "relative",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			zIndex: 5,
			backgroundColor: "transparent",
			width: "100%",
			height: responsive("66px", "66px", "104px"),
			margin: "0 auto",
			padding: responsive("0 20px", "0 30px", "0 50px"),
			maxWidth: "1140px"
		},
        navlinks: {
            container: {
				// display: responsive("block", "block", "flex"),
				flexDirection: responsive("column", "column", "row"),
				alignItems: "center",
				position: responsive("absolute", "absolute", "static"),
				top: "66px",
				left: 0,
				right: 0,
				zIndex: 10,
				backgroundColor: "#fff",
			},
            link: {
				...texts.linkText,
				cursor: "pointer",
				padding: responsive("15px 30px", "15px 30px", "10px 20px"),
				color: "#1a1b1f",
				opacity: "0.6",
				
				display: responsive("block", "block", "flex"),
				width: "fit-content",
				margin: "0 auto",
				
				transitionProperty: "background-color, opacity, color",
				transitionDuration: "400ms, 400ms, 400ms",
				transitionTimingFunction: "ease, ease, ease",
			},
        },
        button: { ...buttons.primary },
    };

	const s014: S014 = {
		container: {},
		backGround: {
			height: "620px",
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
			backgroundImage: 'url("./images/starter/portfolio-2---wide.svg")',
			backgroundSize: "cover",
		},
		heading: {
			...texts.headingJumbo,
			color: "white",
			maxWidth: responsive("80%", "80%", "50%"),
			textAlign: "center",
			marginBottom: "10px",
			lineHeight: responsive("48px", "57px", "80px"),
		},
		subheading: {
			...texts.paragraphBigger,
			color: "#fff",
			opacity: "0.6",
			maxWidth: responsive("85%", "80%", "65%"),
			textAlign: "center",
			marginBottom: "17px",
		},
		button: {
			container: {
				...buttons.secondaryJumbo.container,
				backgroundColor: "#fff",
				flexDirection: "row",
				// height: responsive("36px", "58px", "36px"),
				// width: responsive("153px", "187px", "153px"),
				display: "flex",
				textAlign: "center",
				justifyContent: "center",
				marginTop: "17px",
				// fontWeight: "400",
				// fontSize: responsive("12px", "14px", "12px"),
				border: "solid #fff",
			},
		}
	}

	const s015: S015 = {
		container: {},
		textContainer: {
			marginTop: "85px",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
		},
		accentText: {
			...texts.accentText,
			textShadow: "0px 1px 1px #0003",
			color: "#1a1b1f",
			marginBottom: "10px",
			lineHeight: "20px",
			letterSpacing: "1px",
			textAlign: "center",
		},
		heading: {
			...texts.headingJumboSmall,
			color: "#1a1b1f",
			marginTop: "10px",
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

	const s016: S016 = {
		container: {
			margin: responsive("0 15px", "0 15px", "0 30px"),
			display: responsive("block", "block", "flex"),
			columnGap: "80px"
		},
		image: {
			marginBottom: responsive("50px", "50px", "0"),
			maxWidth: responsive("100%", "100%", "60%"),
		},
		textContainer: {
			width: "100%",
		},
		accentText: {
			...texts.accentText,
			color: "#1a1b1f",
			textShadow: "0 0 0 1px #003",
			letterSpacing: "1px",
			textAlign: responsive("center", "center", "left"),
			marginBottom: "10px",
			opacity: 0.6,
		},
		heading: {
			...texts.headingJumbo,
			color: "#1a1b1f",
			marginBottom: "20px",
			marginTop: "10px",
			lineHeight: "50px",
			textAlign: responsive("center", "center", "left"),
			justifySelf: responsive("center", "center", "left"),
			maxWidth: responsive("none", "none", "80%"),
			textShadow: "0 0 0 1px #003",
		},
		//help!
		subheading: {
			...texts.paragraphLight,
			justifySelf: responsive("center", "center", "left"),
			color: "#1a1b1f",
			textAlign: responsive("center", "center", "left"),
			// maxWidth: responsive("90%", "95%", "95%"),
			opacity: 0.6,
			marginBottom: "17px",
		},
		button: {
			container: {
				// ...texts.buttonText,
				...buttons.primary.container,
				flexDirection: "row",
				display: "flex",
				justifyContent: "center",
				textAlign: "center",
				marginTop: "30px",
				border: "solid #1a1b1f",
				borderWidth: "1px",
				justifySelf: responsive("center", "center", "left"),
			},
			hover: {},
		},
	}

	const s017: S017 = {
		container: {},
		textBlock: {
			container: {
				alignItems: "center"
			},
			texts: [
				{
					...texts.accentText,
					marginTop: responsive("85px", "70px", "85px"),
					color: "#1a1b1f",
					letterSpacing: "1px",
					textAlign: "center",
					marginBottom: "10px",
				},
				{
					...texts.headingJumbo,
					color: "#1a1b1f",
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
						...texts.articleHeading,
						color: "#1a1b1f",
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
						...texts.label,
						color: "#1a1b1f",
						marginTop: "20px",
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
					},
					{
						...texts.paragraphLight,
						color: "#1a1b1f",
						marginTop: "10px",
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
						maxWidth: responsive("65%", "74%", "87%"),
					},
				],
			},
		},
	}

	const s018: S018 = {
		container: {
			backgroundColor: "#f4f4f4",
			padding: responsive(
				"95px 30px 105px",
				"80px 50px 90px",
				"110px 80px 120px"
			),
			margin: responsive("15px", "15px", "30px"),
		},
		text1: {
			...texts.headingJumboSmall,
			color: "#1a1b1f",
			lineHeight: "52px",
			marginTop: "10px",
			marginBottom: "15px",
			textAlign: "center",
		},
		text2: {
			...texts.paragraphLight,
			color: "#1a1b1f",
			marginTop: "10px",
			textAlign: "center",
			marginBottom: "15px",
			justifySelf: "center",
			maxWidth: responsive("100%", "100%", "70%"),
		},
		button: {
			container: {
				...buttons.primaryJumbo.container,
				display: "block",
				textAlign: "center",
				justifyContent: "center",
				justifySelf: "center",
				marginTop: "35px",
				border: "1px solid #1a1b1f",
				backgroundColor: "#000"
				// borderRadius: "0",
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
