import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="p-3 bg-black flex justify-between items-center">
                <div className="flex space-x-8">
                    <h1 className="text-[30px] text-red-700 uppercase font-bold">Movie</h1>
                    <nav className="flex items-center space-x-6">
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
                <div className="flex space-x-4">
                    <input
                        type="text"
                        className="h-10 rounded-lg w-56 p-1"
                        placeholder="The movie you want watching"
                    />
                    <button className="text-white bg-red-500 rounded-lg p-2 w-24">Search</button>
                </div>
            </div>
        </>
    )
}

export default Header
