import UtiliMap from "./UtiliMap";

export default function Map() {
	const cities = [
		"Minneapolis",
		"Saint Paul",
		"Bloomington",
		"Eden Praire",
		"Plymouth",
		"Edina",
		"Maple Grove",
		"Burnsville",
		"Richard",
		"Lakeville"
	];

	return (
		<div className="w-full min-h-[40rem] mt-[5rem] 2xl:mt-[6rem] 2xl:min-h-[45rem] ">
			<div className="w-full max-w-full 2xl:min-h-full">
				<div className="w-full flex flex-col 2xl:flex-row min-h-full">
					{/* Left container - Unchanged height behavior */}
					<div className="w-full bg-utiliBlue 2xl:min-h-[45rem] 2xl:w-1/3 2xl:pt-[7.5rem]">
						<div className="2xl:w-[25rem] 2xl:min-h-[30rem] 2xl:flex 2xl:flex-col 2xl:justify-between 2xl:mx-auto">
							<div className="w-full min-h-[10rem] flex justify-center flex-col items-center 2xl:w-[23.125rem] 2xl:gap-[1rem] 2xl:min-h-[5.625rem] px-4 py-8 sm:py-12">
								<h2 className="text-center text-[1.5rem] sm:text-2xl 2xl:text-[2.5rem] text-white font-lato font-semibold">
									<span className="text-spanYellow font-sourceSerif italic">Areas</span> we operate in
								</h2>
								<p className="text-[0.9rem] sm:text-base w-full max-w-[15rem] 2xl:w-[23.125rem] font-poppins font-light text-white mt-2">
									We serve Bloomington, MN and the following areas
								</p>
							</div>

							<div className="w-full flex flex-col justify-center items-center min-h-[15rem] 2xl:text-left px-4 pb-8">
								<div className="w-full flex flex-wrap justify-center gap-3 max-w-md mx-auto">
									{cities.map((city) => (
										<span
											key={city}
											className="border px-3 py-2 rounded-lg font-poppins text-[0.8rem] sm:text-sm bg-white whitespace-nowrap"
										>
											{city}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right container - Map - EXACTLY as you specified */}
					<div className="w-full min-h-[20rem] 2xl:w-2/3 2xl:min-h-[45rem]">
						<div className="h-full w-full">
							<UtiliMap homepageMap="h-full w-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}