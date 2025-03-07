const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 px-4 py-2 rounded-l-full focus:outline-none flex-1"
              />
              <button className="bg-emerald-400 px-6 py-2 rounded-r-full hover:bg-emerald-500 transition">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Useful Link</h4>
            <ul className="space-y-2">
              <li><a href="/payment" className="text-gray-400 hover:text-white transition">Payment & Tax</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms of service</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Menu</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-400 hover:text-white transition">Best Product</a></li>
              <li><a href="/category" className="text-gray-400 hover:text-white transition">Category</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2024 Daunku - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;