import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import tokens from "@/app/configs/tokens";
import { Styles } from "../s004/styles.types";

export const getCustomStyles = () => {
    const { isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );

	const styles: Styles = {
		
	}
	
	const textStyles: Styles = {
		
	}
	
    return { styles, textStyles };
};
