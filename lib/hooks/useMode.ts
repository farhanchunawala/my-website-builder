import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import { setMode } from "@/lib/features/mode/modeSlice";

const useMode = () => {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();

    useEffect(() => {
        const mode = searchParams.get("mode");
        if (mode) {
            dispatch(setMode(mode));
        }
    }, [searchParams, dispatch]);
};

export default useMode;
