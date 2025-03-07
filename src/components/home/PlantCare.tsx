import { Sun, Droplet, Leaf, Thermometer } from 'lucide-react';

const careSteps = [
  {
    icon: Sun,
    title: 'Adjust Lighting',
    description: 'When caring for indoor plants, make sure the room temperature is neither too cold nor too hot'
  },
  {
    icon: Droplet,
    title: "Don't water too often",
    description: 'Watering ornamental plants indoors does not have to be done every day.'
  },
  {
    icon: Leaf,
    title: 'Maintain cleanliness',
    description: 'Clean the leaves periodically to maintain their health and appearance'
  },
  {
    icon: Thermometer,
    title: 'Fertilize regularly',
    description: 'The nutrients most houseplants need are nitrogen for balance and potassium for stem strength'
  }
];

const PlantCare = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">How to care for plants</h2>
            <p className="text-gray-600 mb-8">Take care of plants with all your heart</p>
            
            <div className="space-y-6">
              {careSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-emerald-400 p-2 rounded-lg">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://strong-klepon-362cd5.netlify.app/assets/img/hero/care-for-plants.jpg" 
              alt="Plant care"
              className="w-full h-[500px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCare;