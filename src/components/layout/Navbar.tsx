import { ShoppingCart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-transparent py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-emerald-400" />
          <span className="text-2xl font-bold text-white">Daunku</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-emerald-400 transition">Home</Link>
          <Link to="/shop" className="text-white hover:text-emerald-400 transition">Shop</Link>
          <Link to="/about" className="text-white hover:text-emerald-400 transition">About Us</Link>
          <Link to="/contact" className="text-white hover:text-emerald-400 transition">Contact</Link>
        </div>

        <button className="relative p-2">
          <ShoppingCart className="h-6 w-6 text-white" />
          <span className="absolute -top-1 -right-1 bg-emerald-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;