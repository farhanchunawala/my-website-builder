// components/DropZone.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { insertNested } from "@/lib/features/data/dataSlice";
import { getComponentDefaults } from "@/lib/configs/componentDefaults";
import { useImmer } from "use-immer";

interface DropZoneProps {
    currentPath: string;
    position?: "before" | "after";
}

export const DropZone = React.memo(
    ({
        currentPath,
        position = "before",
    }: DropZoneProps) => {
        const dispatch = useDispatch();
        const dropZonePath = `${currentPath}-${position}`;
		
		const [draggedOverComponents, updateDraggedOverComponents] =
            useImmer<Record<string, boolean>>({});

        const setComponentDragState = (path: string, isDragged: boolean) => {
            updateDraggedOverComponents((draft) => {
                draft[path] = isDragged;
            });
        };
		
        const isDraggedOver =
            draggedOverComponents[dropZonePath] || false;

        const handleDragEnter = (e: React.DragEvent) => {
            e.preventDefault();
            setComponentDragState(dropZonePath, true);
            console.log(`Drag enter on: ${dropZonePath}`);
        };

        const handleDragOver = (e: React.DragEvent) => {
            e.preventDefault();
            setComponentDragState(dropZonePath, true);
            console.log(`Drag over on: ${dropZonePath}`);
        };

        const handleDragLeave = (e: React.DragEvent) => {
            e.preventDefault();
            const rect = (
                e.currentTarget as HTMLElement
            ).getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;

            if (
                x < rect.left ||
                x > rect.right ||
                y < rect.top ||
                y > rect.bottom
            ) {
                setComponentDragState(dropZonePath, false);
                console.log(`Drag leave on: ${dropZonePath}`);
            }
        };

        const handleDrop = (e: React.DragEvent) => {
            e.preventDefault();
            setComponentDragState(dropZonePath, false);

            const componentType =
                e.dataTransfer.getData("componentType");
            const componentData = getComponentDefaults(componentType);

            const pathParts = currentPath.split(".");
            const componentKey = pathParts[pathParts.length - 1];
            const parentPath = pathParts.slice(0, -1).join(".");

            const insertIndex =
                position === "after"
                    ? parseInt(componentKey as string, 10) + 1
                    : parseInt(componentKey as string, 10);

            ["config", "content", "styles"].forEach((dataType) => {
                dispatch(
                    insertNested({
                        path: `${dataType}.${parentPath}`,
                        key: insertIndex,
                        value: componentData[dataType],
                    })
                );
            });

            // console.log(`Drop on: ${dropZonePath}`);
        };

        const dragStyles = isDraggedOver
            ? {
                  //   border: "3px solid #1976d2",
                  backgroundColor: "#1976d2",
                  transition: "all 0.2s ease-in-out",
              }
            : {
                  transition: "all 0.2s ease-in-out",
              };

        return (
            <div style={{ position: "relative" }}>
                <div
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    data-path={dropZonePath}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "16px",
                        top: position === "before" ? "-8px" : "auto",
                        bottom: position === "after" ? "-8px" : "auto",
                        zIndex: 20,
                        // border: "4px solid green",
                        // backgroundColor: "green",
                        ...dragStyles,
                    }}
                />
            </div>
        );
    }
);

DropZone.displayName = "DropZone";
