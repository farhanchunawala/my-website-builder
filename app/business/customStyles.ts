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
	const { tokens, layout, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

	const pageStyles = {
		padding: layout.sectionPadding,
	}
	
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
			padding: responsive("0 5px", "0 15px", "0 20px"),
			maxWidth: "1140px",
		},
		navlinks: {
			container: {
				// display: responsive("block", "block", "flex"),
				flexDirection: responsive("column", "column", "row"),
				alignItems: "center",
				position: responsive(
					"absolute",
					"absolute",
					"static"
				),
				top: "66px",
				left: 0,
				right: 0,
				zIndex: 10,
				backgroundColor: "#fff",
			},
			link: {
				...texts.linkText,
				cursor: "pointer",
				padding: responsive(
					"15px 30px",
					"15px 30px",
					"10px 20px"
				),
				color: "#1a1b1f",
				opacity: "0.6",

				display: responsive("block", "block", "flex"),
				width: "fit-content",
				margin: "0 auto",

				transitionProperty:
					"background-color, opacity, color",
				transitionDuration: "400ms, 400ms, 400ms",
				transitionTimingFunction: "ease, ease, ease",
			},
		},
		button: { ...buttons.primary },
	};

	const s014: S014 = {
		container: {
			marginBottom: `calc(${layout.sectionGap} + 20px)`,
		},
		ctaBlock: {
			container: {
				height: "620px",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				backgroundImage:
					'url("./images/starter/portfolio-2---wide.svg")',
				backgroundSize: "cover",
			},
			textBlock: {
				container: {
					alignItems: "center",
					maxWidth: responsive("80%", "70%", "56%"),
					marginBottom: "35px",
				},
				texts: [
					{
						...texts.headingJumbo,
						color: "white",
						textAlign: "center",
						marginBottom: "10px",
						lineHeight: responsive(
							"48px",
							"57px",
							"80px"
						),
					},
					{
						...texts.paragraphBigger,
						color: "#fff",
						opacity: "0.6",
						textAlign: "center",
					},
				],
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
					// fontWeight: "400",
					// fontSize: responsive("12px", "14px", "12px"),
					border: "solid #fff",
				},
			},
		}
	};

	const s015: S015 = {
		container: {
			marginBottom: layout.sectionGap,
		},
		textBlock: {
			container: {
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
			},
			texts: [
				{
					...texts.accentText,
					textShadow: "0px 1px 1px #0003",
					color: "#1a1b1f",
					marginBottom: "10px",
					lineHeight: "20px",
					letterSpacing: "1px",
					textAlign: "center",
				},
				{
					...texts.headingJumboSmall,
					color: "#1a1b1f",
					lineHeight: responsive("52px", "50px", "50px"),
					textAlign: "center",
					justifySelf: "center",
					textShadow: "0px 1px 1px #0003",
					marginBottom: "86px",
					maxWidth: responsive("72%", "72%", "80%"),
				}
			]
		},
		divider: {
			height: "1px",
			backgroundColor: "#eeeeee",
			opacity: "0.5",
		},
	};

	const s016: S016 = {
		container: {
			marginBottom: layout.sectionGap,
			display: responsive("block", "block", "flex"),
			columnGap: "80px",
		},
		image: {
			marginBottom: responsive("50px", "50px", "0"),
			maxWidth: responsive("100%", "100%", "60%"),
		},
		ctaBlock: {
			container: {},
			textBlock: {
				container: {
					width: "100%",
					marginBottom: "30px",
				},
				texts: [
					{
						...texts.accentText,
						color: "#1a1b1f",
						textShadow: "0 0 0 1px #003",
						letterSpacing: "1px",
						textAlign: responsive(
							"center",
							"center",
							"left"
						),
						marginBottom: "10px",
						opacity: 0.6,
					},
					{
						...texts.headingJumbo,
						color: "#1a1b1f",
						marginBottom: "20px",
						lineHeight: "50px",
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
						maxWidth: responsive("none", "none", "80%"),
						textShadow: "0 0 0 1px #003",
					},
					{
						...texts.paragraphLight,
						justifySelf: responsive(
							"center",
							"center",
							"left"
						),
						color: "#1a1b1f",
						textAlign: responsive(
							"center",
							"center",
							"left"
						),
						// maxWidth: responsive("90%", "95%", "95%"),
						opacity: 0.6,
					},
				],
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
					justifySelf: responsive(
						"center",
						"center",
						"left"
					),
				},
				hover: {},
			},
		},
	};

	const s017: S017 = {
		container: {
			marginBottom: `calc(${layout.sectionGap} + 90px)`,
		},
		textBlock: {
			container: {
				alignItems: "center",
				marginBottom: "60px",
			},
			texts: [
				{
					...texts.accentText,
					color: "#1a1b1f",
					letterSpacing: "1px",
					textAlign: "center",
					marginBottom: "10px",
				},
				{
					...texts.headingJumbo,
					color: "#1a1b1f",
					lineHeight: "50px",
					textAlign: "center",
				},
			],
		},
		columns: {
			container: {
				display: "flex",
				flexDirection: responsive("column", "column", "row"),
				rowGap: "50px",
				columnGap: "60px",
				padding: responsive("0 15px", "0 15px", "0 30px"),
			},
			textBlock: {
				container: {
					marginLeft: responsive("none", "none", "30px"),
					maxWidth: `calc(80%)`,
					margin: "0 auto",
				},
				texts: [
					{
						...texts.articleHeading,
						color: "#1a1b1f",
						marginBottom: "20px",
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
						// marginLeft: responsive("none","none","30px")
					},
					{
						...texts.label,
						color: "#1a1b1f",
						marginBottom: "10px",
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
						// maxWidth: responsive("65%", "74%", "87%"),
					},
				],
			},
		},
	};

	const s018: S018 = {
		container: {
			marginBottom: layout.sectionGap,
			backgroundColor: "#f4f4f4",
		},
		ctaBlock: {
			container: {
				padding: "100px 30px",
				width: responsive("auto", "auto", "70%"),
				margin: "0 auto",
			},
			textBlock: {
				container: {
					marginBottom: "35px",
				},
				texts: [
					{
						...texts.headingJumboSmall,
						color: "#1a1b1f",
						lineHeight: "52px",
						marginBottom: "15px",
						textAlign: "center",
					},
					{
						...texts.paragraphLight,
						color: "#1a1b1f",
						textAlign: "center",
						justifySelf: "center",
					},
				],
			},
			button: {
				container: {
					...buttons.primaryJumbo.container,
					display: "block",
					textAlign: "center",
					justifyContent: "center",
					justifySelf: "center",
					border: "1px solid #1a1b1f",
					backgroundColor: "#000",
				},
				hover: {},
			},
		},
	};

	const styles = {
		page: pageStyles,
		s013: s013,
		s014: s014,
		s015: s015,
		s016: s016,
		s017: s017,
		s018: s018,
	};

	return { styles };
};

export { useCustomStyles };
