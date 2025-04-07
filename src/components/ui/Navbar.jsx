import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { openAndCloseMenu } from "../hooks/openAndCloseMenu";
import AnchorLink from "./AnchorLink";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	//custom hook
	const { handleIsOpen, isOpenState } = openAndCloseMenu(isOpen, setIsOpen);

	return (
		<header className="w-[24.375rem]  flex justify-center fixed top-0 left-0 right-0 bg-black z-50 2xl:w-[94.5em] 2xl:justify-start 2xl:5rem">
			<div className="w-[22.5rem] flex justify-between items-center 2xl:w-[7rem] ">
				{/* The Logo is set to hidden when the mobile menu is shown and block when the mobile menu is closed */}
				<div
					className={`w-[3.68rem] min-h-[2.7rem] ${
						isOpenState ? "hidden" : "block"
					} `}
				>
					<small className="text-spanYellow py-0.5 whitespace-nowrap text-[0.5rem] font-light flex flex-col 2xl:text-[1.1rem]">
						Premier Fence
					</small>
					<Link to="/">
						<Logo />
					</Link>
				</div>
				{/* The hamburger menu is set to hidden when the mobile menu is shown and block when the mobile menu is closed */}
				<button
					className={`w-[4.6rem] min-h-[2.45rem] text-white 2xl:hidden ${
						isOpenState ? "hidden" : "block"
					}`}
					onClick={handleIsOpen}
				>
					<AiOutlineMenuFold className="w-[4.6rem] min-h-[2.45rem] cursor-pointer" />
				</button>
			</div>

			{isOpenState && (
				<nav className="min-h-dvh w-[24.375rem] z-50 bg-white 2xl:hidden">
					<div
						className="flex justify-end text-[2rem] pr-[0.5rem] pt-[0.5rem] font-light"
						onClick={() => handleIsOpen()}
					>
						<IoMdClose />
					</div>
					<ul className="min-h-[20rem] w-[24.375rem] z-50 flex flex-col items-center justify-center">
						<li className="w-full flex justify-center min-h-[2rem] font-lato text-[1.3rem] font-semibold px-[1.25rem] py-[1rem] hover:underline">
							<Link to="/">Home</Link>
						</li>
						<li className="w-full flex justify-center min-h-[2rem] font-lato text-[1.3rem] font-semibold  px-[1.25rem] py-[1rem] hover:underline">
							<Link to="/about">About</Link>
						</li>
						<li className="w-full flex justify-center min-h-[2rem] font-lato text-[1.3rem] font-semibold  px-[1.25rem] py-[1rem] hover:underline">
							<Link to="/services">Services</Link>
						</li>
						<li className="w-full flex justify-center min-h-[2rem] font-lato text-[1.3rem] font-semibold  px-[1.25rem] py-[1rem] hover:underline">
							<Link to="/serviveArea">Service Area</Link>
						</li>
						<li className="w-full flex justify-center min-h-[2rem] font-lato text-[1.3rem] font-semibold  px-[1.25rem] py-[1rem] hover:underline">
							<Link to="/gallery">Gallery</Link>
						</li>
						<li className="w-full flex justify-center min-h-[2rem] font-lato text-[1.3rem] font-semibold  px-[1.25rem] py-[1rem] hover:underline">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>

					<div className="flex items-center flex-col ">
						<AnchorLink>
							<span className="flex items-center justify-center gap-2 w-[8rem]">
								<IoCallOutline />
								<a href="tel:+1234567890">612-730-7260</a>
							</span>
						</AnchorLink>

						<AnchorLink blackButton="flex justify-center bg-dimBlack">
							<p>Get a Free Estimate</p>
						</AnchorLink>
					</div>
				</nav>
			)}

			{/* Desktop screen */}
			<div className="hidden 2xl:flex justify-between 2xl:items-center 2xl:w-[85.875rem] ">
				<div className="2xl:flex gap-8 2xl:items-center 2xl:w-[33.875rem]">
					<Link
						className=" flex justify-center min-h-[2rem] 2xl:ml-3 text-white font-lato text-[1.3rem] font-semibold  py-[1rem] hover:underline"
						to="/"
					>
						Home
					</Link>
					<Link
						className=" flex justify-center min-h-[2rem] text-white font-lato text-[1.3rem] font-semibold  py-[1rem] hover:underline"
						to="/about"
					>
						About
					</Link>

					<Link
						className="flex justify-center min-h-[2rem] text-white font-lato text-[1.3rem] font-semibold  py-[1rem] hover:underline"
						to="/services"
					>
						services
					</Link>

					<Link
						className=" flex justify-center min-h-[2rem] whitespace-nowrap text-white font-lato text-[1.3rem] font-semibold  py-[1rem] hover:underline"
						to="/servicesArea"
					>
						service Area
					</Link>

					<Link
						className=" flex justify-center min-h-[2rem] text-white font-lato text-[1.3rem] font-semibold  py-[1rem] hover:underline"
						to="/login"
					>
						login
					</Link>

					<Link
						className=" flex justify-center min-h-[2rem] text-white font-lato text-[1.3rem] font-semibold  py-[1rem] hover:underline"
						to="/gallery"
					>
						Gallery
					</Link>
				</div>
				<div className="flex 2xl:justify-end 2xl:items-center gap-3  2xl:w-[21.25rem] ">
					<AnchorLink>
						<span className="flex items-center justify-center gap-2 w-[8rem]">
							<IoCallOutline />
							<a href="tel:+1234567890">612-730-7260</a>
						</span>
					</AnchorLink>

					<AnchorLink blackButton="flex justify-center bg-dimBlack 2xl:bg-white 2xl:text-black">
						<p>Get a Free Estimate</p>
					</AnchorLink>
				</div>
			</div>
		</header>
	);
}
