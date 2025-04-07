import { FaRegCalendarDays } from "react-icons/fa6";
import ContactForm from "../Forms/ContactForm";

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
		<div>
			<div className="hidden">
				{/* Right container */}
				<div>
					<h2>
						Why Rachuna Fence LLC is your <span>fencing partner</span>{" "}
					</h2>
				</div>

				{/* Left container */}
				<div>
					<div>
						<div>
							<FaRegCalendarDays />
						</div>
						<p>Locally Owned & Operated</p>
						<p>
							At Rachuna Fence LLC, we understand the needs of the Bloomington
							community because we live and work here too. Our local expertise
							allows us to provide personalized service and support to our
							neighbors.
						</p>
					</div>
				</div>
			</div>

			<ContactForm />
		</div>
	);
}
