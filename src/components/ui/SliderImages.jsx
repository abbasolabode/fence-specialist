import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnchorLink from "./AnchorLink";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { usePastWorkImage } from "../hooks/usePastWorkImage";
import Spinner from "./Spinner";

export default function SliderImages() {
	const navigate = useNavigate();
	const { pastWorkImages = [], isLoading } = usePastWorkImage();

	if (isLoading) return <Spinner />;

	// Responsive slider settings
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 640, // sm
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768, // md
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 1024, // lg
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 1280, // xl
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
		],
	};

	// Custom arrow components
	function NextArrow(props) {
		const { onClick } = props;
		return (
			<button
				onClick={onClick}
				className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
				aria-label="Next"
			>
				<MdKeyboardArrowRight className="text-xl" />
			</button>
		);
	}

	function PrevArrow(props) {
		const { onClick } = props;
		return (
			<button
				onClick={onClick}
				className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
				aria-label="Previous"
			>
				<MdKeyboardArrowLeft className="text-xl" />
			</button>
		);
	}

	return (
		<div className="w-full px-4 py-8 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto">
			<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-10">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center lg:text-left mb-4 lg:mb-0">
					Take a look at our{" "}
					<span className="text-blue-600 italic">past fencing work</span>
				</h2>

				{/* Desktop button */}
				<div className="hidden lg:block">
					<AnchorLink
						href="/ourwork"
						className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
					>
						See gallery
					</AnchorLink>
				</div>
			</div>

			<div className="relative">
				<Slider {...settings} className="w-full">
					{pastWorkImages.map((pastWorkImage) => (
						<div key={pastWorkImage?.id} className="px-2">
							<img
								className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg shadow-md"
								src={pastWorkImage?.image}
								alt={pastWorkImage?.image}
								loading="lazy"
							/>
						</div>
					))}
				</Slider>
			</div>

			{/* Mobile button */}
			<div className="flex justify-center mt-6 lg:hidden">
				<AnchorLink
					href="/ourwork"
					className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm"
				>
					See gallery
				</AnchorLink>
			</div>
		</div>
	);
}
