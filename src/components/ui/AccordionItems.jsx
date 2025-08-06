/* eslint-disable react/prop-types */
import { SlArrowDownCircle } from "react-icons/sl";
import { PiPlusCircleThin } from "react-icons/pi";

export default function AccordionItems({
	accordion,
	curOpen,
	onSetOpen,
	index,
}) {
	const isOpen = curOpen === index;

	function handleToggle() {
		onSetOpen(isOpen ? null : index);
	}

	return (
		<div className={`transition-all duration-300 ease-in-out 
      w-full max-w-3xl mx-auto my-2`}>

			{/* Accordion header */}
			<div className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer
        transition-all duration-200 ease-in-out
        hover:bg-gray-50 active:bg-gray-100
        ${isOpen ? 'bg-gray-50' : ''}`}
				onClick={handleToggle}>

				<button
					className={`flex-shrink-0 text-2xl transition-transform duration-300
            ${isOpen ? 'text-blue-600 rotate-180' : 'text-gray-600'}`}
					aria-label={isOpen ? "Collapse section" : "Expand section"}>
					{isOpen ? <SlArrowDownCircle /> : <PiPlusCircleThin />}
				</button>

				<h2 className={`flex-grow font-poppins font-medium
          text-base leading-snug text-left
          ${isOpen ? 'text-gray-900' : 'text-gray-800'}`}>
					{accordion.header}
				</h2>
			</div>

			{/* Accordion body */}
			<div className={`overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
				{isOpen && (
					<div className="px-4 pb-6 ml-12 md:ml-14 lg:ml-16">
						<p className="font-lato text-gray-700
              text-sm leading-relaxed md:text-base md:leading-loose">
							{accordion.content}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}