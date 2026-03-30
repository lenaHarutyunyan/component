import Button from "../customButton/Button";
import Portal from "../Portal/Portal";

function Modal({ size = "small", variant = "light", position = "center", children, modalIsOpen, onClose }) {
  if (!modalIsOpen) return null;

  const Sizes = {
    small: "w-50 h-30 text-xl p-3",
    middle: "w-100 h-100 text-2xl p-5",
    large: "w-120 h-110 text-3xl p-6",
    extralarge: "w-200 h-150 text-4xl p-7"
  };

  const Variants = {
    dark: "bg-black text-gray-100",
    light: "bg-white text-black"
  };

  const Positions = {
    center: "items-center",
    top: "items-start pt-10",
    bottom: "items-end pb-10"
  };

  return (
    <Portal>
      <div className={`fixed inset-0 bg-black/70 flex justify-center ${Positions[position]}`} >
        <div className={`${Variants[variant]} ${Sizes[size]} flex flex-col gap-5`}>
          {children}
          <div className="flex gap-2 justify-end">
            <Button type="success" onClick={onClose}>
              Ok
            </Button>
            <Button type="danger" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
