import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnchorLink from "./AnchorLink";

const testimonials = [
	{
		id: 1,
		content:
			"Highly recommend Rachuna Fence. Nick and his team are great to work with and also fairly priced. Communicated weather delays and completed the project in 2 1/2 days. We love our new fence!",
		name: "Anna Davis, Banker",
		image: "/images/testimonial1.webp",
	},
	{
		id: 2,
		content:
			"Highly recommend Rachuna Fence. Nick and his team are great to work with and also fairly priced. Communicated weather delays and completed the project in 2 1/2 days. We love our new fence!",
		name: "Jonh Mark, constructor",
		image: "/images/testimonial2.webp",
	},
	{
		id: 3,
		content:
			"Highly recommend Rachuna Fence. Nick and his team are great to work with and also fairly priced. Communicated weather delays and completed the project in 2 1/2 days. We love our new fence!",
		name: "Collins Craig, Software Engineer",
		image: "/images/testimonial3.webp",
	},
	{
		id: 4,
		content:
			"Highly recommend Rachuna Fence. Nick and his team are great to work with and also fairly priced. Communicated weather delays and completed the project in 2 1/2 days. We love our new fence!",
		name: "Nicolas Rachua, Businness owner",
		image: "/images/testimonial4.webp",
	},
	{
		id: 5,
		content:
			"Highly recommend Rachuna Fence. Nick and his team are great to work with and also fairly priced. Communicated weather delays and completed the project in 2 1/2 days. We love our new fence!",
		name: "Son Cheng, Tattoo Artist",
		image: "/images/testimonial5.webp",
	},
	{
		id: 6,
		content:
			"Highly recommend Rachuna Fence. Nick and his team are great to work with and also fairly priced. Communicated weather delays and completed the project in 2 1/2 days. We love our new fence!",
		name: "Daniella Rox, Nurse",
		image: "/images/testimonial6.webp",
	},
	{
		id: 7,
		content:
			"Highly recommend Rachuna Fence. Nick and his team are great to work with and also fairly priced. Communicated weather delays and completed the project in 2 1/2 days. We love our new fence!",
		name: "Ben Steve, Truck Driver",
		image: "/images/testimonial5.webp",
	},
	{
		id: 8,
		content:
			"Highly recommend Rachuna Fence. Nick and his team are great to work with and also fairly priced. Communicated weather delays and completed the project in 2 1/2 days. We love our new fence!",
		name: "Stella Trump, Teacher",
		image: "/images/testimonial6.webp",
	},
];

export default function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1, // Show one slide at a time
		slidesToScroll: 1, // Scroll one slide at a time
		responsive: [
			{
				breakpoint: 390,
				settings: {
					slidesToShow: 1, // Show one slide at a time
					slidesToScroll: 1, // Scroll one slide at a time
				},
			},
			{
				breakpoint: 428,
				settings: {
					slidesToShow: 1, // Show one slide at a time
					slidesToScroll: 1, // Scroll one slide at a time
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1, // Show one slide at a time
					slidesToScroll: 1, // Scroll one slide at a time
				},
			},
		],
	};

	return (
		<div className="w-[24.375rem] min-h-[40rem] mx-auto flex flex-col items-center overflow-hidden 2xl:w-[89.5rem] ">
			<div className="w-[23rem] min-h-[35rem] rounded-xl bg-[#F8F9FA] max-full 2xl:w-full 2xl:shadow-lg">
				<div className="w-[23rem] min-h-[10rem] 2xl:w-[89.5rem] 2xl:min-h-[6.75rem] 2xl:flex 2xl:justify-between">
					<h2 className="w-[20rem] text-center ml-4 pt-[2rem] text-[1.2rem] font-poppins font-medium 2xl:w-[20rem] 2xl:text-black 2xl:min-h-full 2xl:text-left font-lato font-semibold 2xl:text-[2.5rem]">
						Hear from our
						<br/>
						<span className="text-utiliBlue pl-1 font-sourceSerif italic ">satisfied customers</span>
					</h2>

					<div className="hidden 2xl:block 2xl:w-[14.3125rem] 2xl:min-h-[5.25rem] 2xl:flex 2xl:flex-col 2xl:justify-center">
						<div className="2xl:w-[7.875rem] 2xl:min-h-[3rem] 2xl:flex">
							<span>
								<img src="/images/icon2.png" alt="google icon" />
							</span>
							<span>
								<img src="/images/icon3.png" alt="facebook icon" />
							</span>
							<span>
								<img src="/images/icon4.png" alt="icon"  />
							</span>
						</div>
						<div className="2xl:w-[12.8125rem] 2xl:min-h-[1.1875rem]  2xl:relative 2xl:right-[2rem]">
							<span className="flex gap-2 items-center 2xl:w-full 2xl:min-h-full">
								<img src="/images/Star.png" alt="star icon" className="2xl:w-[1.25rem] 2xl:min-h-[1.25rem]"/>
								<p className="whitespace-nowrap font-lato 2xl:w-[10rem]">(5.0) ratings from 48 reviews</p>
							</span>
						</div>
					</div>
				</div>

				<div>
					<Slider {...settings}>
						{testimonials.map((testimonial) => (
							<div key={testimonial.id} className="flex flex-col items-center 2xl:w-[89.5rem] 2xl:min-h-[9.75rem]">
								<div className="w-[23rem] mx-auto flex justify-center">
									<img
										src={testimonial.image}
										className="w-[10rem]"
										alt="testimonial icon"
									/>
								</div>
								<div className="2xl:w-[89.5rem] 2xl:min-h-[5rem] 2xl:pt-[2rem] 2xl:flex 2xl:justify-center">
									<p className="w-[20.5rem] text-center pl-2 text-white font-poppins 2xl:w-[50.5rem] 2xl:text-black">
									   {testimonial.content}
								    </p>
								</div>

								<p className="text-[0.9rem] pt-3 font-poppins text-center text-utiliBlue">
									{testimonial.name}
								</p>
							</div>
						))}
					</Slider>
				</div>
			</div>
			
	
			<div className="mt-5 2xl:w-[89.5rem] 2xl:text-left">
				<AnchorLink testimonial="/gallery">
					<p className="mx-auto">
						See gallery
					</p>
				</AnchorLink>
			</div>
		</div>
	);
}













