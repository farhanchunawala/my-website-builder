import { useEffect, useState } from "react";
import "./page.scss";
import { Accordion } from "radix-ui";
import { Box, Button } from "@mui/material";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import ElementsPanel from "@/components/ElementsPanel/v1.1";
import MiniPanel from "@/components/MiniPanel/v1.1";
import TextareaAutosize from "react-textarea-autosize";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import get from "lodash-es/get";
import {
    updateNested,
    insertNested,
    removeNested,
} from "@/lib/features/data/dataSlice";

const BuilderPanel = ({ panel }) => {
    const dispatch = useDispatch();
    const { path } = useSelector((state: RootState) => state.builder);
    const { styling } = useSelector((state: RootState) => ({
        styling:
            get(
                state,
                path !== "" ? `data.data.styling.${path}` : `data.data`
            ) || {},
    }));
    const styles = styling?.styles || {};
    const [endsWithNewline, setEndsWithNewline] = useState(false);

    // Local textarea state
    const [cssText, setCssText] = useState("");
    useEffect(() => {
        // Convert styles object to CSS string
        const cssString =
            Object.entries(styles)
                .map(([key, val]) => `${key}: ${val};`)
                .join("\n") + (endsWithNewline ? "\n" : ""); // maintain trailing newline if it was there

        // ✅ Only update local state if different
        if (cssString !== cssText) {
            setCssText(cssString);
        }
    }, [styles]); // no cssText in deps

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const newValue = e.target.value;
        setCssText(newValue);

        // auto save if ends with ; or newline
        if (newValue.slice(-1) === ";" || newValue.slice(-1) === "\n") {

            // check if ends with newline
            setEndsWithNewline(newValue.endsWith("\n"));

            // convert back into object
            const newStyles: Record<string, string> = {};
            newValue.split("\n").forEach((line) => {
                const [key, val] = line
                    .split(":")
                    .map((s) => s && s.trim());
                if (key && val) {
                    newStyles[key] = val.replace(/;$/, ""); // remove trailing ;
                }
            });

            dispatch(
                updateNested({
                    path: `styling.${path}.styles`,
                    value: newStyles,
                    // value: event.target.value,
                })
            );
        }
    };

    return panel == "leftPanel" ? (
        <>
            <MiniPanel type="panel" />
            <Box
                className="panel-container"
                sx={{
                    left: "47px",
                    width: "260px",
                    borderRight: "#ddd solid 1px",
                }}
            >
                <ElementsPanel type="panel" />
            </Box>
        </>
    ) : (
        <Box className="panel-container css-panel">
            {/* {JSON.stringify(styles, null, 2)} */}
            <TextareaAutosize
                className="textarea"
                placeholder="Enter CSS..."
                minRows={3}
                value={cssText}
                onChange={handleChange}
            />
            {/* <Button
				startIcon={<LayersRoundedIcon />}
				variant="contained"
				onClick={saveCSS}
			>
				Save CSS
			</Button> */}
        </Box>
    );
};

export default BuilderPanel;
