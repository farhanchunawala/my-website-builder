// components/DragItem.tsx
import React, { useState } from "react";

interface DragItemProps {
    children: React.ReactNode;
    dragData?: any; // Data to pass when dropped
    className?: string;
    style?: React.CSSProperties;
    onDragStart?: (data: any) => void;
    onDragEnd?: () => void;
}

export const DragItem = React.memo(
    ({
        children,
        dragData,
        className = "",
        style = {},
        onDragStart,
        onDragEnd,
    }: DragItemProps) => {
        const [isDragging, setIsDragging] = useState(false);

        const handleDragStart = (e: React.DragEvent) => {
            setIsDragging(true);

            // Store drag data
            if (dragData) {
                e.dataTransfer.setData("componentType", dragData.componentType);
            }

            e.dataTransfer.effectAllowed = "copy";
            onDragStart?.(dragData);

            // console.log("Drag started:", dragData);
        };

        const handleDragEnd = () => {
            setIsDragging(false);
            onDragEnd?.();
            console.log("Drag ended");
        };

        const dragStyles: React.CSSProperties = {
            cursor: "grab",
            userSelect: "none",
            opacity: isDragging ? 0.5 : 1,
            transform: isDragging ? "scale(0.95)" : "scale(1)",
            transition: "all 0.2s ease-in-out",
            ...style,
        };

        return (
            <div
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                className={className}
                style={dragStyles}
            >
                {children}
            </div>
        );
    }
);

DragItem.displayName = "DragItem";
