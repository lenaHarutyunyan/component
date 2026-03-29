import { useState } from "react";

function CollapsiblePanel({ title, size = "small", defaultOpen = false, children }) {
    const Sizes = {
        small: "text-xl",
        middle: "text-2xl",
        large: "text-3xl",
    };

    const [opened, setOpened] = useState(defaultOpen);

    return (
        <div className={`flex flex-col bg-gray-500 p-3 gap-3 border ${Sizes[size]}`}>
            <div
                className="cursor-pointer"
                onClick={() => setOpened(!opened)}
            >
                <h2>{title}</h2>
                <span>{opened ? "−" : "+"}</span>
            </div>
            {opened && <div>{children}</div>}
        </div>
    );
}

export default CollapsiblePanel;
