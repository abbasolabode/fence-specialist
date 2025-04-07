/* eslint-disable react/prop-types */
import { SlArrowDownCircle } from "react-icons/sl";
import { PiPlusCircleThin } from "react-icons/pi";

export default function AccordionItems({
	accordion,
	curOpen,
	onSetOpen,
	index,
}) {

    //checking if the index values match... It returns a boolean
	const isOpen = curOpen === index;

    //When any of the accordions is clicked on, the index of the clicked accordion is used to update the state
	function handleToggle() {
		onSetOpen(isOpen ? null : index);
	}

	return (
		<div className="min-h-[2rem] mt-10 flex flex-col justify-center">
			{/* Accordion header */}
			<div className="flex min-h-[4rem] items-center gap-6 justify-center">
				<button className="w-[2rem] text-[2rem]" onClick={handleToggle}>
					{isOpen ? <SlArrowDownCircle/> : <PiPlusCircleThin />}
				</button>

				<h2 className="text-[1.1rem] font-poppins text">{accordion.header}</h2>
			</div>

			{/* Accordion body */}
			{isOpen && (
				<div className="w-[22.8rem] mx-auto px-1 py-2">
					<p className="font-poppins text-[0.9rem] leading-6 font-thin tracking-wide">
						{accordion.content}
					</p>
				</div>
			)}
		</div>
	);
}
