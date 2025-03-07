import { Plus } from 'lucide-react';

const products = Array(3).fill({
  name: 'Cammile',
  price: 65.00,
  rating: 5,
  image: 'https://strong-klepon-362cd5.netlify.app/assets/img/hero/single-plant.jpg'
}).map((product, index) => ({
  ...product,
  id: index + 1
}));

const BestSeller = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Best Seller Product</h2>
            <a href="/shop" className="text-gray-600 hover:text-emerald-400 transition">
              See all collection →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-3xl p-6 relative group">
              <div className="h-64 mb-4 overflow-hidden rounded-2xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                {[...Array(product.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                <button className="bg-emerald-400 text-white p-2 rounded-full hover:bg-emerald-500 transition">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;