import Hero from "../../components/Hero";
import HowItWorks from "../../components/home/Howitworks";
import WhyChoose from "../../components/home/Whychoose";
import FeaturedApartments from "../../components/home/Featureapartment";

export default function About() {
  return (
    <div>
      <Hero />
      <FeaturedApartments />
      <WhyChoose />
      <HowItWorks />
    </div>
  );
}
