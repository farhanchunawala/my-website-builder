import React from "react";
import { ItemLoopProps } from "./types";

const ItemLoop: React.FC<ItemLoopProps> = ({
	children,
    data,
    styles,
}) => {
	return (
		<div style={styles?.container} >
            {data?.map((item, index) => (
                React.isValidElement(children) ? (
					<React.Fragment key={index}>
						{React.cloneElement(children, { item })}
					</React.Fragment>
				) : null
            ))}
		</div>
	);
}

export default ItemLoop;
