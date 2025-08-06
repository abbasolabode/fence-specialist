/* eslint-disable no-unused-vars */

import { formatDateAppointment } from "../helper";
import { useAppointmentData } from "../hooks/useAppointmentData";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ThankYou() {
	//Consuming the useAppointmentData
	const { appointmentData = [] } = useAppointmentData();

    //Empty variable
    let appointmentDataObj;
    
	//Checks if the appointmentData is greater than 0, if TRUE assign value to the empty variable 
	if (appointmentData.length > 0) appointmentDataObj = appointmentData.slice(-1)[0]?.created_at;

	return (
		<div className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 bg-gray-50">
			<header className="w-full max-w-3xl">
				<Navbar />
			</header>

			<main className="w-full max-w-md min-h-[60rem]  flex justify-center items-center">
				<div className="flex flex-col justify-center min-h-full items-center text-center space-y-4   bg-white border shadow-lg shadow-purple/30 py-6 px-4 rounded-xl">
					<h1 className="text-3xl sm:text-4xl font-bold font-lato text-[#0164A3]">
						Your Appointment has been booked! 🎉
					</h1>
					{/* Date and Time */}
					<p className="italic font-lato text-gray-700">Booked today: {appointmentDataObj && formatDateAppointment(appointmentDataObj)}</p>
					<p className="text-sm sm:text-base font-lato text-[#A31700]">
						Thank you for booking an appointment. Your appointment is scheduled
						and a representative of{" "}
						<span className="font-semibold italic">Rachuna Fence LLC</span> will reach out shortly to confirm.
						Please check your email for confirmation. If you have any questions,
						please feel free to contact us.
					</p>
				</div>
			</main>
             
			{ /*Footer */}
			<Footer />
		</div>
	);
}