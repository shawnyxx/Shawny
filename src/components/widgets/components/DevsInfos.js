
function DevsInfos() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start">
            <p className="text-md text-left w-full">Shawny.app - By Ecxo Games Studio</p>
            <p className="text-sm text-left w-full">Version 1.0 [ALPHA]</p>
            <button className="bg-transparent text-left w-full border-none text-blue-600" onClick={() => window.open('https://ecxogames.ca/', '_blank')}>Our website</button>
        </div>
    );
}

export default DevsInfos;