import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import AnchorLink from "./AnchorLink";



export default function AboutService() {
    const navigate = useNavigate();

	const x = useQuery({

	})

 const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 390,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 428,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
		],
	};



  return (
		<div className="min-h-[245rem] w-[24.375rem] bg-black 2xl:w-[94.5rem] 2xl:mini-h-[135.4375rem]">
			<div className=" min-h-[240rem] w-[24.375rem] 2xl:min-h-full w-full">
				<div className="min-h-[180rem] w-[24.375rem]">
					<div className="flex flex-col justify-center items-center py-3 mb-8 2xl:w-[22.75rem] 2xl:min-h-[5.625rem] 2xl:mt-[5rem] 2xl:pl-6">
						<h2 className="text-[2rem] text-white font-poppins 2xl:w-full 2xl:min-h-[3.4375rem] 2xl:mt-[3rem] 2xl:font-lato font-semibold text-[2.5rem]">
							Your
							<span className="italic text-spanYellow font-lato mr-2 ml-2 ">Fencing</span>
							services
						</h2>
						<p className="text-sm text-white 2xl:w-full 2xl:min-h-[1.1875rem] leading-[100%] text-[#CED1D2]">
							Here you can find the different services we offer
						</p>
					</div>

					<div className="w-full">
						<div className="2xl:w-[89.5rem] 2xl:grid 2xl:grid-cols-3 gap-4 2xl:justify-between">
							<div className="flex flex-col justify-center items-center min-h-[40rem] 2xl:w-[28.5rem] 2xl:min-h-[31.6rem] 2xl:ml-4">
								<div className="w-[22rem] min-h-[15rem] 2xl:w-[28.5rem] 2xl:min-h-[15rem]">
									<img
										className="w-full min-h-[15rem] 2xl:object-cover w-full"
										src="/images/sidedFence.png"
										alt="fence"
									/>
								</div>

								<div className="w-full min-h-[20rem] pt-6 pl-5 2xl:w-[28.5rem] 2xl:min-h-[14.6875rem]">
									<h2 className="text-[1.3rem] font-lato font-medium text-dimGray text-white">
										Commercial Fencing
									</h2>
									<p className="leading-7 w-[22rem] mt-3 text-white 2xl:min-h-[10.6875rem] 2xl:w-[29rem] 2xl:min-h-[8.75rem] text-[#ABB4B7] font-lato leading-[1.75rem] font-medium">
										Our commercial fencing solutions are designed to enhance
										security, privacy, and curb appeal. Our expert team
										specializes in custom installations for various commercial
										properties, providing durable and reliable fencing options
										tailored to meet the specific needs of your business.
									</p>

									<div className="flex items-center min-h-[9rem]">
										<AnchorLink
											learnMore="w-[7rem] flex justify-center font-semibold"
											learnMorePath={() => navigate("/")}
										>
											<p>Learn more</p>
										</AnchorLink>
									</div>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center min-h-[40rem] ">
								<div className="w-[22rem] min-h-[15rem]">
									<img
										className="w-full min-h-[15rem]"
										src="/images/sidedFence.png"
										alt="fence"
									/>
								</div>

								<div className="w-full min-h-[20rem] pt-6 pl-5">
									<h2 className="text-[1.3rem] font-lato font-medium text-white text-dimGray">
										Fence Installation
									</h2>
									<p className="leading-7 w-[22rem] mt-3 text-white">
										We provide top-tier fence installation services in
										Bloomington, MN, delivering customized solutions for both
										residential and commercial properties. Our skilled team
										ensures precise and efficient installations, using
										high-quality materials to create fences that are both
										aesthetically pleasing and built to last.
									</p>

									<div className="flex items-center min-h-[9rem]">
										<AnchorLink
											learnMore="w-[7rem] flex justify-center font-semibold"
											learnMorePath={() => navigate("/")}
										>
											<p>Learn more</p>
										</AnchorLink>
									</div>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center min-h-[40rem] ">
								<div className="w-[22rem] min-h-[15rem]">
									<img
										className="w-full min-h-[15rem]"
										src="/images/sidedFence.png"
										alt="fence"
									/>
								</div>

								<div className="w-full min-h-[20rem] pt-6 pl-5">
									<h2 className="text-[1.3rem] font-lato font-medium text-white text-dimGray">
										Fence Repairs
									</h2>
									<p className="leading-7 w-[22rem] mt-3 text-white">
										We offer expert fence repair services in Bloomington, MN,
										designed to restore the integrity and appearance of your
										fence. Our experienced team swiftly addresses issues with
										precision, using top-quality materials to ensure your fence
										is as strong and secure as ever.
									</p>

									<div className="flex items-center min-h-[9rem]">
										<AnchorLink
											learnMore="w-[7rem] flex justify-center font-semibold"
											learnMorePath={() => navigate("/")}
										>
											<p>Learn more</p>
										</AnchorLink>
									</div>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center min-h-[40rem] ">
								<div className="w-[22rem] min-h-[15rem]">
									<img
										className="w-full min-h-[15rem]"
										src="/images/sidedFence.png"
										alt="fence"
									/>
								</div>

								<div className="w-full min-h-[20rem] pt-6 pl-5">
									<h2 className="text-[1.3rem] font-lato font-medium text-white text-dimGray">
										Fence Removal
									</h2>
									<p className="leading-7 w-[22rem] mt-3 text-white">
										We provide efficient and reliable fence removal services,
										ensuring a hassle-free process for clearing old or damaged
										fences. Our team handles all aspects of removal with care,
										leaving your property clean and ready for new installations
										or landscaping.
									</p>

									<div className="flex items-center min-h-[9rem]">
										<AnchorLink
											learnMore="w-[7rem] flex justify-center font-semibold"
											learnMorePath={() => navigate("/")}
										>
											<p>Learn more</p>
										</AnchorLink>
									</div>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center min-h-[40rem] ">
								<div className="w-[22rem] min-h-[15rem]">
									<img
										className="w-full min-h-[15rem]"
										src="/images/sidedFence.png"
										alt="fence"
									/>
								</div>

								<div className="w-full min-h-[20rem] pt-6 pl-5">
									<h2 className="text-[1.3rem] font-lato font-medium text-white text-dimGray">
										Gates & Railings
									</h2>
									<p className="leading-7 w-[22rem] mt-3 text-white">
										We specialize in gates and railings services, offering
										custom fabrication to meet your specific design and
										functional needs. Our expert team crafts and installs
										high-quality gates and railings that enhance both security
										and aesthetic appeal for your property.
									</p>

									<div className="flex items-center min-h-[9rem]">
										<AnchorLink
											learnMore="w-[7rem] flex justify-center font-semibold"
											learnMorePath={() => navigate("/")}
										>
											<p>Learn more</p>
										</AnchorLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Select styles */}
				<div className="text-white w-full">
					<div className="w-[24.375rem]">
						<div className="mb-[3rem] mt-[4rem]">
							<h2 className="text-center font-lato text-[1.3rem]">
								Select from a
								<span className="text-spanYellow pl-2 font-poppins">
									variety of fence styles
								</span>
							</h2>
						</div>

						{/* Slider Container */}
						<div className="w-full overflow-hidden">
							<Slider {...settings}>
								{/* Slide 1 */}
								<div className="px-2">
									<div className="relative w-full min-h-[22rem] mb-4 flex flex-col justify-center items-center mx-auto">
										<div>
											<img
												className="min-h-[22rem] rounded-xl object-cover w-full"
												src="/images/wire fence.png"
												alt="Chainlink fence"
											/>
										</div>
										<div className="absolute right-0 top-[13rem] left-3">
											<h3 className="text-[1.2rem]">Chainlink</h3>
											<p className="text-[0.7rem] w-[10rem]">
												Popular choice due to the affordability, durability, and
												versatility.
											</p>
											<AnchorLink
												learnMore="w-[7rem] flex justify-center mt-2 font-semibold"
												learnMorePath={() => navigate("/")}
											>
												<p>Learn more</p>
											</AnchorLink>
										</div>
									</div>
								</div>

								{/* Slide 2 */}
								<div className="px-2">
									<div className="relative w-full min-h-[22rem] mb-4 flex flex-col justify-center items-center mx-auto">
										<div>
											<img
												className="min-h-[22rem] rounded-xl object-cover w-full"
												src="/images/open iron fence.png"
												alt="Ornamental steel fence"
											/>
										</div>
										<div className="absolute right-0 top-[13rem] left-3">
											<h3 className="text-[1.2rem]">Ornamental steel</h3>
											<p className="text-[0.7rem] w-[10rem]">
												Often feature decorative elements that enhance the
												overall appearance.
											</p>
											<AnchorLink
												learnMore="w-[7rem] flex justify-center mt-2 font-semibold"
												learnMorePath={() => navigate("/")}
											>
												<p>Learn more</p>
											</AnchorLink>
										</div>
									</div>
								</div>

								{/* Slide 3 */}
								<div className="px-2">
									<div className="relative w-full min-h-[22rem] mb-4 flex flex-col justify-center items-center mx-auto">
										<div>
											<img
												className="min-h-[22rem] rounded-xl object-cover w-full"
												src="/images/white wooden fence2.png"
												alt="Vinyl & PVC fence"
											/>
										</div>
										<div className="absolute right-0 top-[13rem] left-3">
											<h3 className="text-[1.2rem]">Vinyl & PVC</h3>
											<p className="text-[0.7rem] w-[10rem]">
												Popular choice due to the affordability, durability, and
												versatility.
											</p>
											<AnchorLink
												learnMore="w-[7rem] flex justify-center mt-2 font-semibold"
												learnMorePath={() => navigate("/")}
											>
												<p>Learn more</p>
											</AnchorLink>
										</div>
									</div>
								</div>

								{/* Slide 4 */}
								<div className="px-2">
									<div className="relative w-full min-h-[22rem] mb-4 flex flex-col justify-center items-center mx-auto">
										<div>
											<img
												className="min-h-[22rem] rounded-xl object-cover w-full"
												src="/images/wooden fence tall.png"
												alt="Wooden fence"
											/>
										</div>
										<div className="absolute right-0 top-[13rem] left-3">
											<h3 className="text-[1.2rem]">Wood</h3>
											<p className="text-[0.7rem] w-[10rem]">
												Classic and popular choice for residential, commercial,
												and agricultural properties.
											</p>
											<AnchorLink
												learnMore="w-[7rem] flex justify-center mt-2 font-semibold"
												learnMorePath={() => navigate("/")}
											>
												<p>Learn more</p>
											</AnchorLink>
										</div>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
