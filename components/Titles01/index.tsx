import styles from "./styles.module.scss";
import DOMPurify from "dompurify";

export default function Titles({ content }) {
	return (
		<div className={styles.titles}>
			<h1
                className={styles.title}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content.title),
                }}
            />
            <p className={styles.subtitle}>{content.subtitle}</p>
		</div>
	);
}
