const height = {
	type: "text",
	// adornment: "px",
}

const width = {
	type: "text",
	// adornment: "px",
}

const display = {
	type: "select",
	// adornment: "px",
	options: [
		{
			value: "block",
			label: "block",
		},
		{
			value: "inline",
			label: "inline",
		},
		{
			value: "inline-block",
			label: "inline-block",
		},
		{
			value: "none",
			label: "none",
		},
	],
};

const fontWeight = {
	type: "select",
	// adornment: "px",
    options: [
        {
            value: "100",
            label: "100",
        },
        {
            value: "200",
            label: "200",
        },
        {
            value: "300",
            label: "300",
        },
        {
            value: "400",
            label: "400",
        },
        {
            value: "500",
            label: "500",
        },
        {
            value: "600",
            label: "600",
        },
        {
            value: "700",
            label: "700",
        },
        {
            value: "800",
            label: "800",
        },
        {
            value: "900",
            label: "900",
        },
    ],
};

export { height, width, display, fontWeight };
