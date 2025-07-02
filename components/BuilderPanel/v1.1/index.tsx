import { useState } from "react";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { Box, width } from "@mui/system";
import {
    setProperty,
    addProperty,
    deleteProperty,
} from "@/lib/features/data/dataSlice";
import * as styleProps from "./styleProps";
import get from "lodash-es/get";
import {
    TextField,
    MenuItem,
    Button,
    InputAdornment,
    IconButton,
    Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface Props {}

const BuilderPanel: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const { path } = useSelector((state: RootState) => state.builder);
    const { styles } = useSelector((state: RootState) => ({
        styles: get(state, `data.data.styles.${path}`) || {},
    }));
    const [addProp, setAddProp] = useState(false);
    const [propKey, setPropKey] = useState("");
    const [propValue, setPropValue] = useState("");
	const [error, setError] = useState("");

    const handleAddProperty = () => {
		if (addProp) {
			if (propKey) {
				// Ensure the styles object exists before adding property
				if (!styles || Object.keys(styles).length === 0) {
					// Initialize the styles object first
					dispatch(
						setProperty({
							path: `styles.${path}`,
							value: {}
						})
					);
				}
				
				dispatch(
					addProperty({
						path: `styles.${path}`,
						key: propKey,
						value: propValue,
					})
				);
			}
			// Reset form state
			setAddProp(false);
			setPropKey("");
			setPropValue("");
		} else {
			// Enable add mode
			setAddProp(true);
		}
	};

    return (
        <Box className="side-bar">
            <Box className="style-props">
                {Object.entries(styles)
                    .filter(
                        ([key]) =>
                            key !== "imports" &&
                            key !== "tablet" &&
                            key !== "desktop"
                    )
                    .map(([key, value]) => (
                        <Box key={key} className="row">
                            <TextField
                                label={key}
                                size="small"
                                value={value}
                                // type="number"
                                // select
                                // helperText="Please select your currency"
                                onChange={(event) =>
                                    dispatch(
                                        setProperty({
                                            path: `styles.${path}.${key}`,
                                            value: event.target.value,
                                        })
                                    )
                                }
                                sx={{
                                    // minWidth: "160px",
                                    margin: "12px 0",
                                    // width: "calc(100% - 32px)",
                                    width: "100%",
                                }}
                                slotProps={{
                                    input: {
                                        // endAdornment: (
                                        //     <InputAdornment position="end">
                                        //         kg
                                        //     </InputAdornment>
                                        // ),
                                        style: {
                                            fontSize: "14px",
                                        },
                                    },
                                }}
                            >
                                {/* {styleProps.fontWeight.options.map((option) => (
									<MenuItem
										key={option.value}
										value={option.value}
									>
										{option.label}
									</MenuItem>
								))} */}
                            </TextField>
                            <IconButton
                                className="delete"
                                onClick={() =>
                                    dispatch(
                                        deleteProperty({
                                            path: `styles.${path}.${key}`,
                                        })
                                    )
                                }
                            >
                                <DeleteIcon sx={{ fill: "#aaa" }} />
                            </IconButton>
                        </Box>
                    ))}
            </Box>

            <Box className="add-property">
                {addProp && (
                    <>
                        <Divider className="divider" />
                        <TextField
                            size="small"
                            label="Property"
                            // type="number"
                            // select
                            // helperText="Please select your currency"
                            onChange={(event) =>
                                setPropKey(event.target.value)
                            }
                            sx={{
                                // minWidth: "160px",
                                margin: "12px 0",
                                // width: "calc(100% - 32px)",
                                width: "100%",
                            }}
                            slotProps={{
                                input: {
                                    // endAdornment: (
                                    //     <InputAdornment position="end">
                                    //         kg
                                    //     </InputAdornment>
                                    // ),
                                    style: {
                                        fontSize: "14px",
                                    },
                                },
                            }}
                        />
                        <TextField
                            size="small"
                            label="Value"
                            // type="number"
                            // select
                            // helperText="Please select your currency"
                            onChange={(event) =>
                                setPropValue(event.target.value)
                            }
                            sx={{
                                // minWidth: "160px",
                                margin: "12px 0",
                                // width: "calc(100% - 32px)",
                                width: "100%",
                            }}
                            slotProps={{
                                input: {
                                    // endAdornment: (
                                    //     <InputAdornment position="end">
                                    //         kg
                                    //     </InputAdornment>
                                    // ),
                                    style: {
                                        fontSize: "14px",
                                    },
                                },
                            }}
                        />
                    </>
                )}
                <Button
                    variant="contained"
                    className="add-button"
                    onClick={handleAddProperty}
                >
                    {addProp ? (
                        propKey ? (
                            "ADD"
                        ) : (
                            "CANCEL"
                        )
                    ) : (
                        <AddIcon />
                    )}
                </Button>
            </Box>

            {/* <br />
            <Button
                variant="outlined"
                // onClick={toggleSidePanel}
            >
                Close Panel
            </Button> */}
        </Box>
    );
};

export default BuilderPanel;
