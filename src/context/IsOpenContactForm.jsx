/* eslint-disable react/prop-types */
import { createContext, useEffect, useState, useContext } from "react";

//1. CREATE A CONTEXT
const OpenContactFormContext = createContext();

function IsOpenContactFormProvider({ children }) {
	//useState hook
	const [isModalOpen, setIsModalOpen] = useState(false);

	//Automatic display of the contact form
	//The useEffect that handles the open functionality
	// Timer functionality
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsModalOpen(true);
		}, 5000); //open or display the modal in 5 seconds

		//Hide the modal after 25 seconds
		const hideTimer = setTimeout(() => {
			setIsModalOpen(false);
		}, 60000); // 25 seconds

		//Clean-up functionality
		return () => {
			clearTimeout(timer);
			clearTimeout(hideTimer);
		};
	}, []);// render on the initial render

	//Function to handle the close modal functionality
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// 2. PROVIDE THE CONTEXT TO THE CHILDREN
	return (
		<OpenContactFormContext.Provider
			value={{ isModalOpen, setIsModalOpen, closeModal }}
		>
			{children}
		</OpenContactFormContext.Provider>
	);
}

//CUSTOM HOOK
function useFormContact() {
	const context = useContext(OpenContactFormContext);

	if (context === undefined)
		throw new Error(
			" OpenContactFormContext was used outside of OpenContactFormContext  provider"
		);

	return context;
}

export { IsOpenContactFormProvider, useFormContact };
