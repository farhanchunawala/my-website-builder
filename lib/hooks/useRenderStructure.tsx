// useRenderStructure.tsx
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import Box from "@/elements/Box/v1.1";
import Typography from "@/elements/Typography/v2.1";
import Button from "@/elements/Button/v2.1";
import { get } from "lodash-es";
import { addProperty } from "@/lib/features/data/dataSlice";
import React from "react";
import { useImmer } from "use-immer";
import { DropZone } from "@/components/DropZone/v1.1";

interface ComponentConfig {
    component: string;
    children?: ComponentConfig[];
    [key: string]: any;
}

type ComponentType = keyof typeof componentMap;

const componentMap = {
    Typography,
    Button,
    Box,
} as const;

export const useRenderStructure = () => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const data = useSelector((state: RootState) => state.data.data);
    const [isDraggedOver, setIsDraggedOver] = useState(false);
    const dispatch = useDispatch();

    const [draggedOverComponents, updateDraggedOverComponents] =
        useImmer<Record<string, boolean>>({});

    const setComponentDragState = useCallback(
        (path: string, isDragged: boolean) => {
            updateDraggedOverComponents((draft) => {
                draft[path] = isDragged;
            });
        },
        [updateDraggedOverComponents]
    );

    const renderStructure = useCallback(
        (path: string): React.ReactNode => {
            const currentPath = path || "root";

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

            const childrenHash = config.children?.length || 0;

            return (
                <React.Fragment key={`${currentPath}-${childrenHash}`}>
                    <DropZone
                        currentPath={currentPath}
                        position="before"
                        draggedOverComponents={draggedOverComponents}
                        setComponentDragState={setComponentDragState}
                    />
                    <Component
                        path={path}
                        {...getProps(config)}
                        sx={{
                            ...mapStyles(styles?.styles),
                        }}
                    >
                        {children && children.length > 0
                            ? children
                            : content?.text || ""}
                    </Component>
                    <DropZone
                        currentPath={currentPath}
                        position="after"
                        draggedOverComponents={draggedOverComponents}
                        setComponentDragState={setComponentDragState}
                    />
                </React.Fragment>
            );
        },
        [
            data.config,
            data.content,
            data.styles,
            draggedOverComponents,
            setComponentDragState,
            mapStyles,
        ]
    );

    return { renderStructure };
};

const getProps = (item: ComponentConfig) => {
    const { component, children, imageDir, backgroundImage, ...props } =
        item;
    return props;
};
