import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import AnchorLink from "./AnchorLink";
import { useFormContact } from "../../context/IsOpenContactForm";
import AvatarModal from "./AvatarModal";

// Background image styling
const backgroundStyling = {
	backgroundImage: "url('./images/bgImage.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	height: "70rem",
	minHeight: "650px"
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.4,
			when: "beforeChildren"
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			damping: 10
		}
	}
};

const textVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut"
		}
	}
};

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeInOut"
		}
	}
};

export default function HeroContents() {
	const { isModalOpen } = useFormContact();

	return (
		<motion.div
			className="relative w-full overflow-hidden"
			style={backgroundStyling}
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center  lg:justify-between py-20 lg:py-0">
				{/* Left Content */}
				<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center gap-[2.5rem] lg:text-left">
					<motion.p
						className="mb-4 text-white bg-dimGray px-4 py-2 rounded-lg text-sm lg:text-base w-max"
						variants={itemVariants}
					>
						Fence Company in Bloomington MN
					</motion.p>

					<motion.h1
						className="font-lato text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 lg:mb-8"
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									delay: 0.3,
									type: "spring",
									stiffness: 70,
									damping: 12,
									mass: 0.5
								}
							}
						}}
					>
						Your Premier Fence
						<motion.span
							className="text-spanYellow italic font-medium ml-2 lg:ml-4"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								delay: 0.6,
								type: "spring",
								stiffness: 200
							}}
						>
							Specialists
						</motion.span>
					</motion.h1>

					<motion.p
						className="text-white text-base sm:text-lg md:text-xl mb-8 lg:mb-12 max-w-lg"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									delay: 0.5,
									duration: 0.8,
									ease: [0.2, 0.8, 0.3, 1]
								}
							}
						}}
					>
						Rachuna Fence LLC is a locally owned fencing company based in
						Bloomington, MN, with over 10 years of experience, we specialize
						in building high-quality fences that enhance the beauty,
						security and, privacy of both residential and commercial
						properties.
					</motion.p>

					<motion.div
						className="w-[20rem] min-h-[5rem] flex justify-center lg:justify-start"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							delay: 0.8,
							type: "spring",
							stiffness: 150
						}}
					>
						<AnchorLink heroBtn="w-full min-h-[3rem] rounded-md">
							<span className="flex items-center justify-center gap-2 text-white text-lg font-medium hover:text-spanYellow transition-colors">
								<IoCallOutline />
								<a href="tel:+16127307260">612-730-7260</a>
							</span>
						</AnchorLink>
					</motion.div>
				</div>

				{/* Right Content - Visible on lg screens and up */}
				<motion.div
					className="hidden lg:flex flex-col justify-between w-full lg:w-1/2 pl-12 xl:pl-24"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
				>
					<motion.div
						className="flex flex-wrap gap-6 mb-12"
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.15,
									delayChildren: 0.6
								}
							}
						}}
						initial="hidden"
						animate="visible"
					>
						{[
							"Over 10 Years of Experience",
							"Over 55 5* Reviews",
							"Family Owned Business"
						].map((item, index) => (
							<motion.div
								key={index}
								className="flex items-center gap-3 text-white text-lg"
								variants={itemVariants}
							>
								<span>
									<img src="./images/icon1.png" alt="mark" className="w-6 h-6" />
								</span>
								<p>{item}</p>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						className="flex flex-col gap-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
					>
						<motion.div
							className="flex flex-col gap-4"
							variants={{
								hidden: { opacity: 0 },
								visible: {
									opacity: 1,
									transition: {
										staggerChildren: 0.2,
										delayChildren: 0.9
									}
								}
							}}
							initial="hidden"
							animate="visible"
						>
							<motion.span
								className="flex items-center gap-3 text-white"
								variants={textVariants}
							>
								<img src="./images/Star.png" alt="star icon" className="w-6 h-6" />
								<p className="text-lg">(5.0) ratings from 48 reviews</p>
							</motion.span>

							<motion.div
								className="flex gap-4"
								variants={{
									hidden: { opacity: 0, scale: 0.9 },
									visible: {
										opacity: 1,
										scale: 1,
										transition: {
											type: "spring",
											stiffness: 200
										}
									}
								}}
							>
								{["icon2", "icon3", "icon4"].map((icon, index) => (
									<img
										key={index}
										src={`./images/${icon}.png`}
										alt={`${icon} icon`}
										className="w-10 h-10"
									/>
								))}
							</motion.div>
						</motion.div>

						{!isModalOpen && (
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2, type: "spring" }}
							>
								<AvatarModal />
							</motion.div>
						)}
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}