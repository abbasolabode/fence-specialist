export default function Map() {
	return (
		<div className=" w-[24.375rem] min-h-[40rem] mt-[5rem] 2xl:mt-0 2xl:w-[94.5rem] 2xl:min-h-[45rem] border">
			<div className=" w-[24.375rem] max-w-full 2xl:w-[94.5rem] 2xl:min-h-full">
				<div className=" w-[24.375rem] 2xl:w-[94.5rem] 2xl:flex min-h-full">
					{/*Left container  */}
					<div className="w-full bg-utiliBlue 2xl:min-h-[45rem] 2xl:w-1/2 2xl:pt-[7.5rem]">
						<div className="2xl:w-[25rem] 2xl:min-h-[30rem] 2xl:flex 2xl:flex-col 2xl:justify-between 2xl:mx-auto ">
							<div className=" w-[24.375rem] min-h-[10rem] flex justify-center flex-col items-center 2xl:w-[23.125rem] 2xl:gap-[1rem] 2xl:min-h-[5.625rem]">
								<h2 className="text-center text-[1.5rem] 2xl:w-[23.125rem] 2xl:min-h-[3.4375rem] text-white min-h-[2rem] pt-10 2xl:text-[2.5rem] font-lato font-semibold ">
									<span className="text-spanYellow  font-sourceSerif italic">Areas</span> we operate in
								</h2>
								<p className="text-[0.9rem] w-[13rem] 2xl:w-[23.125rem] 2xlMin-h-[1.1875rem] font-poppins font-light text-white">
									We serve Bloomington, MN and the following areas
								</p>
							</div>

							<div className="w-[24.375rem] flex flex-col justify-center items-center min-h-[15rem] 2xl:text-left">
								<div className="w-full flex items-center gap-3 justify-center">
									<span className="border w-[7rem] px-3 py-2 rounded-lg font-poppins text-[0.8rem] bg-white">
										Minneapolis
									</span>
									<span className="border w-[7rem] px-3 py-2 rounded-lg flex justify-center font-poppins text-[0.8rem] bg-white">
										Saint Paul
									</span>
									<span className="border w-[7rem] px-3 py-2 rounded-lg text-utiliBlue font-poppins text-[0.8rem] bg-white">
										Bloomington
									</span>
								</div>
								<div className="w-full flex items-center gap-3 justify-center mt-2">
									<span className="border w-[7rem] whitespace-nowrap ml-2 px-1 py-2 rounded-lg font-poppins bg-white text-[0.8rem]">
										Eden Praire
									</span>
									<span className="border w-[7rem] px-3 py-2 rounded-lg font-poppins text-[0.8rem] bg-white">
										Plymouth
									</span>
									<span className="border w-[7rem] px-2 py-2 rounded-lg flex justify-center font-poppins bg-white text-[0.8rem]">
										Edina
									</span>
									<span className="border w-[9rem] px-2 mr-3 py-2 rounded-lg whitespace-nowrap font-poppins bg-white text-[0.8rem] ">
										Maple Grove
									</span>
								</div>
								<div className="w-full flex items-center gap-3 justify-center mt-2">
									<span className="border w-[7rem] px-3 py-2 rounded-lg flex justify-center font-poppins bg-white text-[0.8rem]">
										Burnsville
									</span>
									<span className="border w-[7rem] px-2 py-2 rounded-lg flex justify-center font-poppins bg-white text-[0.8rem]">
										Richard
									</span>
									<span className="border w-[7rem] px-3 py-2 rounded-lg flex  justify-center font-poppins bg-white text-[0.8rem]">
										Lakeville
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right container */}
					<div className="border min-h-[20rem]  text-center text-[2rem] 2xl:w-1/2">
						map
					</div>
				</div>
			</div>
		</div>
	);
}
