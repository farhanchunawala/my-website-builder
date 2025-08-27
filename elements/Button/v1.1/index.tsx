// import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { get } from "lodash-es";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";
import AutosizeInput from "react-input-autosize";
import { updateNested } from "@/lib/features/data/dataSlice";

interface Props {
    path: string;
}

type VariantStyles = Record<string, React.CSSProperties>;
type SizeStyles = Record<string, React.CSSProperties>;

const variantStyles: VariantStyles = {
    contained: {
        borderRadius: 0,
    },
};

const sizeStyles: SizeStyles = {
    medium: {
        fontSize: "12px",
        letterSpacing: "2px",
        height: "45px",
        padding: "0 25px",
        // padding: "12px 25px",
    },
    large: {
        fontSize: "14px",
        letterSpacing: "2px",
        height: "60px",
        padding: "0 35px",
        // padding: "16px 35px",
    },
};

const Button: React.FC<Props> = ({ path }) => {
    const dispatch = useDispatch();
    const { mapStyles } = useMapStyles();
    const { mode } = useSelector((state: RootState) => state.builder);
    const { config, content, styles } = useSelector(
        (state: RootState) => ({
            config: get(state, `data.data.config.${path}`),
            content: get(state, `data.data.content.${path}`),
            styles: get(state, `data.data.styles.${path}`),
        })
    );
    const { frameHandlers, frameStyles } = useDesignFrame();
    // const [isHovered, setIsHovered] = useState(false);
    // const hoverStyles = isHovered ? styles.hover : {};

    return (
        <button
            style={{
                ...variantStyles[config?.variant],
                ...sizeStyles[config?.size],
                ...mapStyles(styles?.container),
                ...frameStyles(`${path}.container`),
                // ...hoverStyles,
            }}
            {...frameHandlers(`${path}.container`)}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            // href={
            // 	mode !== "builder"
            // 		? `#${get(content, `${path}.button.link`)}`
            // 		: undefined
            // }
        >
            {mode === "builder" ? (
                <AutosizeInput
                    className="auto-size-input"
                    value={content?.text}
                    placeholder=""
                    onChange={(event) =>
                        dispatch(
                            updateNested({
                                path: `content.${path}.text`,
                                value: event.target.value,
                            })
                        )
                    }
                    {...frameHandlers(`${path}.text`)}
                    inputStyle={{
                        ...frameStyles(`${path}.text`),
                    }}
                />
            ) : (
                content?.text
            )}
        </button>
    );
};

export default Button;
