// useRenderStructure.tsx
import { useCallback } from "react";
import { Box } from "@mui/material";
import { get } from "lodash-es";
import Typography from "@/elements/Typography/v2.1";
import Button from "@/elements/Button/v2.1";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const componentMap = {
    Typography,
    Button,
    Box,
} as const;

type ComponentType = keyof typeof componentMap;

interface ComponentConfig {
    component: string;
    children?: ComponentConfig[];
    [key: string]: any;
}

export const useRenderStructure = () => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const data = useSelector((state: RootState) => state.data.data);

    const renderStructure = useCallback(
        (path: string): React.ReactNode => {
            const config =
                path === "" ? data.config : get(data.config, path);
            const content =
                path === "" ? data.content : get(data.content, path);
            const styles =
                path === "" ? data.styles : get(data.styles, path);

            const Component =
                componentMap[config?.component as ComponentType];

            if (!Component) return null;

            const children = config.children?.map(
                (item: ComponentConfig, index: number) => {
                    const childPath =
                        path !== ""
                            ? `${path}.children.${index}`
                            : `children.${index}`;

                    return renderStructure(childPath);
                }
            );

            return (
                <Component
                    key={path || "root"}
                    path={path}
                    {...getProps(config)}
                    sx={{
                        ...mapStyles(styles?.styles),
                    }}
                    {...designFrame(path)}
                >
                    {children && children.length > 0
                        ? children
                        : content?.text || ""}
                </Component>
            );
        },
        [data, mapStyles, designFrame]
    );

    return { renderStructure };
};

const getProps = (item: ComponentConfig) => {
    const {
        component,
        children,
        imageDir,
        backgroundImage,
        ...props
    } = item;
    return props;
};
