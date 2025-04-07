import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnchorLink from "./AnchorLink";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function SliderImages() {

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
		<div className="w-[24.375rem] min-h-[30rem] pt-[2.5rem]">
			<div className="min-h-full text-center flex flex-col justify-center items-center">
				<div className="min-h-[30rem] w-[23rem]">
					<div>
						<h3 className="font-lato text-[1.5rem] w-[22rem]">
							Take a look at our
							<span className="text-lato pl-1 text-utiliBlue">
								past fencing work
							</span>
						</h3>
					</div>

					{/*button for large screens */}
					<div className="hidden">
						<AnchorLink gallery="flex items-center justify-center w-[8rem]">
							See gallery
						</AnchorLink>
					</div>

					<div>
						<div className="min-h-[15rem]  w-[23rem] flex items-center relative ">
						{/* 	<Slider {...settings}> */}
								<span className="w-[2rem] flex justify-center z-30  items-center absolute left-[-0.5rem] py-2 rounded-full px-2 bg-spanYellow">
									<MdKeyboardArrowLeft />
								</span>

								<div className="flex items-center gap-2">
									<span className="">
										<img
											className="w-[20rem] min-h-[10rem] object-cover rounded-md "
											src="/images/wooden fence2.png"
											alt=""
										/>
									</span>

									<span className="">
										<img
											className="w-[20rem] min-h-[10rem] object-cover rounded-md "
											src="/images/wire fence.png"
											alt=""
										/>
									</span>

									<span>
										<img
											className="w-[20rem] min-h-[10rem] object-cover rounded-md "
											src="/images/white wooden fence.png"
											alt=""
										/>
									</span>
									<span>
										<img
											className="w-[20rem] min-h-[10rem] rounded-md object-cover"
											src="/images/wooden fence.png"
											alt=""
										/>
									</span>
								</div>

								<span className="w-[2rem] flex justify-center z-30  items-center absolute right-[-0.5rem] py-2 rounded-full px-2 bg-spanYellow">
									<MdKeyboardArrowRight />
								</span>
							{/* </Slider> */}
						</div>
					</div>
                    
					{/* I stopped here */}
					<div className="flex justify-center">
						<AnchorLink gallery="flex items-center min-h-[2rem] w-[6rem] py-1 px-1 text-[0.8rem] justify-center w-[8rem]" onClickGallery={()=> navigate("/")} >
							See gallery
						</AnchorLink>
					</div>
				</div>
			</div>
		</div>
	);
}
