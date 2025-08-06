import { Link } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Spinner from "../components/ui/Spinner";
import Footer from "../components/ui/Footer";
import { IoTimeOutline } from "react-icons/io5";
import { useEstimate } from "../components/hooks/useEstimate";

export default function Estimate() {
	//Destructuring the useEstimate custom hook 
	const { estimates = [], isLoading } = useEstimate();
    
	//If the isLoading is TRUE return the Spinner component
	if (isLoading) return <Spinner />;

	return (
		<main className="min-h-screen flex flex-col">
			{/* The Navbar component */}
			<Navbar />

			{/* Body container */}
			<div className="flex-grow w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-8 mt-16 md:mt-20 lg:mt-24">
				{/* Content card */}
				<div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8 md:p-10">
					{/* Heading */}
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10">
						Premier Fence Consultations
					</h2>

					{/* Estimates grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
						{estimates?.map((estimate) => (
							<div
								key={estimate?.id}
								className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
							>
								<Link
									to={estimate?.url}
									className="flex flex-col sm:flex-row h-full"
								>
									{/* Image container */}
									<div className="w-full sm:w-1/3 h-48 sm:h-auto">
										<img
											className="w-full h-full object-cover"
											src={estimate?.image}
											alt={estimate?.appointment}
											loading="lazy"
										/>
									</div>

									{/* Content container */}
									<div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
										<h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
											{estimate?.appointment}
										</h3>

										<div className="flex items-center text-gray-600">
											<IoTimeOutline className="mr-2" />
											<span>{estimate?.duration}</span>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}