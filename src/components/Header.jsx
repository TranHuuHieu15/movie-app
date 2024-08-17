import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'
const Header = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('')

    const handleClearSearch = () => {
        setSearchValue('')
    }
    return (
        <>
            <div className="p-3 bg-black flex justify-between items-center">
                <div className="flex gap-8">
                    <h1 className="text-[30px] text-red-700 uppercase font-bold">Movie</h1>
                    <nav className="flex items-center gap-6">
                        <Link to="/" className="text-white">
                            Home
                        </Link>
                        <Link to="/about" className="text-white">
                            About
                        </Link>
                        <Link to="/contact" className="text-white">
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="h-10 rounded-lg w-60 px-2 py-1 outline-none"
                            placeholder="Search"
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                        />
                        {searchValue && (
                            <button
                                className="text-white bg-gray-300 rounded-full w-5 h-5 hover:bg-gray-400 absolute right-2 top-[10px] flex items-center justify-center"
                                onClick={handleClearSearch}
                            >
                                &times;
                            </button>
                        )}
                    </div>
                    <button
                        className="text-white bg-red-500 rounded-lg p-2 w-24 hover:bg-red-400 outline-none"
                        onClick={() => onSearch(searchValue)}
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}

Header.propTypes = {
    onSearch: PropTypes.func,
}

export default Header
