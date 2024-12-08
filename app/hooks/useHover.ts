import { useState, useCallback } from "react";

const useHover = () => {
    const [hoveredElement, setHoveredElement] = useState<number | null>(
        null
    );

    const handleMouseEnter = useCallback((index: number) => {
        setHoveredElement(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredElement(null);
    }, []);

    return {
        hoveredElement,
        handleMouseEnter,
        handleMouseLeave,
    };
};

export default useHover;
