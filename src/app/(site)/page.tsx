import FeatureCards from "./FeatureCards";
import HeroSection from "./Hero";
import PlayZonesSection from "./PlayZone";
import HygieneSafetySection from "./HygienSafety";
import HappyMomentsSection from "./HappyMoment";
import ParentComfortSection from "./ParentsComfort";
import PricingSection from "./Pricing";
import FaqSection from "./Faq";
import ContactSection from "./Contact";
import CtaSection from "./Cta";
import FooterSection from "@/src/components/Footer";

export default function Page(){
    return(
        <>
           <HeroSection />
           <FeatureCards />
           <PlayZonesSection />
           <HygieneSafetySection />
           <HappyMomentsSection />
           <ParentComfortSection />
           <PricingSection />
           <FaqSection />
           <ContactSection />
           <CtaSection />
           <FooterSection />
        </> 
    ) 
}