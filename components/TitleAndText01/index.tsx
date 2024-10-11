import "./styles.scss";
import DOMPurify from "dompurify";

export default function Titles({ content, style }) {
    return (
        <div className="titleAndText01" style={style.container}>
            <h1
                className="title"
				style={style.title}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content.title),
                }}
            />
            <p className="subtitle" style={style.subtitle}>{content.subtitle}</p>
        </div>
    );
}
