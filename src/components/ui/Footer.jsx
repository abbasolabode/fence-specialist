import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function  Footer() {
	return (
		<div className="min-w-full min-h-[40rem] mt-[8rem] bg-black md:w-full md:px-8 lg:px-12 2xl:w-[94.5rem] 2xl:flex 2xl:flex-col 2xl:items-center 2xl:min-h-[43.875rem]">
			{/* Top section */}
			<div className="min-w-full px-4 mx-auto md:max-w-none md:w-full md:px-0 lg:w-[71.625rem] lg:mx-auto 2xl:w-[71.625rem] 2xl:min-h-[18.9375rem] 2xl:flex 2xl:items-center 2xl:gap-[7.5rem] 2xl:mt-[4rem]">
				{/* First container */}
				<div className="w-full md:flex md:items-start md:gap-8 lg:gap-12 xl:gap-16 2xl:w-[25rem] 2xl:min-h-[18.9375rem] 2xl:flex-col 2xl:justify-between">
					<span className="hidden 2xl:block">
						<FaRegCalendarAlt className="w-[1.5rem] min-h-[1.5rem] text-utiliBlue" />
					</span>

					<div className="w-full  pt-5 md:max-w-[24.357rem] 2xl:min-h-[19rem] 2xl:flex 2xl:flex-col 2xl:justify-between">
						<p className="w-full text-white pt-8 mx-auto font-lato px-2 py-2 leading-8 md:pt-0 md:text-left 2xl:min-h-[10.5rem] 2xl:w-[25rem]">
							Rachuna Fence LLC, based in Bloomington, MN, is a family-owned
							fencing company specializing in the installations, repairs, and
							custom fabrications. With over a decade of experience, we are
							dedicated to delivering exceptional service for residential and
							commercial properties.
						</p>
						<p className="text-center font-poppins text-white md:text-left 2xl:flex">
							Built by {""}
							<span className="italic text-utiliBlue 2xl:pl-2">Pro Web Fencing</span>
						</p>
					</div>
				</div>

				{/* Second Container */}
				<div className="w-full min-h-[20rem] mt-8 md:mt-0 md:flex md:flex-col md:justify-between 2xl:w-[39.125rem] 2xl:min-h-[18.9rem] 2xl:gap-[3.5rem]">
					<nav className="w-full min-h-[20rem] mx-auto font-poppins px-2 py-2 md:min-h-auto 2xl:w-full 2xl:min-h-full 2xl:flex 2xl:flex-col">
						<ul className="flex min-h-[20rem] flex-wrap justify-center gap-5 md:min-h-auto md:justify-start md:gap-6 lg:gap-8 2xl:w-[39.125rem] 2xl:mt-[4rem] 2xl:min-h-[3.875rem] 2xl:flex-row 2xl:justify-center 2xl:gap-[1.5rem]">
							<li className="font-poppins text-[1.1rem] text-zinc-500 text-white">
								<Link to="/">Home</Link>
							</li>
							<li className="font-poppins text-[1.1rem] text-zinc-500">
								<Link to="/about">About Us</Link>
							</li>
							<li className="font-poppins text-[1.1rem] text-zinc-500">
								<Link to="/service">Services</Link>
							</li>
							<li className="font-poppins text-[1.1rem] text-zinc-500">
								<Link to="/gallery">Gallery</Link>
							</li>
							<li className="font-poppins text-[1.1rem] text-zinc-500">
								<Link to="/contact">Contact</Link>
							</li>
							<li className="font-poppins text-[1.1rem] text-zinc-500">
								<Link to="/privacy">Privacy Policy</Link>
							</li>
						</ul>
					</nav>

					<div className="flex flex-col text-center justify-center min-h-[15rem] gap-4 md:text-left md:flex-row md:flex-wrap md:justify-between md:gap-6 lg:gap-8 2xl:w-[39.125rem] 2xl:min-h-[3.875rem]">
						<div className="w-full flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:w-full 2xl:gap-[3.5rem]">
							<div className="2xl:flex 2xl:flex-col 2xl:gap-3">
								<h4 className="font-poppins font-semibold text-white md:text-left">Get in touch</h4>
								<span className="flex flex-col md:flex-row md:gap-4 text-white">
									<span className="font-poppins">Rachunafence@gmail</span>
									<span className="font-poppins">612-730-7260</span>
								</span>
							</div>

							<div className="2xl:flex 2xl:flex-col 2xl:gap-3">
								<h4 className="font-poppins font-semibold text-white">
									Open Hours
								</h4>
								<p className="font-poppins text-white">
									Mon - Fri: 7am - 5pm
								</p>
							</div>
						</div>

						<div className="2xl:flex 2xl:flex-col 2xl:gap-3 2xl:w-[8.875rem] 2xl:min-h-[4.1875rem]">
							<h4 className="font-poppins font-semibold mt-2 text-white 2xl:w-full">
								Connect with us
							</h4>
							<span className="flex justify-center md:justify-start items-center mt-4 space-x-4">
								<img src="/images/icon2.png" alt="google icon" className="h-8 w-8" />
								<img src="/images/icon3.png" alt="facebook icon" className="h-8 w-8" />
								<img src="/images/icon4.png" alt="icon" className="h-8 w-8" />
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom section */}
			<div className="flex justify-center min-h-[4rem] mt-5 w-full 2xl:w-[94.5rem] 2xl:min-h-[14.125rem] 2xl:items-center">
				<h2 className="font-lato 2xl:font-bold 2xl:text-[11.75rem] 2xl:leading-[100%] italic text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-[hsla(200,2%,20%,1)] to-[hsla(204,79%,5%,1)] bg-clip-text text-transparent">
					Rachuna Fence LLC
				</h2>
			</div>
		</div>
	);
}