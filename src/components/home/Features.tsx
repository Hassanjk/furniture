import { Truck, CreditCard, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'No charge for each delivery'
  },
  {
    icon: CreditCard,
    title: 'Quick Payment',
    description: '100% secure payment'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Quick support'
  }
];

const Features = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 p-6 rounded-lg bg-gray-50">
              <feature.icon className="h-10 w-10 text-emerald-400" />
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;