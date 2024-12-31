import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setHoveredElement,
    setFocusedElement,
} from "@/lib/features/editFrame/editFrameSlice";
import { RootState } from "@/lib/store";

const useEvent = () => {
    const dispatch = useDispatch();

    // Select the current hover/focus state from Redux
    const hoveredElement = useSelector(
        (state: RootState) => state.hoverFocus.hoveredElement
    );
    const focusedElement = useSelector(
        (state: RootState) => state.hoverFocus.focusedElement
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
                // console.log(event.type, id);
            }
        },
        [dispatch]
    );

    const createHandlers = useCallback(
        (id: string | number | null) => ({
            onMouseOver: (
                event: React.MouseEvent | React.FocusEvent
            ) => handleEvent(event, id),
            onMouseLeave: (
                event: React.MouseEvent | React.FocusEvent
            ) => handleEvent(event, null),
            onClick: (event: React.MouseEvent | React.FocusEvent) =>
                handleEvent(event, id),
            onBlur: (event: React.MouseEvent | React.FocusEvent) =>
                handleEvent(event, null),
        }),
        [handleEvent]
    );

    const getOutline = useCallback(
        (id: string | number | null) => {
            return hoveredElement === id || focusedElement === id
                ? "1px solid #007BFF"
                : "none";
        },
        [hoveredElement, focusedElement]
    );

    return {
        createHandlers,
		getOutline
    };
};

export default useEvent;
