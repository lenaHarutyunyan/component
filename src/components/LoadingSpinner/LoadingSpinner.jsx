// function LoadingSpinner({ title, size = "w-4 h-4", color }) {

//     const Sizes = {
//         small: "w-3 h-3",
//         middle: "w-4 h-4",
//         large: "w-5 h-5"
//     };

//     // two types 

//     const Colors = {
//         transparent: "border-transparent",
//         // primary: "border-gray-500"
//     };

//     return (
//         <div className="flex items-center gap-2">
//             <h1> {title}</h1>
//             <div className="grid grid-cols-2 gap-1 animate-spin">
//                 {/* size avelacnel */}
//                 <div className={`${Sizes[size]} border rounded-sm`}></div>
//                 <div className={`${Sizes[size]} border rounded-sm`}></div>
//                 <div className={`${Sizes[size]} border rounded-sm`}></div>
//                 <div className={`${Sizes[size]} border rounded-sm`}></div>
//             </div>
//             {/* <div className={`${Sizes[size]} ${Colors[color]}  border-2  border-t-blue-500 rounded-full animate-spin`}></div> */}
//         </div>
//     )
// }

// export default LoadingSpinner;


function LoadingSpinner({
    title,
    size = "middle",
    color = "gray",
    variant = "circle",
}) {

    const Sizes = {
        small: "w-3 h-3",
        middle: "w-5 h-5",
        large: "w-7 h-7",
    };

    const Colors = {
        gray: "bg-gray-500",
        blue: "bg-blue-500",
        red: "bg-red-500",
    };

    if (variant === "dots") {
        return (
            <div className="flex items-center gap-2">
                {title && <span>{title}</span>}

                <div className="grid grid-cols-2 gap-1 animate-spin">
                    <div className={`${Sizes[size]} ${Colors[color]} rounded-sm`} />
                    <div className={`${Sizes[size]} ${Colors[color]} rounded-sm`} />
                    <div className={`${Sizes[size]} ${Colors[color]} rounded-sm`} />
                    <div className={`${Sizes[size]} ${Colors[color]} rounded-sm`} />
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            {title && <span>{title}</span>}

            <div
                className={`
                    ${Sizes[size]}
                    border-2
                    border-gray-300
                    border-t-transparent
                    rounded-full
                    animate-spin
                `}
            />
        </div>
    );
}

export default LoadingSpinner;
