import { FaSpinner } from "react-icons/fa";

export default function Spinner() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="flex flex-col items-center justify-center bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
				<FaSpinner className="text-4xl animate-spin text-blue-500 mb-3" />
				<p className="text-lg font-poppins text-gray-700">Please wait...</p>
			</div>
		</div>
	);
}
