import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("https://strong-klepon-362cd5.netlify.app/assets/img/hero/plants.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Bring Serenity to Your Place With Interior Plants
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Find your dream plant for your home decoration with us, and we will make it happen.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search plant"
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-emerald-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-400 rounded-full">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;