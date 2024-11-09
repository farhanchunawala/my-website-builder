import type Props from "./types";
import Box from '@mui/material/Box';
import TextBlock from "@/components/TextBlock01/v1";
import Button from "@mui/material/Button";

const CtaBlock: React.FC<Props> = ({
    data,
    styles,
}) => {
	return (
		<Box sx={styles?.container} >
			<TextBlock
				data={data?.textBlock}
				styles={styles?.textBlock}
			/>
			<Button
				variant="contained"
				sx={styles?.button?.container}
			>
				{ data?.button?.content }
			</Button>
		</Box>
	);
}

export default CtaBlock;
