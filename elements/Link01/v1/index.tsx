import type Props from "./types";

const Link: React.FC<Props> = ({
    data,
    styles,
}) => {
    return (
        <a style={styles}>
            {data.content}
        </a>
    );
};

export default Link;
