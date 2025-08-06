/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";

import { useEstimate } from "../hooks/useEstimate";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Spinner from "./Spinner";
import { useAppointment } from "../hooks/useAppointment";
import toast from "react-hot-toast";

export default function FenceAppointment() {
	//useNavigate for navigating to another route/page
	const navigate = useNavigate();
	//useState
	const [checkBox, setIsCheckBox] = useState(false);

	//Destructuring the useEstimate custom hook to get the returned data
	const { estimates = [], isLoading } = useEstimate();
	//Destructuring the useForm to get the necessary functions from it
	const { register, handleSubmit, reset, formState } = useForm();
	//Destructuring the formstate to get the errors
	const { errors } = formState;
	//Destructuring the useAppointment custom hook to get the returned data
	const { mutate, isLoading: isSubmitting } = useAppointment();

	//useEffect
	useEffect(() => {
		// Check if there are any validation errors in the form i.e converted array is greater than 0
		if (Object.keys(errors).length) {
			// Get the first error key from the errors object
			// Object.keys() converts the errors object into an array of its keys
			// [0] accesses the first element of that array
			const firstError = Object.keys(errors)[0];

			// Scroll to the first form field with an error:
			// 1. document.getElementById() finds the DOM element with the matching ID
			// 2. The ID comes from our firstError variable (matches form field IDs)
			// 3. ?. optional chaining prevents errors if element doesn't exist
			// 4. scrollIntoView() smoothly scrolls the element into visible area
			document.getElementById(firstError)?.scrollIntoView();
		}
	}, [errors]); // Dependency array - effect runs whenever 'errors' changes

	//If the isLoading state is TRUE return spinner
	if (isLoading) return <Spinner />;

	//Getting the first data of the array
	const firstAppointment = estimates?.[0];

	function onSubmit(data) {
		//Checking if the checkBox is NOT TRUE, if it's not true the display the toast.error
		if (!checkBox) {
			toast.error("Please accept the terms and conditions");
			return;
		}
		mutate(data, {
			//The mutate function calls the API function with data from the input fields
			//This clears the input fields if the mutation succeeds or fails
			onSettled: () => reset(),
		});
	}

	return (
		<div className="w-full min-h-screen flex flex-col">
			{/* Navigation menu */}
			<header className="w-full">
				<Navbar />
			</header>

			{/* Main contents */}
			<main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 ">
				<div className="w-full flex flex-col md:flex-row gap-8 lg:gap-12  justify-center mt-[9rem]">
					{/* Left side content */}
					<div className="w-full md:w-1/2 lg:w-2/5 mt-[4rem] flex flex-col items-start gap-6">
						<button
							/* Move 1 back (to the previous page) */
							onClick={() => navigate(-1)}
							className="border w-10 h-10 flex  items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
						>
							<IoIosArrowRoundBack className="text-2xl font-semibold text-blue-500" />
						</button>

						<div className="w-20 h-20">
							<img
								src="/images/fenceLogo.png"
								alt=""
								className="w-full h-full object-contain"
							/>
						</div>

						<p className="font-lato font-semibold text-utiliBlue text-2xl">
							{firstAppointment?.appointment}
						</p>

						<div className="flex gap-3 items-center border border-gray-300 w-full h-14 rounded-lg px-4">
							<IoTimeOutline className="text-gray-400 text-xl" />
							<p className="font-lato text-gray-500 text-lg font-light">
								{firstAppointment?.duration}
							</p>
						</div>
					</div>

					{/* Right side form */}
					<div className="w-full md:w-1/2 lg:w-3/5 flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg shadow-purple-200/50">
						<div>
							<p className="font-semibold text-xl font-lato">Enter Details</p>
						</div>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="w-full flex flex-col gap-4"
						>
							{/* Form fields */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="flex flex-col gap-2">
									<label
										htmlFor="firstName"
										className="font-semibold flex items-center gap-1"
									>
										First Name <span className="text-red-500">*</span>
									</label>
									<input
										{...register("firstName", {
											required: "First Name is required",
										})}
										disabled={isSubmitting}
										type="text"
										id="firstName"
										placeholder="First Name"
										className="w-full outline-none h-10 px-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									{errors.firstName && (
										<small className="text-sm italic font-semibold text-red-600">
											{errors.firstName.message}
										</small>
									)}
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="lastName"
										className="font-semibold flex items-center gap-1"
									>
										Last Name <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										{...register("lastName", {
											required: "Last Name is required",
										})}
										disabled={isSubmitting}
										id="lastName"
										placeholder="Last Name"
										className="w-full outline-none h-10 px-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									{errors.lastName && (
										<small className="text-sm italic font-semibold text-red-600">
											{errors.lastName.message}
										</small>
									)}
								</div>

								<div className="sm:col-span-2 flex flex-col gap-2">
									<label
										htmlFor="address"
										className="font-semibold flex items-center gap-1"
									>
										Address <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										{...register("address", {
											required: "Address is required",
										})}
										disabled={isSubmitting}
										id="address"
										placeholder="Address"
										className="w-full outline-none h-10 px-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									{errors.address && (
										<small className="text-sm italic font-semibold text-red-600">
											{errors.address.message}
										</small>
									)}
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="city"
										className="font-semibold flex items-center gap-1"
									>
										City <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										id="city"
										{...register("city", { required: "City is required" })}
										disabled={isSubmitting}
										placeholder="City"
										className="w-full outline-none h-10 px-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									{errors.city && (
										<small className="text-sm italic font-semibold text-red-600">
											{errors.city.message}
										</small>
									)}
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="state"
										className="font-semibold flex items-center gap-1"
									>
										State <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										{...register("state", { required: "State is required" })}
										disabled={isSubmitting}
										id="state"
										placeholder="State"
										className="w-full outline-none h-10 px-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									{errors.state && (
										<small className="text-sm italic font-semibold text-red-600">
											{errors.state.message}
										</small>
									)}
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="postalcode"
										className="font-semibold flex items-center gap-1"
									>
										Postal Code<span className="text-red-500">*</span>
									</label>
									<input
										{...register("postalcode", {
											required: "Postal Code is required",
										})}
										disabled={isSubmitting}
										type="text"
										id="postalcode"
										placeholder="Postal Code"
										className="w-full outline-none h-10 px-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									{errors.postalcode && (
										<small className="text-sm italic font-semibold text-red-600">
											{errors.postalcode.message}
										</small>
									)}
								</div>

								<div className="sm:col-span-2 flex flex-col gap-2">
									<label
										htmlFor="email"
										className="font-semibold flex items-center gap-1"
									>
										Email <span className="text-red-500">*</span>
									</label>
									<input
										{...register("email", {
											required: "Email is required",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Invalid email address",
											},
										})}
										disabled={isSubmitting}
										type="text"
										id="email"
										placeholder="email"
										className="w-full outline-none h-10 px-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									{errors.email && (
										<small className="text-sm italic font-semibold text-red-600">
											{errors.email.message}
										</small>
									)}
								</div>
							</div>

							{/* Checkbox and submit button */}
							<div className="mt-4 flex flex-col">
								<div className="flex items-start gap-3 mb-6">
									<input
										type="checkbox"
										/* bINDING THE STATE TO THE CHECKBOX */
										value={checkBox}
										/* Flipping of the state (to "TRUE or FALSE") */
										onChange={() => setIsCheckBox((isChecked) => !isChecked)}
										id="checkbox"
										name="checkbox"
										disabled={checkBox || isSubmitting}
										className="mt-1 w-5 h-5 min-w-5 text-blue-500 bg-white border-gray-300 rounded focus:ring-blue-400 focus:ring-2 cursor-pointer"
									/>
									<label
										htmlFor="checkbox"
										className="text-sm font-lato text-gray-600 leading-snug cursor-pointer"
									>
										I agree to terms & conditions provided by the company. By
										providing my phone number, I agree to receive text messages
										from the business.{" "}
										<span className="text-blue-500 underline hover:text-blue-700">
											Privacy policy
										</span>
									</label>
								</div>

								<button
									type="submit"
									disabled={isSubmitting || !checkBox}
									className={`w-full py-3 px-6 flex justify-center items-center gap-2 rounded-md bg-blue-500 text-white font-bold text-lg font-lato
                                    ${
																			isSubmitting
																				? "bg-blue-400"
																				: "hover:bg-blue-600"
																		} 
                                    transition-all duration-300 active:scale-[0.98] disabled:opacity-70`}
								>
									{isSubmitting ? (
										<>
											<Spinner size="1.2rem" color="white" />
											<span>Processing...</span>
										</>
									) : (
										"SUBMIT"
									)}
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>

			{/* Footer */}
			<div className="w-full">
				<Footer />
			</div>
		</div>
	);
}
