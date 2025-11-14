import about from "../../../public/img/About.png";
import CallToAction from "../../components/CallAction";
import Testimonials from "../../components/home/Testimony";
import Apartmenthero from "../../components/apartment/Apartmenthero";

export default function Apartment() {
    return (
        <div>
           <Apartmenthero />
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
