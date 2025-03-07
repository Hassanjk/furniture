import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import BestSeller from '../components/home/BestSeller';
import PlantReference from '../components/home/PlantReference';
import PlantCare from '../components/home/PlantCare';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <BestSeller />
      <PlantReference />
      <PlantCare />
    </main>
  );
};

export default Home;