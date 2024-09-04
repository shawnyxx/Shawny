function BigWindow({ children, onClose }) {
    return (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-3/4 h-2/4 p-8 flex flex-col items-center justify-center bg-black bg-opacity-75 backdrop-blur-lg border border-white rounded">
                <div className="text-white text-center w-full h-full overflow-y-auto">
                    {children}
                </div>
                <button className="border translate-y-[55px] text-white border-white rounded bg-black min-w-20 p-2" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default BigWindow;