import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import HeaderText from "../components/ui/HeaderText";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { getContactUsData } from "../components/services/apiContactUs";
import UtiliMap from "../components/ui/UtiliMap";

export default function Contact() {
	const { register, handleSubmit, reset, formState } = useForm();
	const { errors } = formState;
	const queryClient = useQueryClient();

	const { mutate, isLoading } = useMutation({
		mutationFn: getContactUsData,
		onSuccess: () => {
			toast.success("Form submitted successfully!");
			queryClient.invalidateQueries({ queryKey: ["contactUs"] });
		},
		onError: (err) => toast.error(err.message),
	});

	const services = [
		"Fence Install",
		"Dock Install",
		"Railing Install",
		"Repair",
	];

	const serviceAreas = [
		"Cape May County",
		"Cumberland County",
		"Delaware County (PA)",
		"Gloucester County",
		"New Castle County (DE)",
		"Ocean County",
		"Salem County",
	];

	const onSubmit = (data) => {
		mutate(data, {
			onSettled: () => reset(),
		});
	};

	return (
		<div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
			{/* Navbar */}
			<header className="w-full bg-white shadow-sm">
				<div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
					<Navbar />
				</div>
			</header>

			<main className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
				<HeaderText contactHeader="CONTACT US" />

				<div className="w-full flex flex-col lg:flex-row gap-8 xl:gap-16 py-4 md:py-8">
					{/* Contact Info Section */}
					<section className="w-full lg:w-1/2 xl:w-2/5 space-y-6 md:space-y-8">
						<div className="space-y-4 md:space-y-6">
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0164A3] font-lato">
								REACH OUT TO US TODAY!
							</h2>
							<p className="text-base sm:text-lg text-[#A31700] font-medium font-lato">
								Contact us today for all your fencing, decking, and railing
								needs. Our team is ready to provide expert assistance
							</p>

							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CiMail className="text-xl text-[#A31700] mt-1" />
									<p className="text-base text-[#0164A3] font-lato">
										Olabodeabbas80@gmail.com
									</p>
								</div>
								<div className="flex items-start gap-3">
									<FaPhone className="text-xl text-[#A31700] mt-1" />
									<p className="text-base text-[#0164A3] font-lato">
										(866) 639-7599
									</p>
								</div>
								<div className="flex items-start gap-3">
									<MdLocationOn className="text-xl text-[#A31700] mt-1" />
									<p className="text-base text-[#0164A3] font-lato">
										5950 NJ-42, Turnersville, NJ 08012
									</p>
								</div>
							</div>
						</div>

						{/* Map */}
						<div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] rounded-lg overflow-hidden shadow-sm">
							<UtiliMap />
						</div>
					</section>

					{/* Contact Form */}
					<section className="w-full lg:w-1/2 xl:w-3/5">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="w-full space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100"
						>
							{/* Name Fields */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
								<div>
									<label
										htmlFor="firstName"
										className="block text-sm sm:text-base font-lato font-semibold text-[#A31700] mb-2"
									>
										First Name <span className="text-red-500">*</span>
									</label>
									<input
										{...register("firstName", {
											required: "First Name is required",
										})}
										id="firstName"
										className="w-full px-4 py-2 text-sm sm:text-base border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
										type="text"
										disabled={isLoading}
									/>
									{errors.firstName && (
										<small className="text-red-600 text-xs sm:text-sm mt-1 block">
											{errors.firstName.message}
										</small>
									)}
								</div>

								<div>
									<label
										htmlFor="lastName"
										className="block text-sm sm:text-base font-lato font-semibold text-[#A31700] mb-2"
									>
										Last Name <span className="text-red-500">*</span>
									</label>
									<input
										{...register("lastName", {
											required: "Last Name is required",
										})}
										id="lastName"
										className="w-full px-4 py-2 text-sm sm:text-base border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
										type="text"
										disabled={isLoading}
									/>
									{errors.lastName && (
										<small className="text-red-600 text-xs sm:text-sm mt-1 block">
											{errors.lastName.message}
										</small>
									)}
								</div>
							</div>

							{/* Contact Fields */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
								<div>
									<label
										htmlFor="email"
										className="block text-sm sm:text-base font-lato font-semibold text-[#A31700] mb-2"
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
										id="email"
										className="w-full px-4 py-2 text-sm sm:text-base border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
										type="email"
										disabled={isLoading}
									/>
									{errors.email && (
										<small className="text-red-600 text-xs sm:text-sm mt-1 block">
											{errors.email.message}
										</small>
									)}
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-sm sm:text-base font-lato font-semibold text-[#A31700] mb-2"
									>
										Phone <span className="text-red-500">*</span>
									</label>
									<input
										{...register("phone", { required: "Phone is required" })}
										id="phone"
										className="w-full px-4 py-2 text-sm sm:text-base border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
										type="tel"
										disabled={isLoading}
									/>
									{errors.phone && (
										<small className="text-red-600 text-xs sm:text-sm mt-1 block">
											{errors.phone.message}
										</small>
									)}
								</div>
							</div>

							{/* Service Selection */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
								<div>
									<label
										htmlFor="service"
										className="block text-sm sm:text-base font-lato font-semibold text-[#A31700] mb-2"
									>
										Which service are you interested in?{" "}
										<span className="text-red-500">*</span>
									</label>
									<select
										{...register("service", {
											required: "Service is required",
										})}
										id="service"
										className="w-full px-4 py-2 text-sm sm:text-base border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
										disabled={isLoading}
									>
										<option value="">Select a service</option>
										{services.map((service) => (
											<option key={service} value={service}>
												{service}
											</option>
										))}
									</select>
									{errors.service && (
										<small className="text-red-600 text-xs sm:text-sm mt-1 block">
											{errors.service.message}
										</small>
									)}
								</div>

								<div>
									<label
										htmlFor="serviceArea"
										className="block text-sm sm:text-base font-lato font-semibold text-[#A31700] mb-2"
									>
										Which service area are you in?{" "}
										<span className="text-red-500">*</span>
									</label>
									<select
										{...register("serviceArea", {
											required: "Service area is required",
										})}
										id="serviceArea"
										className="w-full px-4 py-2 text-sm sm:text-base border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
										disabled={isLoading}
									>
										<option value="">Select an area</option>
										{serviceAreas.map((area) => (
											<option key={area} value={area}>
												{area}
											</option>
										))}
									</select>
									{errors.serviceArea && (
										<small className="text-red-600 text-xs sm:text-sm mt-1 block">
											{errors.serviceArea.message}
										</small>
									)}
								</div>
							</div>

							{/* Button */}
							<div className="pt-2 sm:pt-4">
								<button
									type="submit"
									disabled={isLoading}
									className={`w-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white rounded-md ${
										isLoading ? "bg-red-300" : "bg-red-700 hover:bg-red-800"
									} transition-colors duration-200`}
								>
									{isLoading ? "SUBMITTING..." : "GET STARTED"}
								</button>
							</div>
						</form>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
