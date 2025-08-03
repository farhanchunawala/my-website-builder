/**
 * Utility function to get `target` object and `lastKey` of a nested path
 */

export function getNestedTarget(
    obj: Record<string, any>,
    path: string
): { target: any; lastKey: string | number } {
    const keys = path.split(".");
    const lastKey = keys.pop() as string | number;

    const target = keys.reduce((node, key) => {
        if (!node || typeof node !== "object") {
            throw new Error(`Invalid path: ${path}`);
        }
        return node[key];
    }, obj);

    return { target, lastKey };
}
