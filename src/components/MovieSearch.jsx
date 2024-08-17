import PropType from 'prop-types'
function MovieSearch({ title, data }) {
    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase text-xl mb-4">{title}</h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {data &&
                    data.length > 0 &&
                    data.map((item) => (
                        <div
                            className="w-[200px] h-[300px] relative group"
                            key={item.id}
                            // onClick={() => {
                            //     handleTrailer(item.id)
                            // }}
                        >
                            <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                                <img
                                    src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
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
            </div>
        </div>
    )
}

MovieSearch.propTypes = {
    title: PropType.string,
    data: PropType.array,
}

export default MovieSearch
