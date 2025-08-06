import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createAppointmentData } from "../services/apiAppointment";
import { useNavigate } from "react-router-dom";


export function useAppointment() {
    //useNavigate hook for navigation
    const navigate = useNavigate();

    //The useQueryClient hook is used for refreshing the cache management
    const queryClient = useQueryClient();

      //Destructured the useMutation and get the extracted data
        const { mutate, isLoading } = useMutation({

            mutationFn: (formData) => createAppointmentData(formData),
            //The onSuccess function is called if the data is successfully sent
            onSuccess: () => {
                toast.success("Your form was successfully submitted");
                queryClient.invalidateQueries({ queryKey: ["appointment"] }); // Invalidating the cache for appointment query
                //Redirects immediately on success, and also delays navigation briefly to let users read the success toast.
                setTimeout(() => navigate("/thankYou"), 3000);  
            },
            
            //The onError function is called if there's an error while sending the data to the API
            onError: (err) => toast.error(err.message), // Displaying error message if mutation fails
        });
        
    //The useAppointment function or custom hook returns the destructured data from the useMutation hook
    return {mutate, isLoading};
}