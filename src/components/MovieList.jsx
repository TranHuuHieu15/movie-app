import PropTypes from 'prop-types'

function MovieList({ title = 'your film', data }) {
    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase text-xl mb-4">{title}</h2>
            <div className="flex items-center gap-4">
                {data.length > 0 &&
                    data.map((item, index) => (
                        <div className="w-[200px] h-[300px] relative group" key={index}>
                            <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                                <img
                                    src={`${import.meta.env.VITE_IMG_URL}${
                                        item.poster_path
                                    }`}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bg-black opacity-35 top-0 left-0 w-full h-full" />
                                <div className="absolute bottom-4 left-2">
                                    <p className="uppercase text-md">
                                        {item.title || item.original_title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                {/* <div className="w-[200px] h-[300px] relative group">
                    <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                        <img
                            src={ImgTemp}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bg-black opacity-35 top-0 left-0 w-full h-full" />
                        <div className="absolute bottom-4 left-2">
                            <p className="uppercase text-md">{title}</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

MovieList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
}
export default MovieList
