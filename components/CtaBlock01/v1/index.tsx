import type Props from "./types";
import TextBlock from "@/components/TextBlock01/v1";
import Button from "@/elements/Button01/v1";

const CtaBlock: React.FC<Props> = ({
    data,
    styles,
}) => {
	return (
		<div style={styles?.container} >
			<TextBlock
				data={data?.textBlock}
				styles={styles?.textBlock}
			/>
			<Button
				data={data?.button}
				styles={styles?.button}
			/>
		</div>
	);
}

export default CtaBlock;
