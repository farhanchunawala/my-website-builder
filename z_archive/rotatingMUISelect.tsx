import * as React from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function RotatingSelect() {
    const [value, setValue] = React.useState("");

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-label">Choose Option</InputLabel>
            <Select
                labelId="demo-label"
                id="demo-select"
                value={value}
                label="Choose Option"
                onChange={(e) => setValue(e.target.value)}
                IconComponent={ExpandMoreIcon}
                sx={{
                    // Target the icon wrapper
                    "& .MuiSelect-icon": {
                        transition: "transform 0.3s ease",
                    },
                    // When the select is open, MUI adds .Mui-expanded to the root
                    "&.Mui-expanded .MuiSelect-icon": {
                        transform: "rotate(180deg)",
                    },
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="one">Option One</MenuItem>
                <MenuItem value="two">Option Two</MenuItem>
                <MenuItem value="three">Option Three</MenuItem>
            </Select>
        </FormControl>
    );
}
