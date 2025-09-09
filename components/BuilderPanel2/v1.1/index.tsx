import { useState } from "react";
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

const BuilderPanel = ({ panel }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    const [addProp, setAddProp] = useState(false);
    const [propKey, setPropKey] = useState("");
    const [propValue, setPropValue] = useState("");
    const [error, setError] = useState("");

    return panel == "leftPanel" ? (
        <>
            <MiniPanel type="panel"/>
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
                value={Object.entries(styles)
                    .map(([key, val]) => `${key}: ${val};`)
                    .join("\n")}
            />
        </Box>
    );
};

export default BuilderPanel;
