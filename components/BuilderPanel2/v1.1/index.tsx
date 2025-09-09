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
            <MiniPanel type="panel" />
            {/* <Box
                width={48}
                className="panel-container"
                sx={{
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    left: 0,
                    flex: "0 0 48px",
                    borderRight: "#ddd solid 1px",
                }}
            >
                {icons.map((icn, index) => (
                    <Box className="icons-container" key={index}>
                        <Box className="icon">{icn.svg}</Box>
                    </Box>
                ))}
            </Box> */}

            <Box
                className="panel-container"
                sx={{
                    left: "47px",
                    width: "260px",
                    borderRight: "#ddd solid 1px",
                }}
            >
                {/* <Box className="cards-container">
                    {cards.map((crd, index) => (
                        <Box className="card-container" key={index}>
                            <Box className="card">
                                {" "}
                                <Box className="icon-wrapper">
                                    <Box className="icon">{crd.icon}</Box>
                                </Box>
                                <Box className="card-text">{crd.text}</Box>
                            </Box>
                        </Box>
                    ))}
                </Box> */}
                <ElementsPanel type="panel" />
            </Box>

            {/* <Accordion.Root
                collapsible
                className="panel-container"
                id="layers"
                type="multiple"
            >
                <Box className="layers-container">
                    <Accordion.Item
                        className="layer-container"
                        value="1"
                        id="lc-1"
                    >
                        <Accordion.Trigger className="layer">
                            Layer 1
                        </Accordion.Trigger>
                        <Accordion.Content className="layer">
                            
                        </Accordion.Content>
                    </Accordion.Item>

                    
                </Box>
            </Accordion.Root> */}
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
