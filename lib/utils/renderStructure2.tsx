// Duplicated - 24 Jun 2025
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import { get } from "lodash-es";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const componentMap = {
    Typography,
    Button,
    Box,
};

export const useRenderStructure = (structure, path) => {
    const { mapStyles } = useMapStyles();
    const { designFrame } = useDesignFrame();
    const { content, styles } = useSelector((state: RootState) => ({
        content: get(state, `data.data.content.${path}.ctaBlock.textBlock.texts`),
        styles: get(state, `data.data.styles.${path}.ctaBlock`),
    }));

    return structure.map((item, index) => {
        console.log(path);

        if (Array.isArray(item)) {
            return (
                <Box key={index}>
                    {useRenderStructure(item, `${path}.${index}`)}
                </Box>
            );
        } else if (typeof item === "string") {
            const Component = componentMap[item];
            if (Component) {
                return (
                    <Component
                        key={index}
                        // sx={{ ...mapStyles(styles?.container) }}
                        // {...designFrame(`${path}.container`)}
                    >
                        {/* Content for {item} */}
						{content}
                    </Component>
                );
            } else {
                console.warn(
                    `Component "${item}" not found in componentMap`
                );
                return (
                    <div key={index}>Unknown component: {item}</div>
                );
            }
        } else {
            console.warn("Unexpected item type:", typeof item, item);
            return null;
        }
    });
};
