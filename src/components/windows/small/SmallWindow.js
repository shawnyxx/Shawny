// Small Window Component
// A small popup window with multiple purposes
// Alerts, Confirmations, Inputs, Custom Content, and more...
// By Shawnyxx - [UNFINISHED]


function SmallWindow({ type = "alert", title = "Alert", content = "This is a small window", children, onClose, onConfirm, inputValue }) {
    const windowStyle = {style: window.innerWidth > 1024 ? "w-2/4 h-2/4 max-h-fit p-8 flex flex-col items-center justify-center bg-black bg-opacity-75 backdrop-blur-lg border border-white rounded" : "w-3/4 h-1/4 p-8 flex flex-col items-center justify-center bg-black bg-opacity-75 backdrop-blur-lg border border-white rounded"};

    return (
        <div className="fixed z-50 top-0 text-white left-0 w-full h-full flex items-center justify-center">
            <div className={windowStyle.style}>

                <div className="text-2xl text-white text-center w-full">
                    <p>{title}</p>
                </div>

                <div className="text-white text-center w-full overflow-y-auto">
                    {children ? (
                        <div>{children}</div>
                    ) : (
                        <p>{content}</p>
                    )}
                    {type === "input" ?(
                        <input type="text" className="border border-white rounded bg-black text-white p-1" onChange={(e) => inputValue(e.target.value)} />
                    ) : null}
                </div>

                <div className="text-white flex flex-row items-center justify-center text-center translate-y-[55px] w-full">
                    <button className="border text-white border-white rounded bg-black min-w-20 p-2" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default SmallWindow;