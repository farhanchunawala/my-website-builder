/**
 * Utility function to get `target` object and `lastKey` of a nested path
 */

export function getNestedTarget(
    obj: Record<string, any>,
    path: string
): { target: any; lastKey: string | number } {
	if (!path) throw new Error("Path cannot be empty.");

    const keys = path.split(".");
    const lastKey = keys.pop() as string | number;

    // const target = keys.reduce(
    //     (node, key) => node[key],
    //     obj as Record<string, any>
    // );
    let target = obj;
    for (const key of keys) {
        if (target && typeof target === "object" && key in target) {
            target = target[key];
        } else {
            return { target: undefined, lastKey };
        }
    }

    return { target, lastKey };
}
