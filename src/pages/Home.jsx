
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




//blur-sm drop-shadow-md 

export default function Home() {
  


	return (
		<div className="min-h-[500rem] overflow-hidden">
			<Header />
			<HeroContents/>
			
				<AboutCompany />
				<AboutService />
				<SliderImages />
				<Testimonial />
				<WhyRachuna />
				{/* show on tablet and desktop screens */}
				<Map />
				<LatestBlog />
				<Accordions />
				<Footer/>
			
		</div>
	);
}
