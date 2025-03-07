const references = [
  {
    title: 'Living room',
    image: 'https://strong-klepon-362cd5.netlify.app/assets/img/hero/living-room.jpg'
  },
  {
    title: 'Work space',
    image: 'https://strong-klepon-362cd5.netlify.app/assets/img/hero/work-space.jpg'
  },
  {
    title: 'Corner space',
    image: 'https://strong-klepon-362cd5.netlify.app/assets/img/hero/conerpace.jpg'
  }
];

const PlantReference = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Interior Plant Reference</h2>
          <p className="text-gray-600">make your home so comfortable with refreshing plants</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="relative rounded-3xl overflow-hidden h-[400px] group">
              <img 
                src={references[0].image} 
                alt={references[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <h3 className="text-3xl font-bold text-white">{references[0].title}</h3>
              </div>
            </div>
          </div>
          {references.slice(1).map((ref, index) => (
            <div key={index} className="relative rounded-3xl overflow-hidden h-[300px] group">
              <img 
                src={ref.image} 
                alt={ref.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <h3 className="text-2xl font-bold text-white">{ref.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantReference;