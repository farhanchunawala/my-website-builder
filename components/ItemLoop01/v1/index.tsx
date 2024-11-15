import React from "react";
import Props from "./types";

const ItemLoop: React.FC<Props> = ({
	children,
    data,
    styles,
}) => {
	return (
		<div style={styles?.container} >
            {data?.map((item, index) => {
				return (
					React.isValidElement(children) ? (
						<React.Fragment key={index}>
							{React.cloneElement(children, { item })}
						</React.Fragment>
					) : null
				);
			})}
		</div>
	);
}

export default ItemLoop;
