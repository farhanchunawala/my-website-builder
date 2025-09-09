import * as Accordion from "@radix-ui/react-accordion";
import "./styles.scss";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";

type LayerData = {
    component: string;
    children?: LayerData[];
};

export function LayersPanel({ data }: { data: LayerData[] }) {
    if (!data?.length) return null;
    return (
        <Box
            className="panel-container layers-panel"
            sx={{
                left: "47px",
                marginTop: "47px",
                width: "260px",
                borderRight: "#ddd solid 1px",
            }}
        >
            {data.map((item, index) => (
                <LayerItem key={`${item.component}-${index}`} item={item} />
            ))}
        </Box>
    );
}

function LayerItem({ item }: { item: LayerData }) {
    const hasChildren = item?.children?.length > 0;

    if (item.component === "Box" && hasChildren) {
        return (
            <Accordion.Root
            sx={{
                marginTop: "47px",
            }}
                className="accordion-root"
                type="multiple"
                defaultValue={[]}
            >
                <Accordion.Item
                    className="accordion-item"
                    value={item.component}
                >
                    <Accordion.Header className="accordion-header">
                        <Accordion.Trigger className="layer-item">
                            <ChevronIcon />
                            <svg
                                className="layer-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                width="12"
                                height="12"
                            >
                                <path
                                    d="M 1 3 C 1 1.895 1.895 1 3 1 L 9 1 C 10.105 1 11 1.895 11 3 L 11 5 C 11 5.276 10.776 5.5 10.5 5.5 L 1.5 5.5 C 1.224 5.5 1 5.276 1 5 Z M 1 7 C 1 6.724 1.224 6.5 1.5 6.5 L 10.5 6.5 C 10.776 6.5 11 6.724 11 7 L 11 9 C 11 10.105 10.105 11 9 11 L 3 11 C 1.895 11 1 10.105 1 9 Z"
                                    fill="#0099fe"
                                    // fill="currentColor"
                                ></path>
                            </svg>
                            {item.component}
                        </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content className="accordion-content">
                        <LayersPanel data={item.children!} />
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        );
    }

    // Fallback for non-Box items
    return <div className="layer-item">{item.component}</div>;
}

function ChevronIcon() {
    return (
        <svg
            className="accordion-chevron"
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="7"
        >
            <path
                fill="#999999"
                // fill="currentColor"
                d="M4.59 1.992a.3.3 0 0 0-.231-.492H.641a.3.3 0 0 0-.231.492l1.86 2.231a.299.299 0 0 0 .46 0Z"
            />
        </svg>
    );
}
