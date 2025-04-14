/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
//import { getServices } from "../services/apiServices";
import { getVarieties } from "../services/apiVariety";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnchorLink from "./AnchorLink";
import Spinner from "../ui/Spinner";
import { useServices } from "../hooks/useServices";
import { useVarieties } from "../hooks/useVarieties";

export default function AboutService() {
	const navigate = useNavigate();
     
	//Custom hook
	const {services, isLoading, error} = useServices()
	const {varieties, isLoadingVarieties} = useVarieties()

	


	if (isLoadingVarieties) return <Spinner />;
	if (!varieties || varieties.length === 0)
		return (
			<div className="text-[2.5rem] font-lato font-bold text-center mx-auto text-red-500">
				No varieties available!
			</div>
		);

	if (isLoading) return <Spinner />;
	if (!services || services.length === 0)
		return (
			<div className="text-[2.5rem] font-lato font-bold text-center mx-auto text-red-500">
				No services available!
			</div>
		);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
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

			{
				breakpoint: 1512,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				},
			},
		],
	};

	return (
		<>
			<div className="min-h-[80rem]  w-[24.375rem] bg-black 2xl:w-[94.5rem] 2xl:min-h-[135.4375rem]">
				<div className="min-h-[80rem] w-[24.375rem] 2xl:min-h-full w-full">
					<div className="min-h-[80rem] w-[24.375rem]">
						<div className="flex flex-col justify-center items-center py-3 mb-8 2xl:w-[22.75rem] 2xl:min-h-[5.625rem] 2xl:mt-[5rem] 2xl:pl-6">
							<h2 className="text-[2rem] text-white font-poppins 2xl:w-full 2xl:min-h-[3.4375rem] 2xl:mt-[3rem] 2xl:font-lato font-semibold text-[2.5rem]">
								Your
								<span className="italic text-spanYellow font-lato mr-2 ml-2">
									Fencing
								</span>
								services
							</h2>
							<p className="text-sm text-white 2xl:w-full 2xl:min-h-[1.1875rem] leading-[100%] text-[#CED1D2]">
								Here you can find the different services we offer
							</p>
						</div>

						<div className="w-full">
							<div className="2xl:w-[89.5rem] 2xl:grid 2xl:grid-cols-3 gap-4 2xl:justify-between">
								{services.map((service) => (
									<div
										key={service.id}
										className="flex flex-col justify-center items-center min-h-[40rem] 2xl:w-[28.5rem] 2xl:min-h-[31.6rem] 2xl:ml-4"
									>
										<div className="w-[22rem] min-h-[15rem] 2xl:w-[28.5rem] 2xl:min-h-[15rem]">
											<img
												className="w-full min-h-[15rem] 2xl:object-cover"
												src={service?.image}
												alt={service?.title || "fence service"}
											/>
										</div>

										<div className="w-full min-h-[20rem] pt-6 pl-5 2xl:w-[28.5rem] 2xl:min-h-[14.6875rem]">
											<h2 className="text-[1.3rem] font-lato font-medium text-white">
												{service?.title}
											</h2>
											<p className="leading-7 w-[22rem] mt-3 text-white 2xl:min-h-[10.6875rem] 2xl:w-[29rem] 2xl:min-h-[8.75rem] text-[#ABB4B7] font-lato leading-[1.75rem] font-medium">
												{service?.content}
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
								))}
							</div>
						</div>
					</div>

					{/* Variety */}
					{/* Select styles */}
					<div className="text-white w-full 2xl:w-[89.5rem] 2xl:min-h-[31.9rem]">
						<div className="w-[24.375rem] w-full min-h-full">
							<div className="mb-[3rem] mt-[4rem] 2xl:w-[37rem] 2xl:min-h-[3.4375rem]">
								<h2 className="text-center font-lato text-[1.3rem] w-full min-h-full font-semibold 2xl:text-left font-semibold 2xl:text-[2.5rem] 2xl:font-lato 2xl:whitespace-nowrap 2xl:pl-6">
									Select from a
									<span className="text-spanYellow pl-2 font-sourceSerif italic">
										variety of fence styles
									</span>
								</h2>
							</div>

							{/* Slider Container */}
							<div className="w-full overflow-hidden 2xl:w-[89.5rem] 2xl:min-h-[25rem]">
								<Slider {...settings} className="w-full min-h-full">
									{varieties.map((variety, index) => (
										<div
											className="2xl:w-[89.5rem] 2xl:min-h-[25rem]"
											key={variety?.id || index}
											>
											<div className="relative w-full min-h-[22rem] mb-4 flex flex-col justify-center items-center 2xl:min-h-full">
												<div className="2xl:w-[21.4375rem] 2xl:min-h-[25rem]">
													<img
														className="min-h-[22rem] object-cover w-full 2xl:min-h-[25rem] rounded-[0.75rem]
														"
														src={variety?.image}
														alt={variety?.title || "Fence Style"}
													/>
												</div>

												<div className="absolute right-0 top-[13rem] 2xl:mx-auto 2xl:w-[19.5rem] 2xl:min-h-[8.6875rem] left-3 2xl:w-[19.5rem] 2xl:min-h-[8.6rem]">
													<div className=" 2xl:w-full 2xl:min-h-[5.5rem]">
														<h3 className="text-[1.2rem] 2xl:w-[9.5rem] 2xl:min-h-[1.5rem] 2xl:font-semibold">
															{variety?.title}
														</h3>
														<p className="text-[0.7rem] w-[10rem] 2xl:w-[19.5rem] 2xl:min-h-[3.5rem] 2xl:text-[1rem] font-medium font-lato 2xl:leading-[1.75rem] text-[#DEE6E9]">
															{variety?.content}
														</p>
													</div>
													<AnchorLink
														learnMore="w-[7rem] flex justify-center mt-2 font-semibold"
														learnMorePath={() => navigate("/")}
													>
														<p>Learn more</p>
													</AnchorLink>
												</div>
											</div>
										</div>
									))}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
