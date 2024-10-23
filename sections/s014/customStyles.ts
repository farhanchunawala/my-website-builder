import tokens from "@/app/cm/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";
import { Typography } from "@/app/configs/global.types";

interface Styles {
	container: React.CSSProperties;
}

interface TextStyles {}

export const getCustomStyles = () => {
	const { responsive } = useResponsive();
	
	const textStyles: TextStyles = {
		
	}
	
	const styles: Styles = {
		container: {}
	}
	
    return { styles };
};
