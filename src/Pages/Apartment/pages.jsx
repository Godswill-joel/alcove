import Testimonials from "../../components/home/Testimony";
import CallToAction from "../../components/CallAction";
import abouthero from "../../../public/img/Aboutbg.png";
import about from "../../../public/img/About.png";

export default function Apartment() {
    return (
        <div>
            <CallToAction
                backgroundImage={abouthero}
                title="Redefining Shortlet Living"
                subtitle="Alcove is where comfort, convenience, and modern design meet giving you premium stays that feel like home."
                buttonText="Explore Apartments"
                onButtonClick={() => console.log("Booking...")}
            />
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
