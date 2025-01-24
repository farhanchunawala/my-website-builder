import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { setProperty } from "@/lib/features/data/dataSlice";
import * as styleProps from "./styleProps";
import get from "lodash-es/get";
import {
    TextField,
    MenuItem,
    Button,
    InputAdornment,
} from "@mui/material";

interface Props {}

const BuilderPanel: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const { path } = useSelector((state: RootState) => state.builder);
    const { styles } = useSelector((state: RootState) => ({
        styles: get(state, `data.data.styles.${path}`) || {},
    }));

    return (
        <Box className="side-bar">
            <Box>
                {Object.entries(styles).map(
                    ([key, value]) => (
                        <TextField
                            key={key}
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
                                minWidth: "160px",
                                margin: "16px 32px",
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
                    )
                )}
            </Box>

            <br />
            <Button
                variant="outlined"
                // onClick={toggleSidePanel}
                aria-label="Close Side Panel"
            >
                Close Panel
            </Button>
        </Box>
    );
};

export default BuilderPanel;
