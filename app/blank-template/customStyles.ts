import { useResponsive } from "@/app/hooks/useResponsive";
import { useTheme } from "./theme";
// import { Montserrat } from "next/font/google";

const useCustomStyles = () => {
	const { tokens, layout, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

	const pageStyles = {
		padding: layout.sectionPadding,
	}

	const styles = {}

	return { styles };
};

export { useCustomStyles };
