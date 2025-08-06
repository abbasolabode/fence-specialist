/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function AnchorLink({
	children,
	heroBtn,
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
	contactWhyBtnStyling,
	disabledBtnCancelModalContact,
	disabledBtnModalContact,
	cancelModalContactForm,
	aboutStyle,
	estimate,
	bannerStyle,
	contactUsStyle,
	isLoadingContactUs,
	appointmentStyle,
	disabledAppointment,
	GoToEstimate,
	takeALook,
	//reset,
}) {
	const navigate = useNavigate();

	function handleClick() {
		if (onClick) return onClick();
		if (linkToAbout) return linkToAbout();
		if (learnMorePath) return learnMorePath();
		if (onClickGallery) return onClickGallery();
		if (testimonial) return navigate(testimonial);
		if (estimate) return navigate(estimate);
		if (GoToEstimate) return navigate(GoToEstimate);
		if (takeALook) return takeALook(takeALook);
		if (cancelModalContactForm) return cancelModalContactForm;
	}

	return (
		<button
			onClick={handleClick}
			disabled={
				disabledBtnModalContact ||
				disabledBtnCancelModalContact ||
				isLoadingContactUs ||
				disabledAppointment
			}
			className={`flex items-center justify-center font-lato px-2.5 w-[10rem] py-3 mb-4 gap-1 rounded-lg text-[0.9rem] bg-utiliBlue text-white transition-all duration-200
        ${bannerStyle} 
		${heroBtn}
        ${contactWhyBtnStyling} 
        ${appointmentStyle} 
        ${blackButton} 
        ${homeUi} 
        ${formBtnStyled} 
        ${cancelBtn} 
        ${overlayChatIcon} 
        ${aboutCompany} 
        ${learnMore} 
        ${gallery} 
        ${latestBlogStyled} 
        ${aboutStyle} 
        ${contactUsStyle}
        ${
					disabledBtnModalContact || isLoadingContactUs || disabledAppointment
						? "opacity-75 cursor-not-allowed"
						: "hover:opacity-90"
				}`}
		>
			{children}
		</button>
	);
}
