const styles = {
    styles0: {
        s014: {
            component: "Box",
            children: [
                {
                    component: "Box",
                    children: [{}, {}],
                    styles: {},
                },
                {
                    component: "Button",
                    styles: {},
                },
            ],
            styles: {},
        },
    },

    styles01: {
        s014: [
            {
                component: "Box",
                container: {},
                components: [
                    {
                        component: "Box",
                        container: {},
                        components: [{}, {}],
                    },
                    {
                        component: "Button",
                    },
                ],
            },
        ],
    },

    styles02: {
        s014: [
            {
                component: "Box",
                list: [{}, {}],
            },
            {
                component: "Button",
            },
        ],
    },

    // Obj at index 0 is of container
    styles1: {
        s014: [
            {
                type: "container",
            },
            [
                {
                    type: "container",
                },
                [{}, {}],
            ],
            {},
        ],
    },

    // Container and list
    styles2: {
        s014: [
            {
                container: {},
                components: [{}, {}],
            },
            {},
        ],
    },

    // Separate object for containers
    styles3: {
        s014: [[{}, {}], {}],
        s014_containers: {
            main: [{}],
        },
    },

    // Component list with concatinated numbers
    styles4: {
        s014: [
            {
                container: {},
                text1: {},
                text2: {},
            },
            {
                container: {},
            },
        ],
    },

    // Wrapper list with concatinated numbers
    styles5: {
        s014: {
            box1: {
                container: {},
                items: [{}, {}],
            },
            box2: {},
            button: {},
        },
    },

    // Styles Object
    styles_og: {
        s014: {
            container: {},
            ctaBlock: {
                container: {},
                textBlock: {
                    container: {},
                    texts: [{}, {}],
                },
                button: {},
            },
        },
    },
};
