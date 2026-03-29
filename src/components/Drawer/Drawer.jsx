function Drawer({ open, children, onClose }) {
    if (!open) return null;
    return (
        <div className="inset-0 fixed bg-black/70">
            <div className="absolute inset-0" onClick={onClose}></div>
            <div className="absolute right-0 top-0 w-[300px] h-full bg-white text-black p-3">
                <button className="cursor-pointer" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    )
}

export default Drawer;
