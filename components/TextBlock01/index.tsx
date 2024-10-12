import "./styles.scss";
import DOMPurify from "dompurify";

export default function TextBlock({ content, className, style }) {
    console.log(className);

    return (
        <div className="textBlock01" style={style.container}>
            <h1
                className={`title ${className.title}`}
                style={style.title}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content.title),
                }}
            />
            <p
                className={`subtitle ${className.subtitle}`}
                style={style.subtitle}
            >
                {content.subtitle}
            </p>
        </div>
    );
}
