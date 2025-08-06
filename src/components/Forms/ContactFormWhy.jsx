//import AnchorLink from "../ui/AnchorLink";
import { useForm } from "react-hook-form";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useContactForm } from "../hooks/useContactForm";

export default function ContactFormWhy() {
	const { register, handleSubmit, reset, formState } = useForm();
	const { errors } = formState;
	const { mutate, isLoading } = useContactForm();

	function onSubmit(data) {
		mutate(data, {
			//reset the input fields if the mutation is successful or failed
			onSettled: () => {
				reset();
			}
		});
	}

	function onError(errors) {
		console.log(errors);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit, onError)}
			className="w-full bg-[#0A0C0D] py-8 md:py-12 lg:py-16 rounded-[1rem]"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-8 md:mb-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#DDECF5] mb-2">
						Get your{" "}
						<span className="italic text-spanYellow">free quote</span> now
					</h2>
					<p className="text-[#ABB4B7] font-medium">
						Fill out the form to start your fence project
					</p>
				</div>

				{/* Form Fields */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
					{/* Name */}
					<div className="flex flex-col gap-1">
						<label className="text-[#ABB4B7] text-sm" htmlFor="name">
							Name
						</label>
						<input
							className="bg-[#0A0C0D] text-white border border-[#242729] rounded-md p-2 md:p-3 w-full"
							type="text"
							id="name"
							disabled={isLoading}
							{...register("name", { required: "This field is required" })}
							placeholder="Enter your full name"
						/>
						{errors?.name && (
							<small className="text-red-500 text-sm">
								{errors.name.message}
							</small>
						)}
					</div>

					{/* Email */}
					<div className="flex flex-col gap-1">
						<label className="text-[#ABB4B7] text-sm" htmlFor="email">
							Email
						</label>
						<input
							className="bg-[#0A0C0D] text-white border border-[#242729] rounded-md p-2 md:p-3 w-full"
							type="email"
							id="email"
							disabled={isLoading}
							{...register("email", { required: "This field is required" })}
							placeholder="Enter your email"
						/>
						{errors?.email && (
							<small className="text-red-500 text-sm">
								{errors.email.message}
							</small>
						)}
					</div>

					{/* Telephone */}
					<div className="flex flex-col gap-1">
						<label className="text-[#ABB4B7] text-sm" htmlFor="telephone">
							Telephone number
						</label>
						<input
							className="bg-[#0A0C0D] text-white border border-[#242729] rounded-md p-2 md:p-3 w-full"
							type="tel"
							id="telephone"
							disabled={isLoading}
							{...register("telephone", { required: "This field is required" })}
							placeholder="Enter your phone number"
						/>
						{errors?.telephone && (
							<small className="text-red-500 text-sm">
								{errors.telephone.message}
							</small>
						)}
					</div>

					{/* Service */}
					<div className="flex flex-col gap-1">
						<label className="text-[#ABB4B7] text-sm" htmlFor="service">
							Service interested in
						</label>
						<input
							className="bg-[#0A0C0D] text-white border border-[#242729] rounded-md p-2 md:p-3 w-full"
							type="text"
							id="service"
							disabled={isLoading}
							{...register("service", { required: "This field is required" })}
							placeholder="Enter the service you're interested in"
						/>
						{errors?.service && (
							<small className="text-red-500 text-sm">
								{errors.service.message}
							</small>
						)}
					</div>

					{/* Zip Code */}
					<div className="flex flex-col gap-1">
						<label className="text-[#ABB4B7] text-sm" htmlFor="zipcode">
							Zip code
						</label>
						<input
							className="bg-[#0A0C0D] text-white border border-[#242729] rounded-md p-2 md:p-3 w-full"
							type="text"
							id="zipcode"
							disabled={isLoading}
							{...register("zipcode", { required: "This field is required" })}
							placeholder="Enter your zip code"
						/>
						{errors?.zipcode && (
							<small className="text-red-500 text-sm">
								{errors.zipcode.message}
							</small>
						)}
					</div>

					{/* Message */}
					<div className="flex flex-col gap-1">
						<label className="text-[#ABB4B7] text-sm" htmlFor="message">
							How can we help?
						</label>
						<textarea
							className="bg-[#0A0C0D] text-white border border-[#242729] rounded-md p-2 md:p-3 w-full min-h-[100px]"
							id="message"
							disabled={isLoading}
							{...register("message", { required: "This field is required" })}
							placeholder="Enter your message"
						/>
						{errors?.message && (
							<small className="text-red-500 text-sm">
								{errors.message.message}
							</small>
						)}
					</div>
				</div>

				{/* Submit Button */}
				<div className="flex justify-center">
					<button
						type="submit"
						disabled={isLoading}
						className="flex items-center justify-center bg-spanYellow hover:bg-opacity-90 text-black font-semibold py-2 px-6 rounded-md transition-colors"
					>
						Get a Free Quote
						<MdOutlineKeyboardArrowRight className="ml-2" />
					</button>
				</div>
			</div>
		</form>
	);
}