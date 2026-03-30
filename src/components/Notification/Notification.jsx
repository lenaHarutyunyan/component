import { useEffect } from "react";

function Notification({ message, position = "topRight", onClose, duration = 3000 }) {
  if (!message) return null;

  const Positions = {
    topRight: "top-4 right-4",
    topLeft: "top-4 left-4",
    bottomLeft: "bottom-4 left-4",
    bottomRight: "bottom-4 right-4",
    topCenter: "top-4 left-1/2 -translate-x-1/2",
    bottomCenter: "bottom-4 left-1/2 -translate-x-1/2"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  return (
    <div className={`fixed ${Positions[position]} bg-green-500 text-white p-3 rounded shadow`}>
      {message}
    </div>
  );
}

export default Notification;
