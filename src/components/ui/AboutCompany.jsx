import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import AnchorLink from "./AnchorLink";

export default function AboutCompany() {
	const navigate = useNavigate();

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
		<div className="w-[24.375rem] min-h-[35rem] 2xl:w-[94.5rem]">
			<div className=" min-h-[20rem] w-full 2xl:flex 2xl:justify-around  2xl:w-[89.5rem] 2xl:min-h-[35rem]">
				{/* Left container */}
				<div className="w-[24.375rem] min-h-[30rem] pt-10 flex flex-col items-center 2xl:w-[32rem]">
					<div className="w-[24.375rem] flex flex-col justify-center items-center 2xl:w-full 2xl:min-h-[35rem]">
						<h2 className="w-[19.875rem] text-center font-sourceSerif text-[1.8rem] text-dimGray 2xl:w-[32rem] 2xl:min-h-[6.1875rem] 2xl:text-left 2xl:text-[2.5rem] 2xl:font-lato 2xl:font-semibold 2xl:leading-100">
							Your
							<span className="italic text-utiliBlue pr-2 pl-2">
								Trusted Fencing Partner
							</span>
							in Bloomington
						</h2>
						<p className="w-[22.4rem] pt-8 text-center text-dimGray font-sm leading-7 2xl:w-full 2xl:min-h-[14rem] 2xl:text-left 2xl:font-medium 2xl:leading-6 2xl:tracking-0.5 2xl:min-h-[21.6rem]">
							At Rachuna Fence LLC, a family-owned and operated business in
							Bloomington, MN, we specialize in crafting high-quality wood,
							vinyl, and chain link fences. Our customer-centric service ensures
							that each fence we install not only meets the highest standards of
							durability and aesthetics but also secures your property. We take
							pride in our attention to detail and personalized approach,
							striving to exceed our customers' expectations with every project.
						</p>
					</div>

					{/* Link */}
					<div className="mt-8 2xl:text-left 2xl:flex 2xl:w-full  ">
						<AnchorLink
							linkToAbout={() => navigate("/about")}
							aboutCompany="flex justify-center py-3.5 hover:text-blue-400 text-[1.1rem]"
						>
							<p>More about us</p>
						</AnchorLink>
					</div>
				</div>

				{/* Right container */}
				<div className="w-[24.375rem] min-h-[24.1875rem] mt-[5rem] hidden 2xl:block 2xl:w-3/5 2xl:min-h-full w-auto">
					<div className="w-full min-h-[15rem] flex items-center gap-2 justify-center 2xl:min-h-full">
						{/* <Slider {...settings}> */}
						<div className="w-[20.375rem] 2xl:min-h-[35rem] 2xl:w-[28rem] 2xl:min-h-[35rem]">
							<img
								src="/images/man with fence.png"
								alt="image of a man and fence"
								className="min-h-[13rem] 2xl:min-h-full 2xl:w-full 2xl:min-h-full"
							/>
						</div>
						<div className="2xl:flex 2xl:flex-col 2xl:gap-[1rem] 2xl:w-[23.5rem] 2xl:min-h-[35rem]">
							<div className="w-[20.375rem]">
							<img
								src="/images/iron fence metal.png"
								alt="image of an iron metal fence"
								className="min-h-[13rem] 2xl:w-full 2xl:min-h-[17rem]"
							/>
						</div>
						<div className="w-[20.375rem]">
							<img
								src="/images/iron fence metal.png"
								alt="image of an iron metal fence"
								className="min-h-[13rem] 2xl:w-full 2xl:min-h-[17rem]"
							/>
						</div>
						</div>
						{/* </Slider> */}
					</div>
				</div>
			</div>
		</div>
	);
}
