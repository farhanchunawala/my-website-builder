import { useResponsive } from "@/app/hooks/useResponsive";
import { theme, useTheme } from "./theme";
import { Styles as S013 } from "@/sections/s013/v1/types";
import { Styles as S014 } from "@/sections/s014/v1/types";
import { Styles as S015 } from "@/sections/s015/v1/types";
import { Styles as S016 } from "@/sections/s016/v1/types";
import { Styles as S017 } from "@/sections/s017/v1/types";
import { Styles as S018 } from "@/sections/s018/v1/types";

const imageDir = "starter";

const useCustomStyles = () => {
    const { tokens, layout, fonts, colors, texts, buttons } =
        useTheme();
    const { responsive } = useResponsive();

    const pageStyles = {
        padding: layout.sectionPadding,
    };

    const s013: S013 = {
        container: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 5,
            backgroundColor: "transparent",
            width: "100%",
            height: responsive(
                theme.spacing(16),
                theme.spacing(16),
                theme.spacing(20)
            ),
            margin: "0 auto",
            padding: responsive(
                theme.spacing(0, 1),
                theme.spacing(0, 2),
                theme.spacing(0, 4)
            ),
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
                top: theme.spacing(16),
                left: 0,
                right: 0,
                zIndex: 10,
                backgroundColor: "#fff",
            },
            link: {
                ...texts.linkText,
                cursor: "pointer",
                padding: responsive(
                    theme.spacing(3, 6),
                    theme.spacing(3, 6),
                    theme.spacing(2, 4)
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
        image: {},
    };

    const s014: S014 = {
        container: {
            padding: layout.sectionGap,
            paddingTop: "0",
            marginBottom: theme.spacing(4),
        },
        ctaBlock: {
            container: {
                height: "620px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundImage: `url("./images/${imageDir}/hero_bg1.svg")`,
                backgroundSize: "cover",
            },
            textBlock: {
                container: {
                    alignItems: "center",
                    maxWidth: responsive("80%", "70%", "56%"),
                    marginBottom: theme.spacing(7),
                },
                texts: [
                    {
                        ...responsive(
                            texts.headingJumboSmall,
                            texts.headingJumboMedium,
                            texts.headingJumbo
                        ),
                        color: "white",
                        textAlign: "center",
                        marginBottom: theme.spacing(2),
                    },
                    {
                        ...responsive(
                            texts.paragraph,
                            texts.paragraphBigger,
                            texts.paragraphBigger
                        ),
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
        },
    };

    const s015: S015 = {
        container: {
            padding: layout.sectionGap,
        },
        textBlock: {
            container: {
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: theme.spacing(16),
            },
            texts: [
                {
                    ...texts.accentText,
                    textAlign: "center",
                    textShadow: "0px 1px 1px #0003",
                    color: "#1a1b1f",
                    marginBottom: theme.spacing(2),
                },
                {
                    ...responsive(
                        texts.headingJumboXS,
                        texts.headingJumboSmall,
                        texts.headingJumboSmall
                    ),
                    color: "#1a1b1f",
                    textAlign: "center",
                    textShadow: "0px 1px 1px #0003",
                    maxWidth: "80%",
                },
            ],
        },
        divider: {
            height: "1px",
            backgroundColor: "#eeeeee",
            opacity: "0.5",
            marginBottom: "1px",
        },
    };

    const s016: S016 = {
        container: {
            padding: layout.sectionGap,
            display: "flex",
			rowGap: theme.spacing(10),
            columnGap: theme.spacing(16),
            flexDirection: responsive(
                "column",
                "column",
                "row-reverse"
            ),
        },
        image: {
            maxWidth: responsive("100%", "100%", "60%"),
        },
        ctaBlock: {
            container: {},
            textBlock: {
                container: {
                    width: "100%",
                    marginBottom: theme.spacing(6),
                },
                texts: [
                    {
                        ...texts.accentText,
                        color: "#1a1b1f",
                        textShadow: "0 0 0 1px #003",
                        textAlign: responsive(
                            "center",
                            "center",
                            "left"
                        ),
                        marginBottom: theme.spacing(2),
                        opacity: 0.6,
                    },
                    {
                        ...texts.headingJumboSmall,
                        color: "#1a1b1f",
                        marginBottom: theme.spacing(4),
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
                        ...texts.paragraph,
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
                    border: "1px solid #1a1b1f",
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

    const s016a: S016 = {
        container: {
            padding: layout.sectionGap,
            display: "flex",
			rowGap: theme.spacing(10),
            columnGap: theme.spacing(16),
            flexDirection: responsive(
                "column",
                "column",
                "row"
            ),
        },
        image: {
            maxWidth: responsive("100%", "100%", "60%"),
        },
        ctaBlock: {
            container: {},
            textBlock: {
                container: {
                    width: "100%",
                    marginBottom: theme.spacing(6),
                },
                texts: [
                    {
                        ...texts.accentText,
                        color: "#1a1b1f",
                        textShadow: "0 0 0 1px #003",
                        textAlign: responsive(
                            "center",
                            "center",
                            "left"
                        ),
                        marginBottom: theme.spacing(2),
                        opacity: 0.6,
                    },
                    {
                        ...texts.headingJumboSmall,
                        color: "#1a1b1f",
                        marginBottom: theme.spacing(4),
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
                        ...texts.paragraph,
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
                    border: "1px solid #1a1b1f",
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
            padding: layout.sectionGap,
            marginBottom: theme.spacing(16),
        },
        textBlock: {
            container: {
                alignItems: "center",
                marginBottom: theme.spacing(12),
            },
            texts: [
                {
                    ...texts.accentText,
                    color: "#1a1b1f",
                    textAlign: "center",
                    marginBottom: theme.spacing(2),
                },
                {
                    ...texts.headingJumboSmall,
                    color: "#1a1b1f",
                    textAlign: "center",
                },
            ],
        },
        columns: {
            container: {
                display: "flex",
                flexDirection: responsive("column", "column", "row"),
                rowGap: theme.spacing(10),
                columnGap: theme.spacing(12),
                padding: responsive(
                    theme.spacing(0, 3),
                    theme.spacing(0, 3),
                    theme.spacing(0, 6)
                ),
            },
            textBlock: {
                container: {
                    maxWidth: `calc(80%)`,
                    margin: "0 auto",
                },
                texts: [
                    {
                        ...texts.articleHeading,
                        color: "#1a1b1f",
                        marginBottom: theme.spacing(4),
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
                        ...texts.label,
                        color: "#1a1b1f",
                        marginBottom: theme.spacing(2),
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
                        ...texts.paragraph,
                        color: "#1a1b1f",
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
                    },
                ],
            },
        },
    };

    const s018: S018 = {
        container: {
            padding: layout.sectionGap,
        },
        ctaBlock: {
            container: {
                padding: theme.spacing(20, 6),
                backgroundColor: "#f4f4f4",
            },
            textBlock: {
                container: {
                    marginBottom: theme.spacing(7),
                },
                texts: [
                    {
                        ...responsive(
                            texts.headingJumboXS,
                            texts.headingJumboSmall,
                            texts.headingJumboSmall
                        ),
                        color: "#1a1b1f",
                        lineHeight: "52px",
                        marginBottom: theme.spacing(2),
                        textAlign: "center",
                    },
                    {
                        ...responsive(
                            texts.paragraph,
                            texts.paragraphBigger,
                            texts.paragraphBigger
                        ),
                        color: "#1a1b1f",
                        opacity: 0.6,
                        textAlign: "center",
                        width: responsive("auto", "auto", "65%"),
                        margin: "0 auto",
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
        s016a: s016a,
        s017: s017,
        s018: s018,
    };

    return { styles };
};

export { useCustomStyles };
