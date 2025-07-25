import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setHoveredElement,
    setFocusedElement,
} from "@/lib/features/editFrame/editFrameSlice";
import { RootState } from "@/lib/store";
import { setPath } from "@/lib/features/builder/builderSlice";

const useDesignFrame = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.mode);
    const { hoveredElement, focusedElement } = useSelector(
        (state: RootState) => state.hoverFocus
    );

    // Use callback to handle events and dispatch actions to Redux
    const handleEvent = useCallback(
        (
            event: React.MouseEvent | React.FocusEvent,
            id: string | number | null
        ) => {
            if (
                event.type === "mouseover" ||
                event.type === "mouseleave"
            ) {
                event.stopPropagation();
                dispatch(setHoveredElement(id));
                // console.log(event.type, id);
            } else if (
                event.type === "click" ||
                event.type === "blur"
            ) {
                event.stopPropagation();
                dispatch(setFocusedElement(id));
                if (event.type === "click") dispatch(setPath(id));
                // console.log(event.type, id);
            }
        },
        [dispatch]
    );

    const frameHandlers = useCallback(
        (id: string | number | null) => {
            if (mode !== "builder") return {};

            return {
                onMouseOver: (
                    event: React.MouseEvent | React.FocusEvent
                ) => handleEvent(event, id),
                onMouseLeave: (
                    event: React.MouseEvent | React.FocusEvent
                ) => handleEvent(event, null),
                onClick: (
                    event: React.MouseEvent | React.FocusEvent
                ) => handleEvent(event, id),
                onBlur: (
                    event: React.MouseEvent | React.FocusEvent
                ) => handleEvent(event, null),
            };
        },
        [handleEvent, mode]
    );

    const frameStyles = useCallback(
        (id: string | number | null) => {
            if (mode !== "builder") return {};

            return hoveredElement === id || focusedElement === id
                ? { outline: "1px solid #007BFF" }
                : {};
        },
        [hoveredElement, focusedElement, mode]
    );

    const designFrame = useCallback(
        (id: string | number | null) => {
            if (mode !== "builder") return {};

            return {
                ...frameHandlers(id),
                style: {
                    ...frameStyles(id),
                },
            };
        },
        [frameHandlers, frameStyles, mode]
    );

    return {
        frameHandlers,
        frameStyles,
        designFrame,
    };
};

export default useDesignFrame;
