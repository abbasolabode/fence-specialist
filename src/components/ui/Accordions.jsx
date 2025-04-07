import { useState } from "react";
import AccordionItems from "./AccordionItems";

const accordions = [
	{
		header: "What types of fence do you install?",
		content:
			"At Rachuna Fence LLC, we specialize in a variety of fence types including wood, vinyl, chain link, and custom fabricated fences. We work with you to select the best material and style that fits your needs, preferences, and budget.",
	},
	{
		header: "What types of fence do you install?",
		content:
			"At Rachuna Fence LLC, we specialize in a variety of fence types including wood, vinyl, chain link, and custom fabricated fences. We work with you to select the best material and style that fits your needs, preferences, and budget.",
	},

	{
		header: "What types of fence do you install?",
		content:
			"At Rachuna Fence LLC, we specialize in a variety of fence types including wood, vinyl, chain link, and custom fabricated fences. We work with you to select the best material and style that fits your needs, preferences, and budget.",
	},
	{
		header: "What types of fence do you install?",
		content:
			"At Rachuna Fence LLC, we specialize in a variety of fence types including wood, vinyl, chain link, and custom fabricated fences. We work with you to select the best material and style that fits your needs, preferences, and budget.",
	},
	{
		header: "What types of fence do you install?",
		content:
			"At Rachuna Fence LLC, we specialize in a variety of fence types including wood, vinyl, chain link, and custom fabricated fences. We work with you to select the best material and style that fits your needs, preferences, and budget.",
	},
];

export default function Accordions() {
    const [isOpen, setIsOpen] = useState(null);



	return (
		<div className="w-[24.375rem] min-h-[20rem]">
			<div className="w-[24.375rem] min-h-[20rem]">
				<div>
					<h1 className="text-center font-poppins text-[1.2rem] font-semibold">
						Our most
						<span className="italic text-utiliBlue">
							frequently asked questions
						</span>
					</h1>
				</div>
				{accordions.map((accordion, index) => {
					return <AccordionItems key={accordion.index} accordion={accordion} index={index} curOpen={isOpen} onSetOpen={setIsOpen} />;
				})}
			</div>
		</div>
	);
}
