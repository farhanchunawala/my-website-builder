import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { Box, width } from "@mui/system";
import {
    setProperty,
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

    return (
        <Box className="side-bar">
            <Box className="style-props">
                {Object.entries(styles).map(([key, value]) => (
                    <Box key={key} className="row">
                        <TextField
                            label={key}
                            size="small"
                            defaultValue={value}
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
                                margin: "16px 0",
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

            <Button
                variant="contained"
                className="add-button"
                // onClick={toggleSidePanel}
            >
                <AddIcon />
            </Button>

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
