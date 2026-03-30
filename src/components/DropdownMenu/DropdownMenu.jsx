import { useState } from "react";

const POPUP_POSITION = {
  bottomLeft: "top-full left-0",
  bottomRight: "top-full right-0",
  bottomCenter: "top-full left-1/2 -translate-x-1/2",
  topLeft: "bottom-full left-0",
  topRight: "bottom-full right-0",
  topCenter: "bottom-full left-1/2 -translate-x-1/2"
};

function DropdownMenu({ items, position = "bottomRight", action = "hover", children, ...otherProps }) {
  const [opened, setOpened] = useState(false);
  const actionType = action === "hover" ? {
    onMouseEnter: () => setOpened(true),
    onMouseLeave: () => setOpened(false)
  } :
    {
      onClick: () => setOpened(!opened)
    }
  return (
    <div className="relative inline-block" {...actionType}>
      {children}
      {
        opened && (
          <div className={`absolute z-10 bg-white border border-gray-200 shadow-md rounded text-black ${POPUP_POSITION[position]}`}
            {...otherProps}
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
        )
      }
    </div>
  );
}

export default DropdownMenu;
