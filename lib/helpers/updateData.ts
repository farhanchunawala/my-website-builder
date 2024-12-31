import { produce } from "immer";

type UpdateData<T> = (
    path: string,
    newValue: any,
    setContent: React.Dispatch<React.SetStateAction<T>>
) => void;

export const updateData: UpdateData<object> = (
    path,
    newValue,
    setData
) => {
    setData((prevState) =>
        produce(prevState, (draft: any) => {
            const keys = path.split(".");
            const lastKey = keys.pop() as string;

            // Navigate through the keys to reach the target property
            const target = keys.reduce(
                (node, key) => node[key],
                draft
            );

            target[lastKey] = newValue;
        })
    );
};
