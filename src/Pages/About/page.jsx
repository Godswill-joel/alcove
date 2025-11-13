import WhyChoose from "../../components/home/Whychoose";
import Testimonials from "../../components/home/Testimony";
import CallToAction from "../../components/CallAction";
import abouthero from "../../../public/img/Aboutbg.png";

export default function About() {
    return (
        <div>
            <CallToAction
                backgroundImage={abouthero}
                title="Redefining Shortlet Living"
                subtitle="Alcove is where comfort, convenience, and modern design meet giving you premium stays that feel like home."
                buttonText="Explore Apartments"
                onButtonClick={() => console.log("Booking...")}
            />
            <WhyChoose />
            <Testimonials />
        </div>
    );
}
