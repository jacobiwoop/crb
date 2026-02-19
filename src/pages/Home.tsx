import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import ServicesDetailed from '../components/ServicesDetailed';
import AboutFounder from '../components/AboutFounder';
import ImmersiveGallery from '../components/ImmersiveGallery';
import VisionMission from '../components/VisionMission';
import WhyChooseUs from '../components/WhyChooseUs';
import PortfolioPreview from '../components/PortfolioPreview';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ServicesDetailed />
      <AboutFounder />
      <ImmersiveGallery />
      <VisionMission />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
    </>
  );
};

export default Home;
