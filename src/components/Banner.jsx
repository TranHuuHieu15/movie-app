function Banner() {
    return (
        <>
            <div className="w-full bg-banner h-[600px] bg-no-repeat bg-cover bg-center relative">
                <div className="absolute w-full h-full opacity-15 bg-black" />
                <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4">
                    <div>
                        <p>TV Show</p>
                    </div>
                    <div>image</div>
                </div>
            </div>
        </>
    )
}

export default Banner
