import { Box, Button, Typography } from "@mui/material";
import { get } from "lodash-es";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";

const componentMap = {
    Typography,
    Button,
    Box,
};

export const useRenderStructure = (
    path: string
): React.ReactNode[] => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { globalConfig, config, content, styles } = useSelector(
        (state: RootState) => ({
			globalConfig: state.data.data.config,
            config: get(state, `data.data.config.${path}`),
            content: get(state, `data.data.content.${path}`),
            styles: get(state, `data.data.styles`),
        })
    );

    if (!config?.children) return [];

    return config.children.map((item, index) => {
        const Component = componentMap[item.component];
        const currentPath = `${path}.children.${index}`;

        // console.log(get(styles, `children.${index}.styles`));
        // console.log(styles?.styles);
        // console.log(get(styles, `${currentPath}.styles`));
        return (
            <Component
                key={index}
                {...getProps(item)}
                sx={{
                    ...mapStyles(
                        get(styles, `${currentPath}.styles`)
                    ),
                    ...(config?.backgroundImage && {
                        backgroundImage: `url(${globalConfig?.imageDir}/${config.backgroundImage})`,
                    }),
                }}
                // {...designFrame(`${path}.container`)}
            >
                {item.children
                    ? useRenderStructure(currentPath)
                    : get(content, `children.${index}.text`) || ""}
                {/* : currentPath} */}
            </Component>
        );
    });
};

// Helper function to extract props (excluding component and children)
const getProps = (item: ComponentConfig) => {
    const { component, children, ...props } = item;
    return props;
};

// save 2
