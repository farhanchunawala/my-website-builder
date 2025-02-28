import React from "react";
import { Box } from "@mui/material";

interface ComponentMap {
    [key: string]: React.ComponentType<any> | ComponentMap;
}

const componentMap: ComponentMap = {
    Box: Box,
    CtaBlock: {
		Box: Box  //Nested component mapping
	},
};

export const renderStructure = (obj: any, path: string = "", currentMap = componentMap) => {
    return Object.entries(obj).map(([key, value]) => {
		const newPath = path ? `${path}.${key}` : key;
        const Component = currentMap[key];
        const children = value;
		
		if (!Component) {
			console.warn(`Component ${key} not found in componentMap`);
			return null;
		}

		if (typeof Component === "object") {
			return (
				<div key={newPath}>
					hi
				</div>
			);
		} else {
			return (
				<Component key={newPath}>
					{typeof children === "object" && children !== null
						? renderStructure(children, key, currentMap[key])
						: null}
				</Component>
			);
		}
    });
};

// save 1
