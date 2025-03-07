import { Users, Heart, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10K+',
    label: 'Happy Customers'
  },
  {
    icon: Heart,
    value: '100+',
    label: 'Plant Varieties'
  },
  {
    icon: Award,
    value: '5+',
    label: 'Years Experience'
  }
];

const About = () => {
  return (
    <div className="pt-20">
      <div className="relative h-[300px] bg-cover bg-center mb-16"
        style={{ backgroundImage: 'url("https://strong-klepon-362cd5.netlify.app/assets/img/hero/plants.jpg")' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2019, Daunku has been passionate about bringing nature indoors. We believe that plants 
            not only beautify spaces but also contribute to better air quality and overall well-being. Our 
            mission is to help everyone create their own urban jungle with carefully selected plants and 
            expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-3xl">
              <stat.icon className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Quality First:</strong> We carefully select and nurture each plant to ensure it thrives in your home.
              </p>
              <p className="text-gray-600">
                <strong>Sustainability:</strong> We're committed to eco-friendly practices in everything we do.
              </p>
              <p className="text-gray-600">
                <strong>Customer Care:</strong> Our team of experts is always ready to help you with plant care advice.
              </p>
            </div>
          </div>
          <div>
            <img 
              src="https://strong-klepon-362cd5.netlify.app/assets/img/hero/single-plant.jpg" 
              alt="Our values" 
              className="rounded-3xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;