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
    const { mode } = useSelector((state: RootState) => state.builder);
    const { config, content, styling } = useSelector(
        (state: RootState) => ({
            config: get(state, `data.data.config.${path}`),
            content: get(state, `data.data.content.${path}`),
            styling: get(state, `data.data.styling.${path}`),
        })
    );
    const { frameHandlers, frameStyles } = useDesignFrame();
	const styles = styling?.styles || {};

    return (
        <div
            // component="section"
            // className="s014"
            // id="s014"
            style={{
				position: "relative",
                ...mapStyles(styles),
                ...frameStyles(`${path}`),
            }}
            {...frameHandlers(`${path}`)}
        >
            {children}
        </div>
    );
};

export default Box;
