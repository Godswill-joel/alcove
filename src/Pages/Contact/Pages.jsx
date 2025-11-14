import CallToAction from "../../components/CallAction";
import abouthero from "../../../public/img/Aboutbg.png";
import ContactSection from "../../components/contact/Contact";
import about from "../../../public/img/About.png";


export default function Contact() {
    return (
        <div>
            <CallToAction
                backgroundImage={abouthero}
                title="Redefining Shortlet Living"
                subtitle="Alcove is where comfort, convenience, and modern design meet giving you premium stays that feel like home."
                buttonText="Explore Apartments"
                onButtonClick={() => console.log("Booking...")}
            />
            <ContactSection />
        </div>
    );
}
