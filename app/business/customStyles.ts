import { useResponsive } from "@/app/hooks/useResponsive";
import { useTheme } from "./theme";
import { S013Styles } from "@/sections/s013/v1/types";
import { S014Styles } from "@/sections/s014/v1/types";
import { S017Styles } from "@/sections/s017/v1/types";

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
    };

    const s014: S014Styles = {
        container: {},
        heading: {},
        subheading: {},
    };
	
	const s017: S017Styles = {
		container: {},
		textBlock: {
			container: {
				
			},
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
					marginBottom: "10px"
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
			]
		},
		columns: {
			container: {
				display: responsive("block", "block", "flex"),
			},
			textBlock: {
				container: {
				marginLeft: responsive("none","none","30px"),
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
						textAlign: responsive("center","center","left"),
						maxWidth: responsive("70%","70%","87%"),
						justifySelf: responsive("center","center","left"),
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
						textAlign: responsive("center","center","left"),
						justifySelf: responsive("center","center","left"),
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
						textAlign: responsive("center", "center", "left"),
						justifySelf: responsive("center","center","left"),
						maxWidth: responsive("65%", "70%", "87%"),
					}
				]
			}
		}
	};

    const styles = {
        s013: s013,
        s014: s014,
		s017: s017,
    };

    return { styles };
};

export { useCustomStyles };
