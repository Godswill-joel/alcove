import about from "../../../public/img/About.png";
import CallToAction from "../../components/CallAction";
import Testimonials from "../../components/home/Testimony";
import Apartmenthero from "../../components/apartment/Apartmenthero";
import Features from "../../components/apartment/Features";

export default function Apartment() {
    return (
        <div>
           <Apartmenthero />
           <Features />
            <Testimonials />
            <CallToAction
                backgroundImage={about}
                title="Can’t decide? Let us help you find your perfect stay"
                subtitle="Book a premium shortlet with Alcove today"
                buttonText="Chat with Us"
                to="/contact"
                onButtonClick={() => console.log("Booking...")}
            />
        </div>
    );
}
