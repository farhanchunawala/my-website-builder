// elements/Box/v1.1/index.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { get } from "lodash-es";
import { useMapStyles } from "@/lib/hooks/useMapStyles";
import useDesignFrame from "@/lib/hooks/useDesignFrame";

interface Props {
    path: string;
	children: React.ReactNode;
}

const Box: React.FC<Props> = ({ path, children }) => {
    const { mapStyles } = useMapStyles();
    const mode = useSelector((state: RootState) => state.mode);
    const { config, content, styles } = useSelector(
        (state: RootState) => ({
            config: get(state, `data.data.config.${path}`),
            content: get(state, `data.data.content.${path}`),
            styles: get(state, `data.data.styles.${path}`),
        })
    );
    const { frameHandlers, frameStyles } = useDesignFrame();

    return (
        <div
            // component="section"
            // className="s014"
            // id="s014"
            style={{
				position: "relative",
                ...mapStyles(styles?.styles),
                ...frameStyles(`${path}.styles`),
            }}
            {...frameHandlers(`${path}.styles`)}
        >
            {children}
        </div>
    );
};

export default Box;
