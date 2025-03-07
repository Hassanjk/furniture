import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <Leaf className="h-16 w-16 text-emerald-400 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-emerald-400 text-white rounded-full hover:bg-emerald-500 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;