/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export default function AnchorLink({
	children,
	blackButton,
	homeUi,
	formBtnStyled,
	cancelBtn,
	overlayChatIcon,
	onClick,
	aboutCompany,
	linkToAbout,
	learnMore,
	learnMorePath,
	gallery,
	onClickGallery,
	testimonial,
	latestBlogStyled,
}) {
	const navigate = useNavigate();

	//This is a function that handles several logic.
	function handleClick() {
		if (onClick) return onClick(); //If this exists this function get invoked
		if (linkToAbout) return linkToAbout(); //If this exists this function get invoked and navigate to the specified path
		if (learnMorePath) return learnMorePath();
		if (onClickGallery) return onClickGallery();
		if (testimonial) return navigate(testimonial);
	}

	return (
		<button
			onClick={handleClick}
			className={`flex items-center font-lato px-2.5 w-[10rem] py-3 mb-4 gap-1 rounded-lg text-[0.9rem] bg-utiliBlue text-white ${blackButton} ${homeUi} ${formBtnStyled} ${cancelBtn} ${overlayChatIcon} ${aboutCompany} ${learnMore} ${gallery} ${latestBlogStyled}`}
		>
			{children}
		</button>)
}
