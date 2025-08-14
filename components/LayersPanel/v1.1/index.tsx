import * as Accordion from "@radix-ui/react-accordion";
import "./styles.scss";

type LayerData = {
    component: string;
    children?: LayerData[];
};

export function LayersPanel({ data }: { data: LayerData[] }) {
    if (!data?.length) return null;
    return (
        <>
            {data.map((item, index) => (
                <LayerItem
                    key={`${item.component}-${index}`}
                    item={item}
                />
            ))}
        </>
    );
}

function LayerItem({ item }: { item: LayerData }) {
    const hasChildren = item?.children?.length > 0;

    if (item.component === "Box" && hasChildren) {
        return (
            <Accordion.Root
                className="accordion-root"
                type="multiple"
                defaultValue={[]}
            >
                <Accordion.Item
                    className="accordion-item"
                    value={item.component}
                >
                    <Accordion.Header className="accordion-header">
                        <Accordion.Trigger className="accordion-trigger">
                            <ChevronIcon />
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
    return (
        <div className="accordion-content-text">{item.component}</div>
    );
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
                fill="currentColor"
                d="M4.59 1.992a.3.3 0 0 0-.231-.492H.641a.3.3 0 0 0-.231.492l1.86 2.231a.299.299 0 0 0 .46 0Z"
            />
        </svg>
    );
}
