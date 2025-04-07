import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer(){
   return (
			<div className="w-[24.375rem] min-h-[60rem] mt-[8rem] bg-black">
				<div className="">
					<div>
						{/* First container */}
						<span className="hidden">
							<FaRegCalendarAlt />
						</span>

						<div className="w-[24.357rem]">
							<p className="w-[23rem] text-white pt-8 mx-auto font-poppins px-2 py-2 leading-8">
								Rachuna Fence LLC, based in Bloomington, MN, is a family-owned
								fencing company specializing in the installations, repairs, and
								custom fabrications. With over a decade of experience, we are
								dedicated to delivering exceptional service for residential and
								commercial properties.
							</p>
							<p className="text-center font-poppins text-white">
								Built by{" "}
								<span className="italic text-utiliBlue">Pro Web Fencing</span>
							</p>
						</div>
					</div>

					{/* Second Container */}
					<div className="w-[24.375rem] min-h-[20rem]">
						<nav className="w-[23rem] min-h-[20rem] text-[] mx-auto font-poppins px-2 py-2">
							<ul className="flex min-h-[20rem] items-center flex-col justify-center gap-5">
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
						<div className="flex flex-col text-center justify-center min-h-[15rem] gap-4">
							<div>
								<h4 className="font-poppins font-semibold">Get in touch</h4>
								<span className="flex flex-col text-white">
									<span className="font-poppins">Rachunafence@gmail</span>
									<span className="font-poppins">612-730-7260</span>
								</span>
							</div>

							<div>
								<div>
									<h4 className="font-poppins font-semibold text-white">
										Open Hours
									</h4>
									<p className="font-poppins text-white">
										Mon - Fri: 7am - 5pm
									</p>
								</div>
							</div>

							<div>
								<h4 className="font-poppins font-semibold mt-2 text-white">
									Connect with us
								</h4>
								<span className="flex justify-center items-center mt-4">
									<img src="/images/icon2.png" alt="google icon" />
									<img src="/images/icon3.png" alt="facebook icon" />
									<img src="/images/icon4.png" alt="icon" />
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center min-h-[4rem] mt-5">
					<h2 className="font-lato text-[2.5rem] font-bold text-spanYellow">
						Rachuna Fence LLC
					</h2>
				</div>
			</div>
		);
}