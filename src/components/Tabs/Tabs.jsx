import { useState } from "react";

function Tabs({ items = [], defaultActiveKey }) {
  const [active, setActive] = useState(defaultActiveKey || items[0]?.key);

  return (
    <div>
      <div className="flex gap-2 border-b mb-3">
        {items.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-4 py-2 ${active === tab.key
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
              }`
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {items.map((tab) =>
          active === tab.key ? (
            <div key={tab.key}>{tab.children}</div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Tabs;
