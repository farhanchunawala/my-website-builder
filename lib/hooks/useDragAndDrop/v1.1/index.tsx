// app/elements/DraggableComponent/v1.1/index.tsx
import { useState, useRef, useEffect } from "react";

const DraggableComponent = ({
    children,
    className = "",
    style = {},
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const dragRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            document.removeEventListener(
                "mousemove",
                handleMouseMove
            );
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, dragStart]);

    return (
        <div
            ref={dragRef}
            onMouseDown={handleMouseDown}
            className={`${className} ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                userSelect: "none",
                position: "absolute",
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default DraggableComponent;
