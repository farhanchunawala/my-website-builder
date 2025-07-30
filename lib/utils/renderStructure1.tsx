import { Box, Button, Typography } from "@mui/material";
import { get } from "lodash-es";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const componentMap = {
    Typography,
    Button,
    Box,
};

export const useRenderStructure = (path) => {
    const { config } = useSelector((state: RootState) => ({
        config: get(state, `data.data.config.${path}`),
    }));

	if (!config?.children) return [];
	
    return config.children.map((item, index) => {
		const Component = componentMap[item.component];
        const currentPath = `${path}.children.${index}`;
		
        if (item.component === "Box" && item.children) {
            return (
                <Box key={index}>
                    {useRenderStructure(`${path}.${index}`)}
                </Box>
            );
        } else {
            return (
                <Component key={index} {...getProps(item)}>
                    {item.children
                        ? useRenderStructure(currentPath)
                        : getTextContent(item)}
                </Component>
            );
        }
    });
};

// save 1
// Duplicated - 25 Jun 2025
