import WhyChoose from "../../components/home/Whychoose";
import Testimonials from "../../components/home/Testimony";
import CallToAction from "../../components/CallAction";
import about from "../../../public/img/About.png";
import OurStory from "../../components/about/Ourstory";
import OurMission from "../../components/about/Mission";
import OurValues from "../../components/about/Values";
import AboutHero from "../../components/about/Abouthero";

export default function About() {
    return (
        <div>
            <AboutHero/>
            <OurStory />
            <OurMission />
            <WhyChoose />
            <OurValues />
            <Testimonials />
            <CallToAction
                backgroundImage={about}
                title="Ready to Experience Alcove?"
                subtitle="Find your next shortlet in minutes"
                buttonText="Explore Apartments"
                onButtonClick={() => console.log("Booking...")}
            />
        </div>
    );
}
