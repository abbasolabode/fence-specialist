/* eslint-disable no-unused-vars */
import AnchorLink from "../ui/AnchorLink";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { useFormContact } from "../../context/IsOpenContactForm";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getModalContactData } from "../services/apiModalContact";

export default function ContactForm() {
	//useForm hook from react form 
	const { register, handleSubmit, reset, formState } = useForm();
	const { errors } = formState;
	
	//Custom hook
	const { closeModal } = useFormContact();
    
	//useQueryClient from REACT QUERY
	const queryClient = useQueryClient();

	const { mutate, isLoading } = useMutation({
		//The API function to get called
		mutationFn: getModalContactData,
		//If there's a successful mutation the onSuccess function gets called
		onSuccess: () => {
			toast.success("Your form was successfully submitted");
			queryClient.invalidateQueries({queryKey: ["contactUsForm"] });
		},
		//If the mutation is unsuccessful, the onError function gets called
		onError: (err) => toast.error(err.message),
	});

	//The function that gets called when an onSubmit event happens
	function onSubmit(data) {
		mutate(data, {
			//reset the input fields if the mutation is successful or failed
			onSettled: () => {
				reset();
			}
		});
	}


	return createPortal(
		<div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#222222d7] bg-opacity-20 backdrop-blur-md p-4">
			<div className="w-full max-w-4xl bg-black rounded-xl shadow-xl overflow-hidden">
				{/* Header */}
				<div className="flex justify-between items-center p-4 bg-black border-b border-gray-800">
					<h2 className="text-xl md:text-2xl font-semibold text-white">
						Get Your <span className="italic text-spanYellow">free quote</span> now
					</h2>
					<button
						onClick={closeModal}
						className="text-gray-400 hover:text-white transition-colors"
					>
						<LiaTimesSolid className="text-2xl" />
					</button>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* Name */}
						<div className="space-y-1">
							<label htmlFor="name" className="block text-sm font-medium text-gray-400">
								Name
							</label>
							<input
								type="text"
								id="name"
								placeholder="Enter your full name"
								{...register("name", { required: "This field is required" })}
								className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-spanYellow"
							/>
							{errors?.name && (
								<small className="text-red-500 text-sm">{errors.name.message}</small>
							)}
						</div>

						{/* Email */}
						<div className="space-y-1">
							<label htmlFor="email" className="block text-sm font-medium text-gray-400">
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter your email"
								{...register("email", { required: "This field is required" })}
								className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-spanYellow"
							/>
							{errors?.email && (
								<small className="text-red-500 text-sm">{errors.email.message}</small>
							)}
						</div>

						{/* Telephone */}
						<div className="space-y-1">
							<label htmlFor="telephone" className="block text-sm font-medium text-gray-400">
								Telephone number
							</label>
							<input
								type="tel"
								id="telephone"
								placeholder="Enter your phone number"
								{...register("telephone", { required: "This field is required" })}
								className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-spanYellow"
							/>
							{errors?.telephone && (
								<small className="text-red-500 text-sm">{errors.telephone.message}</small>
							)}
						</div>

						{/* Service */}
						<div className="space-y-1">
							<label htmlFor="service" className="block text-sm font-medium text-gray-400">
								Service interested in
							</label>
							<input
								type="text"
								id="service"
								placeholder="Enter the service you're interested in"
								{...register("service", { required: "This field is required" })}
								className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-spanYellow"
							/>
							{errors?.service && (
								<small className="text-red-500 text-sm">{errors.service.message}</small>
							)}
						</div>

						{/* Zip Code */}
						<div className="space-y-1">
							<label htmlFor="zipcode" className="block text-sm font-medium text-gray-400">
								Zip code
							</label>
							<input
								type="text"
								id="zipcode"
								placeholder="Enter your zip code"
								{...register("zipcode", { required: "This field is required" })}
								className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-spanYellow"
							/>
							{errors?.zipcode && (
								<small className="text-red-500 text-sm">{errors.zipcode.message}</small>
							)}
						</div>

						{/* Message */}
						<div className="md:col-span-2 space-y-1">
							<label htmlFor="message" className="block text-sm font-medium text-gray-400">
								How can we help you?
							</label>
							<textarea
								id="message"
								minLength="4"
								maxLength="10"
								placeholder="How can we help you?"
								{...register("message", { required: "This field is required" })}
								className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-spanYellow min-h-[120px]"
							></textarea>
							{errors?.message && (
								<small className="text-red-500 text-sm">{errors.message.message}</small>
							)}
						</div>
					</div>

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 mt-6">
						<AnchorLink
							disabledBtnModalContact={isLoading}
							formBtnStyled="flex-1 bg-dimGray hover:bg-gray-600 transition-colors"
						>
							<span className="flex items-center justify-center gap-1">
								<p className="font-semibold">Get a Free Quote</p>
								<MdKeyboardArrowRight className="text-xl" />
							</span>
						</AnchorLink>
						<AnchorLink
							cancelModalContactForm={closeModal}
							disabledBtnCancelModalContact={isLoading}
							cancelBtn="flex-1 bg-dimGray hover:bg-gray-600 transition-colors"
						>
							<p className="font-semibold">Cancel</p>
						</AnchorLink>
					</div>
				</form>
			</div>
		</div>,
		document.body
	);
}