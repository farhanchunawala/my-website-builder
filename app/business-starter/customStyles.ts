const styles = {
    route: "business-starter",
    config: {
        s013: {
            image: {
                width: 672,
                height: 836,
            },
            navlinks: [],
            button: {},
        },
        s014: {
            ctaBlock: {
                textBlock: [
                    {
                        element: "h1",
                    },
                    {
                        element: "h6",
                    },
                ],
                button: {
                    color: "secondary",
                    size: "large",
                },
            },
        },
        s015: {
            textBlock: [
                {
                    element: "h5",
                },
                {
                    element: "h1",
                },
            ],
        },
        s016: {
            ctaBlock: {
                textBlock: [
                    {
                        element: "h5",
                    },
                    {
                        element: "h1",
                    },
                    {
                        element: "h6",
                    },
                ],
                button: {},
            },
        },
        s016a: {
            ctaBlock: {
                textBlock: [
                    {
                        element: "h5",
                    },
                    {
                        element: "h1",
                    },
                    {
                        element: "h6",
                    },
                ],
                button: {},
            },
        },
        s017: {
            textBlock: [
                {
                    element: "p",
                },
                {
                    element: "h2",
                },
            ],
            columns: [
                [
                    {
                        element: "h3",
                    },
                    {
                        element: "p",
                    },
                    {
                        element: "p",
                    },
                ],
                [
                    {
                        element: "h3",
                    },
                    {
                        element: "p",
                    },
                    {
                        element: "p",
                    },
                ],
                [
                    {
                        element: "h3",
                    },
                    {
                        element: "p",
                    },
                    {
                        element: "p",
                    },
                ],
            ],
        },
        s018: {
            ctaBlock: {
                textBlock: [
                    {
                        element: "p",
                    },
                    {
                        element: "p",
                    },
                ],
                button: {
                    size: "large",
                },
            },
        },
    },
    content: {
        s013: {
            imageUrl: "logo.svg",
            navlinks: [
                {
                    text: "ABOUT",
                    link: "about-us",
                },
                {
                    text: "TEAM",
                    link: "our-team",
                },
                {
                    text: "EVENTS",
                    link: "events",
                },
                {
                    text: "CONTACT",
                    link: "contact-us",
                },
            ],
            buttonText: "CONTACT US",
        },
        s014: {
            imageUrl: "hero_bg1.svg",
            ctaBlock: {
                textBlock: [
                    "Grow your business.",
                    "Give your business a boost with a beautifully crafted homepage.",
                ],
                buttonText: "OUR MISSION",
                buttonLink: "our-mission",
                backgroundImage: "hero_bg1.svg",
            },
        },
        s015: {
            textBlock: [
                "WHAT WE BELIEVE IN",
                "Grow your business, establish your brand, and put your customers first.",
            ],
        },
        s016: {
            imageUrl: "article1.svg",
            ctaBlock: {
                textBlock: [
                    "ABOUT",
                    "Who we are",
                    "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.",
                ],
                buttonText: "LEARN MORE",
            },
        },
        s016a: {
            imageUrl: "article2.svg",
            ctaBlock: {
                textBlock: [
                    "ABOUT",
                    "Who we are",
                    "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.",
                ],
                buttonText: "LEARN MORE",
            },
        },
        s017: {
            textBlock: ["ABOUT US", "Company news"],
            columns: [
                [
                    "10 Quick Tips About Blogging",
                    "Feb 21, 2019",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                ],
                [
                    "15 Best Blogs To Follow About Web Design",
                    "Feb 21, 2019",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                ],
                [
                    "7 of the Best Examples of Beautiful Blog Design",
                    "Feb 21, 2019",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                ],
            ],
        },
        s018: {
            ctaBlock: {
                textBlock: [
                    "Grow your business.",
                    "Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away.",
                ],
                buttonText: "START NOW",
            },
        },
    },
    styles: {
        pageStyles: {
            padding: "layout.sectionPadding",
            color: "colors.foreground",
        },
        s013: {
            container: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: "5",
                backgroundColor: "transparent",
                width: "100%",
                height: "scale.x16",
                paddingLeft: "scale.x1",
                paddingRight: "scale.x1",
                margin: "0 auto",
                maxWidth: "1140px",
                tablet: {
                    paddingLeft: "scale.x2",
                    paddingRight: "scale.x2",
                },
                desktop: {
                    height: "scale.x20",
                    paddingLeft: "scale.x4",
                    paddingRight: "scale.x4",
                },
            },
            navlinks: {
                container: {
                    flexDirection: "column",
                    position: "absolute",
                    alignItems: "center",
                    top: "scale.x16",
                    left: "0",
                    right: "0",
                    zIndex: "10",
                    backgroundColor: "colors.background",
                    desktop: {
                        flexDirection: "row",
                        position: "static",
                    },
                },
                link: {
                    imports: ["texts.linkText"],
                    opacity: "tokens.textLight",
                    paddingTop: "scale.x3",
                    paddingBottom: "scale.x3",
                    paddingLeft: "scale.x6",
                    paddingRight: "scale.x6",
                    desktop: {
                        paddingTop: "scale.x2",
                        paddingBottom: "scale.x2",
                        paddingLeft: "scale.x4",
                        paddingRight: "scale.x4",
                    },
                },
            },
            button: {},
            image: {},
        },
        s014: {
            container: {
                padding: "layout.sectionGap",
                paddingTop: "0",
                marginBottom: "scale.x4",
                position: "relative",
            },
            ctaBlock: {
                container: {
                    height: "620px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                },
                textBlock: {
                    container: {
                        marginBottom: "scale.ctaBlockGap1",
                        alignItems: "center",
                        maxWidth: "80%",
                        tablet: {
                            maxWidth: "70%",
                        },
                        desktop: {
                            maxWidth: "56%",
                        },
                    },
                    texts: [
                        {
                            imports: ["texts.headingJumboSmall"],
                            color: "white",
                            textAlign: "center",
                            marginBottom: "scale.textBottom",
                            tablet: {
                                imports: ["texts.headingJumboMedium"],
                            },
                            desktop: {
                                imports: ["texts.headingJumbo"],
                            },
                        },
                        {
                            imports: ["texts.paragraph"],
                            color: "#fff",
                            opacity: "tokens.textLight",
                            textAlign: "center",
                            tablet: {
                                imports: ["texts.paragraphBigger"],
                            },
                            desktop: {
                                imports: ["texts.paragraphBigger"],
                            },
                        },
                    ],
                },
                button: {},
            },
        },
        s015: {
            container: {
                padding: "layout.sectionGap",
            },
            textBlock: {
                container: {
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginBottom: "scale.x16",
                },
                texts: [
                    {
                        imports: ["texts.accentText"],
                        textAlign: "center",
                        textShadow: "0px 1px 1px #0003",
                        marginBottom: "scale.textBottom",
                        opacity: "tokens.textLight",
                    },
                    {
                        imports: ["texts.headingJumboXS"],
                        textAlign: "center",
                        textShadow: "0px 1px 1px #0003",
                        maxWidth: "80%",
                        tablet: {
                            imports: ["texts.headingJumboSmall"],
                        },
                        desktop: {
                            imports: ["texts.headingJumboSmall"],
                        },
                    },
                ],
            },
            divider: {
                height: "1px",
                backgroundColor: "#eeeeee",
                opacity: "0.5",
            },
        },
        s016: {
            container: {
                padding: "layout.sectionGap",
                display: "flex",
                flexDirection: "column",
                rowGap: "scale.x10",
                columnGap: "scale.x16",
                desktop: {
                    flexDirection: "row-reverse",
                },
            },
            image: {
                maxWidth: "100%",
                desktop: {
                    maxWidth: "60%",
                },
            },
            ctaBlock: {
                container: {},
                textBlock: {
                    container: {
                        width: "100%",
                        marginBottom: "scale.ctaBlockGap2",
                    },
                    texts: [
                        {
                            imports: ["texts.accentText"],
                            textShadow: "0 0 0 1px #003",
                            textAlign: "center",
                            marginBottom: "scale.textBottom",
                            opacity: "tokens.textLight",
                            desktop: {
                                textAlign: "left",
                            },
                        },
                        {
                            imports: ["texts.headingJumboSmall"],
                            marginBottom: "scale.headingBottom",
                            textAlign: "center",
                            justifySelf: "center",
                            maxWidth: "none",
                            textShadow: "0 0 0 1px #003",
                            desktop: {
                                textAlign: "left",
                                justifySelf: "left",
                                maxWidth: "80%",
                            },
                        },
                        {
                            imports: ["texts.paragraph"],
                            justifySelf: "center",
                            textAlign: "center",
                            opacity: "tokens.textLight",
                            desktop: {
                                justifySelf: "left",
                                textAlign: "left",
                            },
                        },
                    ],
                },
                button: {
                    container: {
                        justifySelf: "center",
                        desktop: {
                            justifySelf: "left",
                        },
                    },
                    hover: {},
                },
            },
        },
        s016a: {
            container: {
                padding: "layout.sectionGap",
                display: "flex",
                flexDirection: "column",
                rowGap: "scale.x10",
                columnGap: "scale.x16",
                desktop: {
                    flexDirection: "row",
                },
            },
            image: {
                maxWidth: "100%",
                desktop: {
                    maxWidth: "60%",
                },
            },
            ctaBlock: {
                container: {},
                textBlock: {
                    container: {
                        width: "100%",
                        marginBottom: "scale.ctaBlockGap2",
                    },
                    texts: [
                        {
                            imports: ["texts.accentText"],
                            textShadow: "0 0 0 1px #003",
                            textAlign: "center",
                            marginBottom: "scale.textBottom",
                            opacity: "tokens.textLight",
                            desktop: {
                                textAlign: "left",
                            },
                        },
                        {
                            imports: ["texts.headingJumboSmall"],
                            marginBottom: "scale.headingBottom",
                            textAlign: "center",
                            justifySelf: "center",
                            maxWidth: "none",
                            textShadow: "0 0 0 1px #003",
                            desktop: {
                                textAlign: "left",
                                justifySelf: "left",
                                maxWidth: "80%",
                            },
                        },
                        {
                            imports: ["texts.paragraph"],
                            justifySelf: "center",
                            textAlign: "center",
                            opacity: "tokens.textLight",
                            desktop: {
                                justifySelf: "left",
                                textAlign: "left",
                            },
                        },
                    ],
                },
                button: {
                    container: {
                        justifySelf: "center",
                        desktop: {
                            justifySelf: "left",
                        },
                    },
                    hover: {},
                },
            },
        },
        s017: {
            container: {
                padding: "layout.sectionGap",
                marginBottom: "scale.x16",
            },
            textBlock: {
                container: {
                    alignItems: "center",
                    marginBottom: "scale.x12",
                },
                texts: [
                    {
                        imports: ["texts.accentText"],
                        textAlign: "center",
                        marginBottom: "scale.textBottom",
                        opacity: "tokens.textLight",
                    },
                    {
                        imports: ["texts.headingJumboSmall"],
                        textAlign: "center",
                    },
                ],
            },
            columns: {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "scale.x10",
                    columnGap: "scale.x12",
                    paddingLeft: "scale.x3",
                    paddingRight: "scale.x3",
                    desktop: {
                        flexDirection: "row",
                        paddingLeft: "scale.x6",
                        paddingRight: "scale.x6",
                    },
                },
                textBlock: {
                    container: {
                        width: "100%",
                        maxWidth: "calc(80%)",
                        margin: "0 auto",
                    },
                    texts: [
                        {
                            imports: ["texts.articleHeading"],
                            marginBottom: "scale.headingBottom",
                            textAlign: "center",
                            justifySelf: "center",
                            desktop: {
                                textAlign: "left",
                                justifySelf: "left",
                            },
                        },
                        {
                            imports: ["texts.label"],
                            marginBottom: "scale.textBottom",
                            opacity: "tokens.textLight",
                            textAlign: "center",
                            justifySelf: "center",
                            desktop: {
                                textAlign: "left",
                                justifySelf: "left",
                            },
                        },
                        {
                            imports: ["texts.paragraph"],
                            opacity: "tokens.textLight",
                            textAlign: "center",
                            justifySelf: "center",
                            desktop: {
                                textAlign: "left",
                                justifySelf: "left",
                            },
                        },
                    ],
                },
            },
        },
        s018: {
            container: {
                padding: "layout.sectionGap",
            },
            ctaBlock: {
                container: {
                    backgroundColor: "#f4f4f4",
                    paddingTop: "scale.x20",
                    paddingBottom: "scale.x20",
                    paddingLeft: "scale.x6",
                    paddingRight: "scale.x6",
                },
                textBlock: {
                    container: {
                        marginBottom: "scale.ctaBlockGap1",
                    },
                    texts: [
                        {
                            imports: ["texts.headingJumboXS"],
                            lineHeight: "52px",
                            marginBottom: "scale.textBottom",
                            textAlign: "center",
                            tablet: {
                                imports: ["texts.headingJumboSmall"],
                            },
                            desktop: {
                                imports: ["texts.headingJumboSmall"],
                            },
                        },
                        {
                            imports: ["texts.paragraph"],
                            opacity: "tokens.textLight",
                            textAlign: "center",
                            width: "auto",
                            margin: "0 auto",
                            tablet: {
                                imports: ["texts.paragraphBigger"],
                            },
                            desktop: {
                                imports: ["texts.paragraphBigger"],
                                width: "65%",
                            },
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
        },
    },
};

export default styles;
