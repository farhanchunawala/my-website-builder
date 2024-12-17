import type Props from "./types";
import Box from '@mui/material/Box';
import TextBlock from "@/components/TextBlock01/v2";
import Button from "@mui/material/Button";

const CtaBlock: React.FC<Props> = ({
    content,
	config,
    styles,
	styleKit
}) => {
	return (
		<Box sx={{...styles?.container}} >
			<TextBlock
				content={content?.textBlock}
				config={config?.textBlock}
				styles={styles?.textBlock}
				styleKit={styleKit}
			/>
			<Button
				variant="contained"
				sx={styles?.button?.container}
				href={`#${content?.buttonLink}`}
				size={config?.button?.size}
				color={config?.button?.color}
			>
				{ content?.buttonText }
			</Button>
		</Box>
	);
}

export default CtaBlock;
