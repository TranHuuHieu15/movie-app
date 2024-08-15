import IconRating from '../assets/image/rating.png'
import IconRatingHalf from '../assets/image/rating-half.png'
import ImgTemp from '../assets/image/temp-1.jpeg'
import IconPlay from '../assets/image/play-button.png'
function Banner() {
    return (
        <>
            <div className="w-full bg-banner h-[600px] bg-no-repeat bg-cover bg-center relative">
                <div className="absolute w-full h-full opacity-15 bg-black" />
                <div className="w-full h-full flex items-center justify-center gap-3 p-4 absolute z-20">
                    <div className="w-[50%] ml-9 -mt-9">
                        <p
                            className="text-white bg-gradient-to-r from-red-600 to-red-300 py-1 px-3 text-lg 
                            text-center w-32"
                        >
                            TV Show
                        </p>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[35px] font-bold text-white">
                                Nghe nói em thích tôi
                            </h2>
                            <div className="flex items-center gap-3">
                                <img
                                    src={IconRating}
                                    alt="icon-rating"
                                    className="w-8 h-8"
                                />
                                <img
                                    src={IconRating}
                                    alt="icon-rating"
                                    className="w-8 h-8"
                                />
                                <img
                                    src={IconRating}
                                    alt="icon-rating"
                                    className="w-8 h-8"
                                />
                                <img
                                    src={IconRating}
                                    alt="icon-rating"
                                    className="w-8 h-8"
                                />
                                <img
                                    src={IconRatingHalf}
                                    alt="icon-rating-half"
                                    className="w-8 h-8"
                                />
                            </div>
                            <p className="text-white w-[50%] text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Explicabo aut fugit recusandae, nostrum sequi,
                                minus assumenda numquam voluptatem error doloremque
                                vitae at quisquam, cupiditate velit quos dolore rem.
                                Voluptates, voluptatibus.
                            </p>
                            <div className="flex items-center gap-5">
                                <button
                                    className="font-bold bg-black py-2 px-3 text-white transform hover:scale-90
                                    transition duration-200 text-md"
                                >
                                    Chi tiết
                                </button>
                                <button
                                    className="font-bold bg-red-600 py-2 px-3 text-white transform 
                                    hover:scale-90 transition duration-200 text-md"
                                >
                                    Xem phim
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] flex items-center justify-center ml-0">
                        <div className="w-[300px] h-[400px] relative group cursor-pointer">
                            <img
                                src={ImgTemp}
                                alt="temp"
                                className="object-cover w-full h-full"
                            />
                            <button
                                className="w-full h-full absolute top-0 left-0 flex items-center justify-center
                                backdrop-blur-sm opacity-0 group group-hover:opacity-100 transition-opacity 
                                duration-500 ease-in-out"
                            >
                                <img
                                    src={IconPlay}
                                    alt="play"
                                    className="w-16 h-16"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
