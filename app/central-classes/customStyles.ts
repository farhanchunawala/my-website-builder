import { useResponsive } from "@/app/hooks/useResponsive";
import { theme, useTheme } from "./theme";
import content from "./content";
import { Styles as S013 } from "@/sections/s013/v1/types";
import { Styles as S014 } from "@/sections/s014/v1/types";
import { Styles as S015 } from "@/sections/s015/v1/types";
import { Styles as S016 } from "@/sections/s016/v1/types";
import { Styles as S017 } from "@/sections/s017/v1/types";
import { Styles as S018 } from "@/sections/s018/v1/types";

const useCustomStyles = () => {
    const { tokens, sp, layout, fonts, colors, texts, buttons } =
        useTheme();
    const { responsive } = useResponsive();

    const pageStyles = {
        padding: layout.sectionPadding,
        color: colors.foreground,
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
            height: theme.spacing(responsive(16, 16, 20)),
            padding: theme.spacing(0, responsive(1, 2, 4)),
            margin: "0 auto",
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
                padding: theme.spacing(
                    responsive(3, 3, 2),
                    responsive(6, 6, 4)
                ),
                opacity: tokens.textLight,
                display: responsive("block", "block", "flex"),
                width: "fit-content",
                margin: "0 auto",
                transitionProperty:
                    "background-color, opacity, color",
                transitionDuration: "400ms, 400ms, 400ms",
                transitionTimingFunction: "ease, ease, ease",
            },
        },
        button: {},
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
                backgroundImage: `url("${content.s014.backgroundImage}")`,
                backgroundSize: "cover",
            },
            textBlock: {
                container: {
                    alignItems: "center",
                    maxWidth: responsive("80%", "70%", "56%"),
                    marginBottom: sp.ctaBlockGap1,
                },
                texts: [
                    {
                        ...responsive(
                            texts.headingJumboSmall,
                            texts.headingJumboMedium,
                            texts.headingJumbo
                        ),
                        // color: "white",
						fontWeight: 600,
                        textAlign: "center",
                        marginBottom: sp.textBottom,
                    },
                    {
                        ...responsive(
                            texts.paragraph,
                            texts.paragraphBigger,
                            texts.paragraphBigger
                        ),
                        // color: "#fff",
						fontWeight: 500,
                        opacity: tokens.textLight,
                        textAlign: "center",
                    },
                ],
            },
            button: {},
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
                    marginBottom: sp.textBottom,
                    opacity: tokens.textLight,
                },
                {
                    ...responsive(
                        texts.headingJumboXS,
                        texts.headingJumboSmall,
                        texts.headingJumboSmall
                    ),
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
                    marginBottom: sp.ctaBlockGap2,
                },
                texts: [
                    {
                        ...texts.accentText,
                        textShadow: "0 0 0 1px #003",
                        textAlign: responsive(
                            "center",
                            "center",
                            "left"
                        ),
                        marginBottom: sp.textBottom,
                        opacity: tokens.textLight,
                    },
                    {
                        ...texts.headingJumboSmall,
                        marginBottom: sp.headingBottom,
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
                        textAlign: responsive(
                            "center",
                            "center",
                            "left"
                        ),
                        opacity: tokens.textLight,
                    },
                ],
            },
            button: {
                container: {
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
            flexDirection: responsive("column", "column", "row"),
        },
        image: {
            maxWidth: responsive("100%", "100%", "60%"),
        },
        ctaBlock: {
            container: {},
            textBlock: {
                container: {
                    width: "100%",
                    marginBottom: sp.ctaBlockGap2,
                },
                texts: [
                    {
                        ...texts.accentText,
                        textShadow: "0 0 0 1px #003",
                        textAlign: responsive(
                            "center",
                            "center",
                            "left"
                        ),
                        marginBottom: sp.textBottom,
                        opacity: tokens.textLight,
                    },
                    {
                        ...texts.headingJumboSmall,
                        marginBottom: sp.headingBottom,
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
                        textAlign: responsive(
                            "center",
                            "center",
                            "left"
                        ),
                        // maxWidth: responsive("90%", "95%", "95%"),
                        opacity: tokens.textLight,
                    },
                ],
            },
            button: {
                container: {
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
                    textAlign: "center",
                    marginBottom: sp.textBottom,
                    opacity: tokens.textLight,
                },
                {
                    ...texts.headingJumboSmall,
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
                padding: theme.spacing(0, responsive(3, 3, 6)),
            },
            textBlock: {
                container: {
                    maxWidth: `calc(80%)`,
                    margin: "0 auto",
                },
                texts: [
                    {
                        ...texts.articleHeading,
                        marginBottom: sp.headingBottom,
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
                        marginBottom: sp.textBottom,
                        opacity: tokens.textLight,
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
                        opacity: tokens.textLight,
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
                    marginBottom: sp.ctaBlockGap1,
                },
                texts: [
                    {
                        ...responsive(
                            texts.headingJumboXS,
                            texts.headingJumboSmall,
                            texts.headingJumboSmall
                        ),
                        lineHeight: "52px",
                        marginBottom: sp.textBottom,
                        textAlign: "center",
                    },
                    {
                        ...responsive(
                            texts.paragraph,
                            texts.paragraphBigger,
                            texts.paragraphBigger
                        ),
                        opacity: tokens.textLight,
                        textAlign: "center",
                        width: responsive("auto", "auto", "65%"),
                        margin: "0 auto",
                    },
                ],
            },
            button: {
                container: {
                    justifySelf: "center",
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
