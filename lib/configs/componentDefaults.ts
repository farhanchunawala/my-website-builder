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
    dragItemStyles: {
        component: string;
        styles: Record<string, any>;
    };
    dropItemStyles: {
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
        dragItemStyles: {
            component: "Typography",
            styles: {
                imports: ["texts.paragraph"],
                color: "#aaeedd",
                opacity: "tokens.textLight",
                textAlign: "center",
                padding: "8px 16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "4px",
                border: "1px solid #dee2e6",
                tablet: {
                    imports: ["texts.paragraphBigger"],
                },
                desktop: {
                    imports: ["texts.paragraphBigger"],
                },
            },
        },
        dropItemStyles: {
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
        dragItemStyles: {
            component: "Button",
            styles: {
                imports: ["buttons.primary"],
                backgroundColor: "#007bff",
                padding: "12px 24px",
                borderRadius: "4px",
                color: "white",
                border: "none",
                cursor: "pointer",
            },
        },
        dropItemStyles: {
            component: "Button",
            styles: {
                imports: ["buttons.primary"],
                backgroundColor: "#007bff",
                padding: "12px 24px",
                borderRadius: "4px",
                color: "white",
                border: "none",
            },
        },
    },
    {
        id: 3,
        component: "Input",
        label: "Input Field",
        config: { component: "Input", element: "input" },
        content: { component: "Input", text: "Enter text..." },
        dragItemStyles: {
            component: "Input",
            styles: {
                border: "1px solid #ccc",
                padding: "8px 12px",
                borderRadius: "4px",
                width: "100%",
                backgroundColor: "white",
                fontSize: "14px",
            },
        },
        dropItemStyles: {
            component: "Input",
            styles: {
                border: "1px solid #ccc",
                padding: "8px 12px",
                borderRadius: "4px",
                width: "100%",
                backgroundColor: "white",
            },
        },
    },
    {
        id: 4,
        component: "Image",
        label: "Image",
        config: { component: "Image", element: "img" },
        content: { component: "Image", text: "image.jpg" },
        dragItemStyles: {
            component: "Image",
            styles: {
                width: "60px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "4px",
                backgroundColor: "#f0f0f0",
                border: "1px solid #ddd",
            },
        },
        dropItemStyles: {
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
        dragItemStyles: {
            component: "Container",
            styles: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "12px",
                border: "2px dashed #007bff",
                borderRadius: "4px",
                backgroundColor: "#f8f9ff",
                minHeight: "60px",
                alignItems: "center",
                justifyContent: "center",
            },
        },
        dropItemStyles: {
            component: "Container",
            styles: {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "16px",
                border: "1px dashed #ccc",
                borderRadius: "4px",
                minHeight: "100px",
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
        dragItemStyles: defaultComponent.dragItemStyles,
        dropItemStyles: defaultComponent.dropItemStyles,
    };
};
