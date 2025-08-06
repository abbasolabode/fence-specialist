import AnchorLink from "../components/ui/AnchorLink";
import Navbar from "../components/ui/Navbar";
import Spinner from "../components/ui/Spinner";
import Footer from "../components/ui/Footer";
import { useProfessionals } from "../components/hooks/useProfessionals";
import HeaderText from "../components/ui/HeaderText";

const benefits = [
	{
		id: 1,
		img: "/images/estimate.webp",
		header: "Free Estimates",
		textContent:
			"100% completely FREE estimates ensuring you a quick and painless decision process!",
	},
	{
		id: 2,
		img: "/images/painless.webp",
		header: "Painless Permit Service",
		textContent:
			"Don't worry about the hassle of the permit process, at Fence USA we take care of all of this for you!",
	},
	{
		id: 3,
		img: "/images/postInstall.webp",
		header: "Post-Install Cleaning",
		textContent:
			"Our complimentary post install cleaning is the sure fire way to keep your fence looking brand new!",
	},
	{
		id: 4,
		img: "/images/warranty.webp",
		header: "Lifetime Material Warranty",
		textContent:
			"All of our materials come with a guaranteed lifetime material warranty to put your mind at ease!",
	},
	{
		id: 5,
		img: "/images/guarntee.webp",
		header: "2 Year Install Guarantee",
		textContent:
			"All of our materials come with a guaranteed lifetime material warranty to put your mind at ease!",
	},
	{
		id: 6,
		img: "/images/financing.webp",
		header: "Financing Options",
		textContent:
			"Financing options that won't break the bank and let you acquire the fence, deck, or railing that you are looking for!",
	},
];

export default function About() {
	const { professionals, isLoading } = useProfessionals();

	if (isLoading) return <Spinner />;

	return (
		<div className="w-full min-h-screen overflow-x-hidden min-w-screen-2xl mx-auto">
			{/* Navbar */}
			<header className="w-full bg-white shadow-sm">
				<div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
					<Navbar />
				</div>
			</header>

			<HeaderText about="ABOUT US" />

			{/* Main Content */}
			<main className="min-w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
				{/* Introduction Section */}
				<section className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-12 md:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0164a3] font-poppins mb-6 md:mb-8 px-4">
						You Can Rely On The Quality And Professionalism Of Our Work.
					</h2>

					<div className="w-full space-y-4 md:space-y-6">
						<p className="text-base md:text-lg text-[#a31700] font-lato">
							Founded as Amechi Fence over 35 years ago in Turnersville, NJ, now
							Premier Fence was intended to provide the area with the best value
							money could buy for their fencing, decking, and railing needs. The
							Premier Fence promise boiled down to providing customers with "the
							best fence at the best price." Ensuring this promise was kept
							began with manufacturing the cedar wood fence posts by hand.
						</p>

						<p className="text-base md:text-lg text-[#a31700] font-lato">
							All materials we could offer Premier Fence fencing customers. From
							vinyl, aluminum, wood, chain link, split rail, and privacy fences,
							we have the variety homeowners are looking for in their new
							fences. We ensure each fence is installed correctly and put in the
							best position to withstand the types of extreme weather that can
							hit the greater New Jersey area.
						</p>

						<p className="text-base md:text-lg text-[#a31700] font-lato">
							Premier Fence dedication to hiring and training technicians
							ensured each one understood the adequacy of properly installing
							residential and commercial fences. Our team has developed under
							the Amechi brand and continues to provide superior service and
							value to our customers in fencing, decking, and railing now
							servicing New Jersey, Pennsylvania, and Delaware.
						</p>
					</div>
				</section>

				{/* Benefits Grid */}
				<section className="w-full max-w-4xl mx-auto mb-16 md:mb-20">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
						{benefits.map((benefit) => (
							<div
								key={benefit.id}
								className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 md:p-6 bg-white rounded-lg shadow-sm"
							>
								<img
									src={benefit.img}
									alt={benefit.header}
									className="w-12 h-12 md:w-14 md:h-14 mb-4"
								/>
								<h3 className="text-xl md:text-2xl font-semibold text-[#0164A3] font-poppins mb-2">
									{benefit.header}
								</h3>
								<p className="text-sm md:text-base font-light text-[#A31700] font-poppins">
									{benefit.textContent}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Trust Section */}
				<section className="w-full max-w-4xl mx-auto mb-16 md:mb-20">
					<div className="text-center mb-8 md:mb-12">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0164a3] font-sans mb-4">
							Put Your Trust In Premier Fence
						</h2>
					</div>

					<div className="flex flex-col lg:flex-row gap-8 md:gap-12">
						<div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
							<p className="text-base md:text-lg text-[#A31700] font-lato">
								Knowing who to trust to build your new fence, deck, or railing
								is a significant piece of the puzzle homeowners have to contend
								with securing their property. Our products offer a combination
								of safety, security, and privacy that can elevate their homes to
								new heights. Premier Fence is proud to follow the Amechi Fence
								tradition of providing the best fencing, decking, and railing
								for the best value to our customers throughout New Jersey,
								Pennsylvania, and Delaware.
							</p>

							<p className="text-base md:text-lg text-[#A31700] font-lato">
								We take great pride in the value we offer our customers. For
								over 35 years, people have trusted us with installing secure
								fences, decks, and railings in order to elevate the overall look
								of their years with new fences, decks, and railings. Contact our
								team to get your <span className="font-semibold">FREE</span>{" "}
								quote and schedule your first appointment with us today!
							</p>

							<div className="w-full sm:w-56">
								<AnchorLink
									aboutStyle="w-full bg-[#A31700] hover:bg-white flex justify-center items-center py-3 px-6 transition-all duration-500 border-2 border-[#A31700] rounded-lg group overflow-hidden relative hover:scale-[1.02] hover:shadow-[0_0_15px_2px_rgba(163,23,0,0.4)] bg-[length:200%_100%] hover:bg-[right_center] bg-gradient-to-r from-[#A31700] from-50% to-white to-50%"
									estimate="/estimate"
								>
									<p className="text-sm md:text-base font-semibold text-white group-hover:text-[#A31700] whitespace-nowrap transition-colors duration-300">
										REQUEST A FREE ESTIMATE
									</p>
								</AnchorLink>
							</div>
						</div>

						<div className="w-full lg:w-1/2 hidden lg:block">
							<img
								src="/images/aboutImage.webp"
								alt="fence image"
								className="w-full h-full max-h-[500px] object-cover rounded-lg shadow-sm"
							/>
						</div>
					</div>
				</section>

				{/* Banner Section */}
				<section className="min-w-full bg-[#A31700] py-8 md:py-12 px-4 sm:px-6 rounded-lg mb-16 md:mb-20">
					<div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
							Professional Service, Professional Installation, Satisfaction
							Guaranteed!
						</h2>

						<div className="w-full sm:w-56">
							<AnchorLink
								bannerStyle="w-full min-h-14 bg-white px-6 border-2 border-white rounded-lg group relative overflow-hidden transition-all duration-500 hover:bg-[#A31700] hover:border-transparent hover:shadow-[0_0_30px_5px_rgba(163,23,0,0.5)] hover:scale-[1.02] transform-gpu flex items-center justify-center"
								estimate="/estimate"
							>
								<span className="absolute inset-0 bg-[#A31700] border-2 rounded-md hover:border-white origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-y-100"></span>
								<p className="text-sm md:text-base font-semibold text-[#A31700] group-hover:text-white relative z-10 transition-all duration-300 group-hover:translate-y-[-2px] whitespace-nowrap">
									REQUEST A FREE ESTIMATE
								</p>
							</AnchorLink>
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section className="w-full max-w-6xl mx-auto">
					<div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12 mb-12 md:mb-16">
						<div className="w-full lg:w-1/2">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0164a3] font-lato text-center lg:text-left">
								Meet Our Team Of Professionals
							</h2>
						</div>

						<div className="w-full lg:w-1/2">
							<p className="text-base md:text-lg font-normal font-lato italic text-[#A31700] text-center lg:text-left">
								The Premier Fence team of professionals are equipped to bring
								your vision to life. They aim to give you the best value money
								can buy and will be by your side from start to finish ensuring
								every installation is handled with care providing superior
								service to our customers throughout New Jersey, Pennsylvania,
								and Delaware!
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
						{professionals?.map((professional) => (
							<div
								key={professional.id}
								className="bg-white rounded-lg shadow-sm overflow-hidden"
							>
								<img
									className="w-full h-64 md:h-80 object-cover"
									src={professional?.image}
									alt={professional?.fullName}
								/>
								<div className="p-4 md:p-6">
									<h4 className="text-xl md:text-2xl font-bold text-[#0164a3] font-lato mb-2">
										{professional?.fullName}
									</h4>
									<p className="text-base md:text-lg text-[#A31700]">
										{professional?.position}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<div className="min-w-full mt-auto">
					<div className="mx-auto min-w-full min-w-screen-2xl">
					  <Footer />
					</div>
				  </div>
		</div>
	);
}
