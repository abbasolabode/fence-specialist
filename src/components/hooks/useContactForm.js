import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getContactFormData } from "../services/apiContactForm";
import toast from "react-hot-toast";

export function useContactForm(){

    const queryClient = useQueryClient(); // Getting the query client for managing cache

	const { mutate, isLoading } = useMutation({
		mutationFn: getContactFormData, // Function to call the API for creating new data

		onSuccess: () => {
			toast.success("New data was successfully created");
			queryClient.invalidateQueries({ queryKey: ["contactForm"] }); // Invalidating the cache for contactUsForm query
		},

		onError: (err) => toast.error(err.message), // Displaying error message if mutation fails
	});


    return {mutate, isLoading }
}