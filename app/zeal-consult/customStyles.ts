import { useResponsive } from "@/app/hooks/useResponsive";
import { useTheme } from "./theme";
// import { Montserrat } from "next/font/google";

const useCustomStyles = () => {
	const { tokens, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

	

	const styles = {}

	return { styles };
};

export { useCustomStyles };
