import { IoCallOutline } from "react-icons/io5";
import AnchorLink from "./AnchorLink";
import ContactForm from "../Forms/ContactForm";
//import { useState } from "react";

//Background image styling
const backgroundStyling = {
	backgroundImage: "url('./images/bgImage.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
};
/* isOpen && "blur-sm drop-shadow-md " */

export default function HeroContents() {
	/* const [isOpen, setIsOpen] = useState(false)

    function handleIsOpen(){
		setIsOpen((open)=>  !open);	
	} */

	return (
		<>
			<div
				className={`w-[24.375rem] min-h-[50.7rem] 2xl:w-[94.5rem] 2xl:min-h-[60rem] 2xl:relative`}
				style={backgroundStyling}
			>
				<div className="w-[24.375rem] min-h-[50.7rem] 2xl:w-[94.5rem] 2xl:flex 2xl:justify-between 2xl:items-center">
					<div className="flex justify-start items-center flex-col ">
						<div className="2xl:flex 2xl:justify-start 2xl:w-[40rem]">
							<p className=" mb-2 text-white bg-dimGray px-3 py-2 rounded-lg text-sm mt-[10rem] 2xl:w-[15rem] 2xl:font-medium 2xl:min-h-[1.0625rem] 2xl:text-left 2xl:whitespace-nowrap ">
								Fence Company in Bloomington MN
							</p>
						</div>
						<h1 className="font-lato text-[2.9rem] text-center font-semibold 2xl:w-[45.5rem] 2xl:min-h-[16.1875rem] 2xl:text-[6rem] 2xl:font-bold text-white 2xl:font-raleway 2xl:text-left">
							Your Premier Fence
							<span className="text-spanYellow italic font-medium ml-2 2xl:font-medium font-raleway">
								Specialists
							</span>
						</h1>
						<div className="2xl:flex 2xl:items-start 2xl:min-h-[15.5rem] 2xl:flex-col 2xl:w-[43rem]">
							<p className="text-center mt-4 font-lato w-[22.5rem] text-white 2xl:w-[32.25rem] 2xl:min-h-[10rem] 2xl:leading-[2.5rem] 2xl:font-normal 2xl:text-left">
								Rachuna Fence LLC is a locally owned fencing company based in
								Bloomington, MN, with over 10 years of experience, we specialize
								in building high-quality fences that enhance the beauty,
								security and, privacy of both residential and commercial
								properties.
							</p>
							<div className="flex justify-center">
								<AnchorLink homeUi="mt-10">
									<span className="flex items-center justify-center gap-2 w-[8rem]">
										<IoCallOutline />
										<a href="tel:+1234567890">612-730-7260</a>
									</span>
								</AnchorLink>
							</div>
						</div>
					</div>

					{/* Right container for large screen*/}
					<div className="hidden 2xl:w-[43rem] 2xl:min-h-[45.25rem] 2xl:flex 2xl:flex-col 2xl:justify-between overflow-hidden">
						<div className="2xl:flex 2xl:items-center 2xl:gap-1  2xl:w-[45rem] overflow-hidden">
							<div className="flex items-center 2xl:w-[15.5rem] 2xl:gap-2 2xl:min-h-[1.1875rem]">
								<span>
									<img src="./images/icon1.png" alt="mark" />
								</span>
								<p className="2xl:text-white 2xl:whitespace-nowrap">
									Over 10 Years of Experience
								</p>
							</div>
							<div className="flex items-center gap-3 2xl:w-[10.9375rem] 2xl:text-white 2xl:whitespace-nowrap 2xl:min-h-[1.1875rem]">
								<span>
									<img src="./images/icon1.png" alt="mark" />
								</span>
								<p>Over 55 5* Reviews</p>
							</div>
							<div className="flex items-center gap-3  2xl:whitespace-nowrap 2xl:text-white 2xl:min-h-[12.5625rem]">
								<span>
									<img src="./images/icon1.png" alt="mark" />
								</span>
								<p>Family Owned Business</p>
							</div>
						</div>

						<div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:gap-4 ">
							<div className="2xl:flex 2xl:items-center 2xl:min-h-[5.75rem] 2xl:gap-5 2xl:flex-col 2xl:w-[15.3125rem] 2xl:">
								<span className="flex item gap-2 2xl:items-center">
									<img src="./images/Star.png" alt="star icon" />
									<p className="text-white 2xl:font-lato">
										(5.0) ratings from 48 reviews
									</p>
								</span>

								<div className="2xl:flex 2xl:justify-start 2xl:text-left 2xl:w-[13.875rem] 2xl:min-h-[3rem]">
									<span>
										<img src="./images/icon2.png" alt="Google icon" />
									</span>
									<span>
										<img src="./images/icon3.png" alt="Facebook icon" />
									</span>
									<span>
										<img src="./images/icon4.png" alt="icon" />
									</span>
								</div>
							</div>

							<div className="2xl:flex 2xl:justify-between 2xl:items-center 2xl:gap-[1.5rem] 2xl:w-[38.5rem] 2xl:min-h-[13.4375rem] 2xl:rounded-[0.5rem] 2xl:p-[1rem] 2xl:bg-utiliBlue">
								<span className="2xl:w-[5rem] 2xl:min-h-[11.4375rem] 2xl:self-start">
									<img
										src="./images/vectorIcon.png"
										alt="person's image"
										className="2xl:w-[5rem] 2xl:min-h-[5.4375rem]"
									/>
								</span>
								<span className="2xl:w-[30rem] 2xl:min-h-[8.75rem] 2xl:font-medium 2xl:leading-[1.75rem] 2xl:font-lato 2xl:text-white">
									<p>
										&quot; As a lifelong resident of Bloomington and a small
										business owner, I started my own fence company to support
										our growing family and it has been a very rewarding
										experience for me. We treat every project as if it was our
										own, ensuring that each fence not only meets, but exceeds
										our customers’ expectations. &quot;
									</p>
									<p className="2xl:w-[11.5625rem] 2xl:min-h-[1.1875rem] 2xl:font-medium leading-[1.2rem] 2xl:font-lato 2xl:pt-2">Nicholas Rachuna, Owner</p>
								</span>
							</div>
						</div>
					</div>

					<AnchorLink overlayChatIcon="rounded-full w-[2rem] 2xl:hidden bg-white mt-[10rem]">
						<span>
							<img src="/images/overlay chat.png" alt="icon" />
						</span>
					</AnchorLink>
				</div>
			</div>

			<div className="2xl:absolute 2xl:top-[44rem] shadow-2xl z-50 2xl:w-[94.5rem] 2xl:hidden">
				<ContactForm />
			</div>
		</>
	);
}
