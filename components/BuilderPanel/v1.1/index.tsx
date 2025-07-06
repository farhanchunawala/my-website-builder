// app/components/BuilderPaner/v1.1/index.tsx
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
// import DraggableInsertDemo from "@/elements/DraggableComponent/v1.1";
// import {
//     handleDragStart,
//     handleDragOver,
//     handleDragEnter,
//     handleDragLeave,
//     handleDrop,
//     handleDragEnd,
// } from "@/lib/hooks/useDragAndDrop/v3.1";

interface Props {}

const BuilderPanel: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const { path } = useSelector((state: RootState) => state.builder);
    const { styles } = useSelector((state: RootState) => ({
        styles: get(state, `data.data.styles.${path}.styles`) || {},
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
                            value: {},
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
            <div
                draggable
                // onDragStart={(e) =>
                //     handleDragStart(e)
                // }
                // onDragEnd={handleDragEnd}
            >
                Typography
            </div>
            {/* <div className="p-8 max-w-4xl mx-auto">
                <div className="flex gap-8">
                    <div className="w-64 bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-semibold mb-4">
                            Drag to Insert:
                        </h3>
                        <div
                            draggable
                            onDragStart={(e) =>
                                onDragStart(e, newComponent, true)
                            }
                            onDragEnd={onDragEnd}
                            className={`${newComponent.color} p-4 rounded-lg cursor-move shadow-lg hover:shadow-xl transition-shadow border-2 border-dashed border-orange-300`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">⊞</span>
                                <span className="font-medium">
                                    {newComponent.text}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                                Drag me to insert
                            </p>
                        </div>

                        <button
                            onClick={onResetComponents}
                            className="mt-4 w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors"
                        >
                            Reset Layout
                        </button>
                    </div>

                    <div className="flex-1">
                        <h3 className="font-semibold mb-4">
                            Component List:
                        </h3>
                        <div className="space-y-2">
                            {components.map((component, index) => (
                                <div key={component.id}>
                                    <div
                                        onDragOver={(e) =>
                                            onDragOver(e, index)
                                        }
                                        onDragEnter={(e) =>
                                            onDragEnter(e, index)
                                        }
                                        onDragLeave={onDragLeave}
                                        onDrop={(e) =>
                                            onDrop(e, index)
                                        }
                                        className={`h-2 transition-all duration-200 ${
                                            dragOverIndex === index &&
                                            draggingItem
                                                ? "bg-blue-400 h-8 rounded-lg border-2 border-blue-500 border-dashed"
                                                : "bg-transparent"
                                        }`}
                                    />

                                    <div
                                        draggable
                                        onDragStart={(e) =>
                                            onDragStart(e, component)
                                        }
                                        onDragEnd={onDragEnd}
                                        className={`${
                                            component.color
                                        } p-4 rounded-lg cursor-move shadow-md hover:shadow-lg transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 ${
                                            draggingItem?.id ===
                                            component.id
                                                ? "opacity-50 scale-95"
                                                : ""
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">
                                                ⋮⋮
                                            </span>
                                            <span className="font-medium text-lg">
                                                {component.text}
                                            </span>
                                            <span className="text-sm text-gray-500 ml-auto">
                                                ID: {component.id}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div
                                onDragOver={(e) =>
                                    onDragOver(e, components.length)
                                }
                                onDragEnter={(e) =>
                                    onDragEnter(e, components.length)
                                }
                                onDragLeave={onDragLeave}
                                onDrop={(e) =>
                                    onDrop(e, components.length)
                                }
                                className={`h-2 transition-all duration-200 ${
                                    dragOverIndex ===
                                        components.length &&
                                    draggingItem
                                        ? "bg-blue-400 h-8 rounded-lg border-2 border-blue-500 border-dashed"
                                        : "bg-transparent"
                                }`}
                            />
                        </div>
                    </div>
                </div>

                {draggingItem && (
                    <div className="fixed top-4 right-4 bg-blue-100 p-3 rounded-lg shadow-lg">
                        <p className="text-sm font-medium">
                            {draggingItem.isNew
                                ? "Inserting new component..."
                                : "Reordering components..."}
                        </p>
                    </div>
                )}
            </div> */}
            {/* <DraggableComponent
                className="bg-blue-500 text-white p-4 rounded-lg shadow-lg"
                style={{ width: "200px", height: "100px" }}
            >
                <div className="text-center">
                    <h3 className="font-semibold">Box Component</h3>
                </div>
            </DraggableComponent> */}

            {/* Style Props Panel */}
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
                    {addProp ? propKey ? "ADD" : "CANCEL" : <AddIcon />}
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
