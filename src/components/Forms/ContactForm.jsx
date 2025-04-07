import AnchorLink from "../ui/AnchorLink";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

export default function ContactForm() {
	return (
		<div className="w-[24.375rem] min-h-[35rem] mt-12  ">
			<div className="text-[2rem] 2xl:w-[89.5rem] 2xl:min-h-[20.5rem] 2xl:rounded-[1.5rem] 2xl:pl-[2.5rem] 2xl:pr-[2.5rem]">
				<span className="flex justify-end mr-3">
					<LiaTimesSolid className="font-light text-dimGray 2xl:text-white" />
				</span>

				<h2 className="text-center mb-7 pt-2 2xl:w-[84.5rem] 2xl:font-lato 2xl:font-semibold 2xl:text-[2.5rem] 2xl:leading-[3rem] 2xl:min-h-[3.4375rem]">
					Get Your
					<span className="italic font-lato text-spanYellow ml-2 mr-2">
						free quote
					</span>
					now
				</h2>
				<form className="2xl:w-[89.5rem] 2xl:min-h-[20.5rem] 2xl:pl-[2.5rem] 2xl:pr-[2.5rem] 2xl:pb-[2rem] 2xl:pt-[2rem] 2xl:rounded-[1.5rem] 2xl:bg-black">
					<div className="w-[24.375rem] min-h-[40rem]  flex flex-col items-center justify-center 2xl:flex-row 2xl:w-[84.5rem] 2xl:min-h-[9.75rem] 2xl:gap-[1.5rem] ">
						<span className="flex items-center justify-center 2xl:min-h-[4.3rem] 2xl:w-[13.25rem] gap-2 mb-4 2xl:flex-col">
							<label
								htmlFor="fname"
								className="text-[1.5rem] font-lato hidden  2xl:mr-[10rem] 2xl:block 2xl:min-h-[1rem] 2xl:text-[0.9rem] 2xl:leading-[1.05rem] 2xl:font-medium 2xl:text-zinc-400"
							>
								Name:
							</label>
							<input
								type="text"
								id="fname"
								placeholder="Enter your full name"
								className="w-[23rem] min-h-[2.5rem] 2xl:min-h-[2.7rem] 2xl:placeholder:w-[7.875rem]  2xl:text-white 2xl:bg-black 2xl:outline 2xl:outline-8 2xl:placeholder:min-h-[1rem] 2xl:placeholder:text-[0.875rem] 2xl:placeholder:text-zinc-400 2xl:placeholder:font-normal 2xl:w-[13.25rem] px-3 py-3 rounded-lg placeholder:text-center text-[1.3rem] placeholder: outline-none border border-dimGray placeholder:font-lato placeholder:font-light"
							/>
						</span>

						<span className="flex items-center gap-2 justify-center 2xl:flex-col 2xl:min-h-[4.3rem] mb-4 2xl:w-[13.25rem]">
							<label
								htmlFor="email"
								className="text-[1.5rem] font-lato hidden 2xl:block 2xl:mr-[10rem] 2xl:min-h-[1rem] 2xl:text-[0.9rem] 2xl:leading-[1.05rem] 2xl:font-medium 2xl:text-zinc-400"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter your email"
								className="w-[23rem] min-h-[2.3rem] 2xl:min-h-[2.7rem] 2xl:w-[13.25rem] px-3 py-2  2xl:text-white 2xl:bg-black 2xl:outline 2xl:outline-8 rounded-lg placeholder:text-center placeholder:text-[1.3rem] 2xl:placeholder:text-zinc-400 outline-none border border-dimGray placeholder:font-lato placeholder:font-light 2xl:placeholder:w-[7.875rem] 2xl:placeholder:min-h-[1rem] 2xl:placeholder:text-[0.875rem] 2xl:placeholder:font-normal"
							/>
						</span>

						<span className="flex items-center gap-2 mb-4  2xl:min-h-[4.3rem] 2xl:w-[13.25rem] 2xl:flex-col">
							<label
								htmlFor="phone"
								className="text-[1.3rem] font-lato hidden 2xl:block 2xl:mr-[5rem] 2xl:whitespace-nowrap 2xl:min-h-[1rem]  2xl:text-[0.9rem] 2xl:leading-[1.05rem] 2xl:font-medium 2xl:text-zinc-400"
							>
								Telephone number
							</label>
							<input
								type="tel"
								id="phone"
								placeholder="Enter your phone number"
								className="w-[23rem] min-h-[3rem] px-3 py-2 2xl:min-h-[2.7rem]  2xl:text-white 2xl:bg-black 2xl:outline 2xl:outline-8 2xl:w-[13.25rem] rounded-lg placeholder:text-[1.3rem] placeholder:text-center 2xl:placeholder:text-zinc-400 outline-none border border-dimGray placeholder:font-lato placeholder:font-light 2xl:placeholder:w-[7.875rem] 2xl:placeholder:min-h-[1rem] 2xl:placeholder:text-[0.875rem] 2xl:placeholder:font-normal"
							/>
						</span>

						<span className="flex items-center gap-2 mb-4  2xl:min-h-[4.3rem] 2xl:w-[13.25rem]  2xl:flex-col">
							<label
								htmlFor="service"
								className="text-[1.5rem] font-lato hidden 2xl:block  2xl:mr-[5rem]  2xl:whitespace-nowrap 2xl:min-h-[1rem] 2xl:text-[0.9rem] 2xl:leading-[1.05rem] 2xl:font-medium 2xl:text-zinc-400"
							>
								Service interested in
							</label>
							<input
								type="text"
								id="service"
								placeholder="Enter the service you're interested in"
								className="w-[23rem] min-h-[3rem] 2xl:min-h-[2.7rem] 2xl:w-[13.25rem]  2xl:text-white 2xl:bg-black 2xl:outline 2xl:outline-8 px-3 py-2 rounded-lg placeholder:text-[1.3rem] placeholder:text-center 2xl:placeholder:text-zinc-400  outline-none border border-dimGray placeholder:font-lato placeholder:font-light 2xl:placeholder:w-[7.875rem] 2xl:placeholder:min-h-[1rem] 2xl:placeholder:text-[0.875rem] 2xl:placeholder:font-normal"
							/>
						</span>

						<span className="flex items-center gap-2 mb-6  2xl:min-h-[2.7rem] 2xl:w-[13.25rem]  2xl:flex-col">
							<label
								htmlFor="zip"
								className="text-[1.5rem]  font-lato hidden 2xl:block 2xl:mr-[9rem]  2xl:min-h-[1rem] 2xl:text-[0.9rem] 2xl:leading-[1.05rem] 2xl:font-medium 2xl:text-zinc-400"
							>
								Zip code
							</label>
							<input
								type="text"
								id="zip"
								placeholder="Enter your zip code"
								className="w-[23rem] 2xl:min-h-[4.3rem] 2xl:w-[13.25rem] min-h-[3rem] 2xl:text-white 2xl:bg-black 2xl:outline 2xl:outline-8 px-3 py-2 rounded-lg placeholder:text-center placeholder:text-[1.3rem] outline-none border 2xl:placeholder:text-zinc-400 border-dimGray placeholder:font-lato placeholder:font-light 2xl:placeholder:w-[7.875rem] 2xl:placeholder:min-h-[1rem] 2xl:placeholder:text-[0.875rem] 2xl:placeholder:font-normal"
							/>
						</span>

						<span className="flex items-center gap-2 min-h-[7rem] 2xl:w-[13.25rem] 2xl:flex-col">
							<label
								htmlFor="message"
								className="text-[1rem] font-lato hidden 2xl:mr-[4rem] 2xl:whitespace-nowrap 2xl:block 2xl:min-h-[1rem] 2xl:text-[0.9rem] 2xl:leading-[1.05rem] 2xl:font-medium 2xl:text-zinc-400"
							>
								How can we help you?
							</label>
							<textarea
								name="message"
								id="message"
								minLength="4"
								maxLength="10"
								placeholder="How can we help you?"
								className="w-[23rem] 2xl:min-h-[2.7rem] 2xl:w-[13.25rem] 2xl:text-white 2xl:bg-black 2xl:outline 2xl:outline-8 min-h-[10rem] px-3 py-2 rounded-lg placeholder:text-[1.3rem] 2xl:placeholder:text-zinc-400 outline-none border border-dimGray placeholder:font-lato placeholder:font-light 2xl:placeholder:w-[9.875rem] 2xl:placeholder:min-h-[1rem] 2xl:placeholder:text-[0.875rem] 2xl:placeholder:font-normal"
							></textarea>
						</span>
					</div>
					<div className="gap-2 mt-[2.5rem] mx-auto flex justify-center">
						<AnchorLink formBtnStyled="flex justify-center bg-dimGray">
							<span className="flex items-center gap-1">
								<p className="font-semibold">Get a Free Quote</p>
								<MdKeyboardArrowRight className="text-[1.2rem]" />
							</span>
						</AnchorLink>
						<AnchorLink cancelBtn="flex justify-center bg-dimGray">
							<p className="font-semibold">Cancel</p>
						</AnchorLink>
					</div>
				</form>
			</div>
		</div>
	);
}
