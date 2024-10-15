import tokens from "@/app/configs/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";

type TextAlign = "left" | "right" | "center" | "justify";

export const getCustomStyles = () => {
	const { responsive } = useResponsive();

	const styles = {
		
	}
	
	const textStyles = {
		
	}
	
    return { styles, textStyles };
};
