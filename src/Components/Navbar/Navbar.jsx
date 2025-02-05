import React from 'react';

const Navbar = () => {
    return (
       <>
       function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Hair Salon</div>
                <div className="hidden md:flex space-x-6">
                    <Link className="hover:text-gray-400" to="/">Home</Link>
                    <Link className="hover:text-gray-400" to="/booking">Pre-Booking</Link>
                    <Link className="hover:text-gray-400" to="/face-customization">Face Customization</Link>
                </div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 bg-gray-700 p-4">
                    <Link className="block hover:text-gray-400" to="/">Home</Link>
                    <Link className="block hover:text-gray-400" to="/booking">Pre-Booking</Link>
                    <Link className="block hover:text-gray-400" to="/face-customization">Face Customization</Link>
                </div>
            )}
        </nav>
    );
}
       </>
    );
};

export default Navbar;