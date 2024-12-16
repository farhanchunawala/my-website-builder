import { useState, useCallback, useDebugValue } from "react";

const useEvent = () => {
    const [hoveredElement, setHoveredElement] = useState<number | null>(
        null
    );
    const [focusedElement, setFocusedElement] = useState<number | null>(
        null
    );

    // For debugging in devtools
    useDebugValue(
        hoveredElement,
        (hover) => `Hovered Element: ${hover}`
    );
    useDebugValue(
        focusedElement,
        (focus) => `Focused Element: ${focus}`
    );

    const handleEvent = useCallback(
        (
            event: React.MouseEvent | React.FocusEvent,
            id: number | null
        ) => {
            event.stopPropagation();
            if (
                event.type === "mouseenter" ||
                event.type === "mouseleave"
            ) {
                setHoveredElement(id);
				// console.log(event.type, id);
            } else if (
                event.type === "click" ||
                event.type === "blur"
            ) {
                setFocusedElement(id);
				console.log(event.type, id);
            }
        },
        []
    );

    return {
        hoveredElement,
        focusedElement,
        handleEvent,
    };
};

export default useEvent;
