function Button({
    type = "default",
    variant = "filled",
    size = "small",
    onClick,
    children,
}) {
    const types = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        default: "bg-white text-black border border-gray-300 hover:bg-gray-100",
    };

    const variants = {
        filled: "",
        outlined: "bg-transparent border",
        dashed: "bg-transparent border border-dashed",
        text: "bg-transparent border-none shadow-none",
    };

    const sizes = {
        small: "px-2 py-1 text-sm",
        middle: "px-4 py-2",
        large: "px-6 py-3 text-lg",
    }

    return (
        <button onClick={onClick} className={`cursor-pointer ${types[type]} ${variants[variant]} ${sizes[size]}`}>
            {children}
        </button>)
}

export default Button;
