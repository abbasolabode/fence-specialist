import Header from "../components/ui/Header";
import AboutCompany from "../components/ui/AboutCompany";
import AboutService from "../components/ui/AboutService";
import SliderImages from "../components/ui/SliderImages";
import Testimonial from "../components/ui/Testimonial";
import WhyRachuna from "../components/ui/WhyRachuna";
import Map from "../components/ui/Map";
import LatestBlog from "../components/ui/LatestBlog";
import Accordions from "../components/ui/Accordions";
import Footer from "../components/ui/Footer";
import HeroContents from "../components/ui/HeroContents";
import { useFormContact } from "../context/IsOpenContactForm";
import ContactForm from "../components/Forms/ContactForm";

export default function Home() {
  const { isModalOpen } = useFormContact();

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden flex flex-col">
      {/* Header Section */}
      <header className="w-full sticky top-0 z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="w-full mx-auto flex-grow">
        {/* Hero Section */}
        <HeroContents />

        {/* About Company Section */}
        <AboutCompany />

        {/* Contact Form Modal - Fixed positioning for better mobile UX */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <ContactForm />
            </div>
          </div>
        )}

        {/* About Service Section */}
        <AboutService />

        {/* Slider Images Section */}
        <SliderImages />

        {/* Testimonial Section */}
        <Testimonial />

        {/* Why Rachuna Section */}
        <WhyRachuna />

        {/* Map Section - Hidden on mobile */}
        <Map />

        {/* Latest Blog Section */}
        <LatestBlog />

        {/* Accordions Section */}
        <Accordions />
      </main>

      {/* Footer Section - Updated container */}
      <div className="min-w-full mt-auto">
        <div className="mx-auto min-w-full min-w-screen-2xl">
          <Footer />
        </div>
      </div>
    </div>
  );
}