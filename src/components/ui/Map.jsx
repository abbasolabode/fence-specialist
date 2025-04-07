



export default function Map() {
  return (
		<div className=" w-[24.375rem] min-h-[40rem] mt-[5rem]">
			<div className=" w-[24.375rem] ">
				<div className=" w-[24.375rem]">
					{/*Left container  */}
					<div className="w-full bg-utiliBlue">
						<div className=" w-[24.375rem] min-h-[10rem]  flex justify-center flex-col items-center">
							<h2 className="text-center font-poppins text-[1.5rem] text-white min-h-[2rem] pt-10">
								<span className="text-spanYellow ">Areas</span> we operate in
							</h2>
							<p className="text-[0.9rem] w-[13rem] font-poppins font-light text-white">
								We serve Bloomington, MN and the following areas
							</p>
						</div>

						<div className="w-[24.375rem] flex flex-col justify-center items-center min-h-[15rem]">
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

					{/* Right container */}
					<div className="border min-h-[20rem]  text-center text-[2rem]">map</div>
				</div>
			</div>
		</div>
	);
}
