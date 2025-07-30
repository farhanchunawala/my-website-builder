import { useRef, useState, Dispatch, SetStateAction } from "react";

// Types
export interface DraggableComponent {
    id: number;
    text: string;
    color: string;
}

export interface NewComponent {
    text: string;
    color: string;
}

export type DraggingItem =
    | (DraggableComponent & { isNew?: boolean })
    | null;

export type DragCounterRef = React.MutableRefObject<number>;

// Function interfaces
export interface HandleDragStart {
    (
        e: React.DragEvent<HTMLElement>,
        item: DraggableComponent | NewComponent,
        setDraggingItem: Dispatch<SetStateAction<DraggingItem>>,
        isNew?: boolean
    ): void;
}

export interface HandleDragOver {
    (
        e: React.DragEvent<HTMLElement>,
        index: number,
        setDragOverIndex: Dispatch<SetStateAction<number | null>>
    ): void;
}

export interface HandleDragEnter {
    (
        e: React.DragEvent<HTMLElement>,
        index: number,
        dragCounter: DragCounterRef,
        setDragOverIndex: Dispatch<SetStateAction<number | null>>
    ): void;
}

export interface HandleDragLeave {
    (
        e: React.DragEvent<HTMLElement>,
        dragCounter: DragCounterRef,
        setDragOverIndex: Dispatch<SetStateAction<number | null>>
    ): void;
}

export interface HandleDrop {
    (
        e: React.DragEvent<HTMLElement>,
        dropIndex: number,
        draggingItem: DraggingItem,
        setDraggingItem: Dispatch<SetStateAction<DraggingItem>>,
        components: DraggableComponent[],
        setComponents: Dispatch<SetStateAction<DraggableComponent[]>>,
        dragCounter: DragCounterRef,
        setDragOverIndex: Dispatch<SetStateAction<number | null>>
    ): void;
}

export interface HandleDragEnd {
    (
        setDraggingItem: Dispatch<SetStateAction<DraggingItem>>,
        setDragOverIndex: Dispatch<SetStateAction<number | null>>,
        dragCounter: DragCounterRef
    ): void;
}

export interface UseDraggableStateReturn {
    components: DraggableComponent[];
    setComponents: Dispatch<SetStateAction<DraggableComponent[]>>;
    draggingItem: DraggingItem;
    setDraggingItem: Dispatch<SetStateAction<DraggingItem>>;
    dragOverIndex: number | null;
    setDragOverIndex: Dispatch<SetStateAction<number | null>>;
    newComponent: NewComponent;
    setNewComponent: Dispatch<SetStateAction<NewComponent>>;
    dragCounter: DragCounterRef;
}

export interface ResetComponents {
    (
        setComponents: Dispatch<SetStateAction<DraggableComponent[]>>
    ): void;
}


// Handles the start of a drag event
export const handleDragStart: HandleDragStart = (
    e,
    item,
    setDraggingItem,
    isNew = false
) => {
    setDraggingItem(isNew ? { ...item, isNew: true } : item);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData(
        "text/html",
        (e.target as HTMLElement).outerHTML
    );
};

// Handles when a draggable item enters a droppable area
export const handleDragEnter: HandleDragEnter = (
    e,
    index,
    dragCounter,
    setDragOverIndex
) => {
    e.preventDefault();
    dragCounter.current++;
    setDragOverIndex(index);
};

// Handles the drag over event to allow dropping
export const handleDragOver: HandleDragOver = (
    e,
    index,
    setDragOverIndex
) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
};

// Handles when a draggable item leaves a droppable area
export const handleDragLeave: HandleDragLeave = (
    e,
    dragCounter,
    setDragOverIndex
) => {
    dragCounter.current--;
    if (dragCounter.current === 0) {
        setDragOverIndex(null);
    }
};

// Handles the drop event for reordering or adding new components
export const handleDrop: HandleDrop = (
    e,
    dropIndex,
    draggingItem,
    setDraggingItem,
    components,
    setComponents,
    dragCounter,
    setDragOverIndex
) => {
    e.preventDefault();
    dragCounter.current = 0;
    setDragOverIndex(null);

    if (!draggingItem) return;

    if (draggingItem.isNew) {
        // Insert new component
        const newComp: DraggableComponent = {
            id: Math.max(...components.map((c) => c.id), 0) + 1,
            text: draggingItem.text,
            color: draggingItem.color,
        };

        const newComponents = [...components];
        newComponents.splice(dropIndex, 0, newComp);
        setComponents(newComponents);
    } else {
        // Reorder existing components
        const dragIndex = components.findIndex(
            (c) => c.id === draggingItem.id
        );
        if (dragIndex === dropIndex) return;

        const newComponents = [...components];
        const [removed] = newComponents.splice(dragIndex, 1);
        const insertIndex =
            dragIndex < dropIndex ? dropIndex - 1 : dropIndex;
        newComponents.splice(insertIndex, 0, removed);
        setComponents(newComponents);
    }

    setDraggingItem(null);
};

// Handles the end of a drag event
export const handleDragEnd: HandleDragEnd = (
    setDraggingItem,
    setDragOverIndex,
    dragCounter
) => {
    setDraggingItem(null);
    setDragOverIndex(null);
    dragCounter.current = 0;
};


// UseDraggableState hook to manage the state of draggable components

// Custom hook to manage draggable component state
export const useDraggableState = (): UseDraggableStateReturn => {
    const [components, setComponents] = useState<
        DraggableComponent[]
    >([
        { id: 1, text: "Component A", color: "bg-blue-100" },
        { id: 2, text: "Component B", color: "bg-green-100" },
        { id: 3, text: "Component C", color: "bg-purple-100" },
    ]);
    const [draggingItem, setDraggingItem] =
        useState<DraggingItem>(null);
    const [dragOverIndex, setDragOverIndex] = useState<number | null>(
        null
    );
    const [newComponent, setNewComponent] = useState<NewComponent>({
        text: "New Component",
        color: "bg-orange-100",
    });
    const dragCounter = useRef<number>(0);

    return {
        components,
        setComponents,
        draggingItem,
        setDraggingItem,
        dragOverIndex,
        setDragOverIndex,
        newComponent,
        setNewComponent,
        dragCounter,
    };
};

// Resets the components to their initial state
export const resetComponents: ResetComponents = (setComponents) => {
    setComponents([
        { id: 1, text: "Component A", color: "bg-blue-100" },
        { id: 2, text: "Component B", color: "bg-green-100" },
        { id: 3, text: "Component C", color: "bg-purple-100" },
    ]);
};
