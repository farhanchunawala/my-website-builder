export interface ComponentDefault {
    id: number;
    component: string;
    label: string;
    config: {
        component: string;
        element: string;
    };
    content: {
        component: string;
        text: string;
    };
    styles: {
        component: string;
        styles: Record<string, any>;
    };
}

export const componentDefaults: ComponentDefault[] = [
    {
        id: 1,
        component: "Typography",
        label: "Typography",
        config: { component: "Typography", element: "p" },
        content: {
            component: "Typography",
            text: "Sample text",
        },
        styles: {
            component: "Typography",
            styles: {
                imports: ["texts.paragraph"],
                color: "#aaeedd",
                opacity: "tokens.textLight",
                textAlign: "center",
                tablet: {
                    imports: ["texts.paragraphBigger"],
                },
                desktop: {
                    imports: ["texts.paragraphBigger"],
                },
            },
        },
    },
    {
        id: 2,
        component: "Button",
        label: "Button",
        config: { component: "Button", element: "button" },
        content: { component: "Button", text: "Click me" },
        styles: {
            component: "Button",
            styles: {
                imports: ["buttons.primary"],
                backgroundColor: "#007bff",
                padding: "12px 24px",
                borderRadius: "4px",
            },
        },
    },
    {
        id: 3,
        component: "Input",
        label: "Input Field",
        config: { component: "Input", element: "input" },
        content: { component: "Input", text: "Enter text..." },
        styles: {
            component: "Input",
            styles: {
                border: "1px solid #ccc",
                padding: "8px 12px",
                borderRadius: "4px",
                width: "100%",
            },
        },
    },
    {
        id: 4,
        component: "Image",
        label: "Image",
        config: { component: "Image", element: "img" },
        content: { component: "Image", text: "image.jpg" },
        styles: {
            component: "Image",
            styles: {
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "4px",
            },
        },
    },
    {
        id: 5,
        component: "Container",
        label: "Container",
        config: { component: "Container", element: "div" },
        content: { component: "Container", text: "Flex Container" },
        styles: {
            component: "Container",
            styles: {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "16px",
                border: "1px dashed #ccc",
            },
        },
    },
];

// Helper function to get component defaults by component type
export const getComponentDefaults = (componentType: string) => {
    const defaultComponent = componentDefaults.find(
        (comp) => comp.component === componentType
    );

    if (!defaultComponent) {
        // Return Typography as fallback
        return componentDefaults[0];
    }

    return {
        config: defaultComponent.config,
        content: defaultComponent.content,
        styles: defaultComponent.styles,
    };
};
