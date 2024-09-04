
function News() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start">
            <p>Create an account now and win a lifetime premium subscription along with a redeem key</p>
            <button className="bg-none text-left w-full border-none text-blue-600" onClick={() => window.open("https://ecxogames.ca/", "_blank")}>Create an account before March 2025</button>
        </div>
    )
}

export default News;