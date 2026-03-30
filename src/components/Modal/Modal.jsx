import Portal from "../Portal/Portal";

const SIZES = {
  small: "w-50 h-30 text-xl p-3",
  middle: "w-80 h-80 text-2xl p-5",
  large: "w-120 h-110 text-3xl p-6",
  extralarge: "w-200 h-150 text-4xl p-7"
};

const VARIANTS = {
  dark: "bg-black text-gray-100",
  light: "bg-white text-black"
};

const POSITIONS = {
  center: "items-center",
  top: "items-start pt-10",
  bottom: "items-end pb-10"
};

function Modal({ size = "small", variant = "light", position = "center", children, isModalOpen, onClose }) {
  if (!isModalOpen) return null;

  return (
    <Portal>
      <div className={`fixed inset-0 bg-black/70 flex justify-center ${POSITIONS[position]}`} >
        <div className={`${VARIANTS[variant]} ${SIZES[size]} flex flex-col gap-5`}>
          <button className="self-end p-2 cursor-pointer" onClick={onClose}>X</button>
          {children}
          <div className="flex gap-2 justify-end">
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
