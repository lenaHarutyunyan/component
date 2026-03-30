function Section({ title, children }) {
    return (
        <div className="flex flex-col gap-5  bg-gray-800 p-5">
            <h2 className="text-3xl text-blue-200">{title}</h2>
            <div className="flex gap-5">
                {children}
            </div>
        </div>
    )
}

export default Section;
