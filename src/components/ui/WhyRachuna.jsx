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
		<div className="2xl:w-[94.5rem] mt-[4rem]">
			<div className="hidden 2xl:block w-full 2xl:h-[70.5rem] bg-utiliBlue pt-[5rem] mx-auto">
				<div className="2xl:w-[89.5rem] 2xl:h-[55.5625rem] flex gap-[1.5rem]">
					{/* Right container */}
					<div className="w-2/4 min-h-full pl-[2.5rem]">
						<h2 className="font-lato font-medium text-white text-[2.5rem] 2xl:w-[25rem] 2xl:min-h-[163rem]">
							Why Rachuna Fence LLC is your{" "}
							<span className="font-sourceSerif italic text-spanYellow">
								fencing partner
							</span>
						</h2>
					</div>

					{/* Left container */}
					<div className="w-3/4 ">
						<div className=" 2xl:w-[52rem] 2xl:min-h-[15.6rem] grid grid-cols-2 gap-[2.5rem]">
							{why.map((item) => (
								<div
									key={item.id}
									className="2xl:w-[25.5rem] 2xl:min-h-[15.687rem] shadow-md rounded-[0.75rem] p-[1rem] flex flex-col gap-[1.5rem] bg-white"
								>
									<div className="w-[1.5rem] min-h-[1.5rem] text-spanYellow">
										<FaRegCalendarDays />
									</div>
									<div className="w-[23.25rem] min-h-[10.6rem] flex flex-col justify-between">
										<p className="w-[15rem] min-h-[1.1875rem] font-lato text-[1rem] font-semibold">
											{item.header}
										</p>
										<p className="font-lato font-medium leading-7 w-[23.25rem] min-h-[8.75rem] text-[#3B4144]">
											{item.content}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="">
				<ContactFormWhy />
			</div>
		</div>
	);
}
