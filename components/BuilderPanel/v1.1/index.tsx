import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { setProperty } from "@/lib/features/data/dataSlice";
import * as styleProps from "./styleProps";
import {
    TextField,
    MenuItem,
    Button,
    InputAdornment,
} from "@mui/material";

interface Props {}

const BuilderPanel: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const { styles } = useSelector(
        (state: RootState) => state.data.data
    );

    return (
        <Box className="side-bar">
            <Box>
                {Object.entries(styles.s014.ctaBlock.container).map(
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
                                        // path: `styles.${path}`,
                                        path: `styles.s014.ctaBlock.container.${key}`,
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
