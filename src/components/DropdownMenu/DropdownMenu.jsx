import { useState } from "react";

function DropdownMenu({ items, position = "bottomRight", children }) {
  const [opened, setOpened] = useState(false);

  const PopupPosition = {
    bottomLeft: "top-full left-0",
    bottomRight: "top-full right-0",
    bottomCenter: "top-full left-1/2 -translate-x-1/2",

    topLeft: "bottom-full left-0",
    topRight: "bottom-full right-0",
    topCenter: "bottom-full left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
    >
      {children}

      {opened && (
        <div
          className={`absolute z-10 bg-white border border-gray-200 shadow-md rounded text-black ${PopupPosition[position]}`}
        >
          {items.map((item) => (
            <div
              key={item.key}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={item.onClick}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
