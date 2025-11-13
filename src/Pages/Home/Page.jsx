import Hero from "../../components/Hero";
import HowItWorks from "../../components/home/Howitworks";
import WhyChoose from "../../components/home/Whychoose";
import CallToAction from "../../components/CallAction";
import FeaturedApartments from "../../components/home/Featureapartment";
import Testimonials from "../../components/home/Testimony";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedApartments />
      <WhyChoose />
      <Testimonials />
      <CallToAction />
      <HowItWorks />
    </div>
  );
}
