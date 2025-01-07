const config = []

const content = [
	{
		text: "text1",
		link: "link1"
	},
	{
		text: "text2",
		link: "link2"
	},
]

const styles = {
	container: {
		flexDirection: responsive("column", "column", "row"),
		alignItems: "center",
		position: responsive(
			"absolute",
			"absolute",
			"static"
		),
		top: theme.spacing(16),
		left: 0,
		right: 0,
		zIndex: 10,
	},
	link: {
		...texts.linkText,
		cursor: "pointer",
		padding: theme.spacing(
			responsive(3, 3, 2),
			responsive(6, 6, 4)
		),
		opacity: tokens.textLight,
		display: responsive("block", "block", "flex"),
		width: "fit-content",
		margin: "0 auto",
	},
}
