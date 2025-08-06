import { FaRegCalendarDays } from "react-icons/fa6";
import ContactFormWhy from "../Forms/ContactFormWhy";

const why = [
	{
		id: 1,
		header: "Locally Owned & Operated",
		content:
			"At Rachuna Fence LLC, we understand the needs of the Bloomington community because we live and work here too. Our local expertise allows us to provide personalized service and support to our neighbors.",
	},

	{
		id: 2,
		header: "Owner on Every Job Site",
		content:
			"Our owner oversees each project to ensure that every detail meets our high standards of quality and craftsmanship. This hands-on approach guarantees that your fencing project receives the attention it deserves.",
	},

	{
		id: 3,
		header: "Family Owned",
		content:
			"As a family-owned business, we bring a personal touch to every interaction, treating our clients like part of our extended family. We believe in building strong relationships and delivering exceptional service with integrity.",
	},

	{
		id: 4,
		header: "Over 10 Years of Experience",
		content:
			"With over a decade of experience in the fencing industry, Rachuna Fence LLC combines technical expertise with innovative solutions to deliver top-quality fencing that stands the test of time. Our skilled team is dedicated to excellence in every project.",
	},

	{
		id: 5,
		header: "Many Happy Homeowners",
		content:
			"Our commitment to quality and customer satisfaction has earned us the trust and loyalty of countless homeowners in the Bloomington area. We take pride in our reputation for reliability and craftsmanship, backed by numerous positive reviews.",
	},
];

export default function WhyRachuna() {
	return (
		<div className="w-full bg-utiliBlue pt-8 md:pt-12 lg:pt-16 xl:pt-20 py-[5rem]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center lg:text-left mb-8 md:mb-12 lg:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white">
						Why Rachuna Fence LLC is your{" "}
						<span className="italic text-spanYellow">fencing partner</span>
					</h2>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12">
					{why.map((item) => (
						<div
							key={item.id}
							className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
						>
							<div className="text-spanYellow text-2xl mb-4">
								<FaRegCalendarDays />
							</div>
							<div>
								<h3 className="text-lg md:text-xl font-semibold mb-3">
									{item.header}
								</h3>
								<p className="text-gray-700 leading-relaxed">
									{item.content}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Contact Form - Will appear below on all screens */}
				<div className="mt-8 md:mt-12 lg:mt-16">
					<ContactFormWhy />
				</div>
			</div>
		</div>
	);
  }