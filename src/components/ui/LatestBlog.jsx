import AnchorLink from "./AnchorLink";

export default function LatestBlog() {
  return (
		<div className="min-h-[90rem] w-[24.375rem]">
			<div className="min-h-[90rem] w-[24.375rem] flex flex-col items-center justify-center">
				{/* Left container */}
				<div className="w-full min-h-[4rem] ">
					<h2 className="w-full text-[1.5rem] font-poppins text-center">
						Latest <span className="text-utiliBlue italic">blog articles</span>
					</h2>
				</div>

				{/* Right container */}
				<div className="w-[24.375rem] min">
					<div className="w-[24.375rem] min flex flex-col items-center">
						{/* first container  */}
						<div className="w-[22.375rem] min-h-[23rem] py-2 ">
							<div className="w-[22.375rem] min">
								<img src="/images/iron fence.png" alt="iron fence" />
							</div>
							<div>
								<span>
									<p className="font-poppins text-[0.8rem] font-semibold leading-6">
										Top 5 Benefits of Installing a Privacy Fence in Bloomington,
										MN
									</p>
								</span>
								<div>
									<span className="flex justify-between mt-3">
										<p className="text-[0.7rem] font-poppins">Nick Rachuna</p>
										<span className="h-5 border-l-2 border-gray-300"></span>
										<p className="text-[0.7rem] font-poppins">Fence Styles</p>
										<span className="h-5 border-l-2 border-gray-300"></span>
										<p className="text-[0.7rem] font-poppins">12th July 2024</p>
									</span>
								</div>
							</div>
						</div>
						{/* second container */}
						<div className="w-[22.375rem] min-h-[23rem] py-2 ">
							<div className="w-[22.375rem] min">
								<img src="/images/wire&iron fence.png" alt="wire fence" />
							</div>
							<div>
								<span>
									<p className="font-poppins text-[0.8rem] font-semibold leading-6">
										Top 5 Benefits of Installing a Privacy Fence in Bloomington,
										MN
									</p>
								</span>
								<div>
									<span className="flex justify-between mt-3">
										<p className="text-[0.7rem] font-poppins">Nick Rachuna</p>
										<span className="h-5 border-l-2 border-gray-300"></span>
										<p className="text-[0.7rem] font-poppins">Fence Styles</p>
										<span className="h-5 border-l-2 border-gray-300"></span>
										<p className="text-[0.7rem] font-poppins">12th July 2024</p>
									</span>
								</div>
							</div>
						</div>
						{/* Fourth container */}
						<div className="w-[22.375rem] min-h-[23rem] py-2 ">
							<div className="w-[22.375rem] min">
								<img src="/images/wooden fence.png" alt="wooden fence" />
							</div>
							<div>
								<span>
									<p className="font-poppins text-[0.8rem] font-semibold leading-6">
										Top 5 Benefits of Installing a Privacy Fence in Bloomington,
										MN
									</p>
								</span>
								<div>
									<span className="flex justify-between mt-3">
										<p className="text-[0.7rem] font-poppins">Nick Rachuna</p>
										<span className="h-5 border-l-2 border-gray-300"></span>
										<p className="text-[0.7rem] font-poppins">Fence Styles</p>
										<span className="h-5 border-l-2 border-gray-300"></span>
										<p className="text-[0.7rem] font-poppins">12th July 2024</p>
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="mx-auto flex justify-center min-h-[3rem] mt-10">
						<AnchorLink latestBlogStyled="w-[10rem]  text-center flex justify-center">
							<p className="font-poppins">See all Blog Posts</p>
						</AnchorLink>
					</div>
				</div>
			</div>
		</div>
	);
}
