export default function ContactFormWhy() {
	return (
		<form className="hidden 2xl:block w-[94.5rem] mt-[4rem] min-h-[36.4375rem] bg-[#0A0C0D]">
			<div className="w-[89.5rem] min-h-[37.1rem] flex flex-col justify-center gap-[4rem] mx-auto">
				<div className="w-[25.6875rem]  min-h-[5.625rem] gap-[1rem] flex flex-col items-center justify-center ">
					<h2 className="text-[2.5rem] font-lato font-semibold text-[#DDECF5] w-full min-h-[3.4375rem] whitespace-nowrap">
						Get your{" "}
						<span className="text-sourceSerif italic text-spanYellow">
							free quote
						</span>{" "}
						now
					</h2>
					<p className="w-[25.1rem] text-left min-h-[1.1875rem] font-lato text-[1rem] font-medium text-[#ABB4B7]">
						Fill out the form to start your fence project
					</p>
				</div>

				<div className="w-[89.5rem] min-h-[4.3125rem]  flex gap-[1rem]">
					<span className="w-[14rem] min-h-full flex flex-col gap-[0.5rem] justify-center ">
						<label
							className="w-[2.3rem] min-h-[1.0625rem] font-lato text-[0.875rem] text-[#ABB4B7]"
							htmlFor="name"
						>
							Name
						</label>
						<input
							className="w-[14rem] bg-[#0A0C0D] min-h-[2.75rem] placeholder:text-left pl-4 border-[#242729] border rounded-md placeholder:w-[7.875rem] placeholder:min-h-[1rem] placeholder:font-lato placeholder:font-normal placeholder:text-[0.875rem] placeholder:tracking-[0.8%] placeholder:text-[#808080] text-center"
							type="text"
							id="name"
							name="name"
							placeholder="Enter your full name"
						/>
					</span>

					<span className="w-[14rem] min-h-full flex flex-col gap-[0.5rem] justify-center ">
						<label
							className="w-[2.3rem] min-h-[1.0625rem]  font-lato text-[0.875rem] text-[#ABB4B7]"
							htmlFor="name"
						>
							Email
						</label>
						<input
							className="w-[14rem] bg-[#0A0C0D] min-h-[2.75rem] placeholder:text-left pl-4 border-[#242729] border rounded-md placeholder:w-[7.875rem] placeholder:min-h-[1rem] placeholder:font-lato placeholder:font-normal placeholder:text-[0.875rem] placeholder:tracking-[0.8%] placeholder:text-[#808080] text-center"
							type="text"
							id="name"
							name="name"
							placeholder="Enter your mail"
						/>
					</span>

					<span className="w-[14rem] min-h-full flex flex-col gap-[0.5rem] justify-center ">
						<label
							className="w-[10.3rem] min-h-[1.0625rem] font-lato text-[0.875rem] text-[#ABB4B7]"
							htmlFor="telephone number"
						>
							Telephone number
						</label>
						<input
							type="text"
							id="telephone"
							name="Telephone"
							placeholder="Enter your phone number"
							className="w-[14rem] min-h-[2.75rem] bg-[#0A0C0D] placeholder:text-left pl-4 border-[#242729] border rounded-md placeholder:w-[7.875rem] placeholder:min-h-[1rem] placeholder:font-lato placeholder:font-normal placeholder:text-[0.875rem] placeholder:tracking-[0.8%] placeholder:text-[#808080] text-center"
						/>
					</span>

					<span className="w-[14rem] min-h-full flex flex-col gap-[0.5rem] justify-center ">
						<label
							className="w-[10.3rem] min-h-[1.0625rem] font-lato text-[0.875rem] text-[#ABB4B7]"
							htmlFor="telephone number"
						>
							Service interested in
						</label>
						<input
							type="text"
							id="telephone"
							name="Telephone"
							placeholder="Enter your phone number"
							className="w-[14rem] min-h-[2.75rem] bg-[#0A0C0D] placeholder:text-left pl-4 border-[#242729] border rounded-md placeholder:w-[7.875rem] placeholder:min-h-[1rem] placeholder:font-lato placeholder:font-normal placeholder:text-[0.875rem] placeholder:tracking-[0.8%] placeholder:text-[#808080] text-center"
						/>
					</span>

					<span className="w-[14rem] min-h-full flex flex-col gap-[0.5rem] justify-center ">
						<label
							className="w-[4.3rem] min-h-[1.0625rem] font-lato text-[0.875rem] text-[#ABB4B7]"
							htmlFor="zip code"
						>
							Zip code
						</label>
						<input
							type="text"
							id="zipcode"
							name="zipcode"
							placeholder="Enter your zip code"
							className="w-[14rem] min-h-[2.75rem] bg-[#0A0C0D] placeholder:text-left pl-4 border-[#242729] border rounded-md placeholder:w-[7.875rem] placeholder:min-h-[1rem] placeholder:font-lato placeholder:font-normal placeholder:text-[0.875rem] placeholder:tracking-[0.8%] placeholder:text-[#808080] text-center"
						/>
					</span>

					<span className="w-[14rem] min-h-full flex flex-col gap-[0.5rem] justify-center ">
						<label
							className="w-[10.3rem] min-h-[1.0625rem] font-lato text-[0.875rem] text-[#ABB4B7]"
							htmlFor="telephone"
						>
							How can we help?
						</label>
						<input
							type="text"
							id="telephone"
							name="telephone"
							placeholder="Enter your message"
							className="w-[14rem] min-h-[2.75rem] bg-[#0A0C0D] border-[#242729] border rounded-md placeholder:text-left pl-4 placeholder:w-[7.875rem] placeholder:min-h-[1rem] placeholder:font-lato placeholder:font-normal placeholder:text-[0.875rem] placeholder:tracking-[0.8%] placeholder:text-[#808080] text-center"
						/>
					</span>
				</div>
			</div>
		</form>
	);
}
