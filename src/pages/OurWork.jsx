import HeaderText from "../components/ui/HeaderText";
import ImageSliders from "../components/ui/ImageSliders";
//import ImageSlider2 from "../components/ui/ImageSlider2";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function OurWork() {
	return (
		<div className="min-w-full min-h-screen overflow-x-hidden flex flex-col">
			{/* Header Section - Responsive padding and centering */}
			<div className="min-w-full px-4 sm:px-6 md:px-8 flex flex-col items-center h-[10rem] md:h-[12rem] lg:h-[14rem]">
				<Navbar />
				<HeaderText ourWork="OUR WORK" />
			</div>

			{/* Main Content - Responsive width and padding with flex-grow to fill remaining space */}
			<main className="flex-grow min-w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 flex justify-center">
				<div className="w-full max-w-screen-xl border-3 border-red-300 flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
					{/* Sliders - Responsive width with appropriate max-width */}
					<div className="w-full max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
						<ImageSliders />
					</div>
					<div className="w-full max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
						{/* <ImageSlider2 /> */}
					</div>
				</div>
			</main>

			{/* Footer - Fixed at the bottom */}
			<Footer />
		</div>
	);
}