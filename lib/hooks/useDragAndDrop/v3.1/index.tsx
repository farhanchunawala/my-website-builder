import { useState } from "react";

export const useDragAndDrop = () => {
    const [isDraggedOver, setIsDraggedOver] = useState(false);

    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData(
            "text/html",
            (e.target as HTMLElement).outerHTML
        );
    };

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggedOver(true);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggedOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
    };

    const handleDragEnd = () => {};
};
