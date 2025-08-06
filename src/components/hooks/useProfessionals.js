import { useQuery } from "@tanstack/react-query";
import { getProfessionalData } from "../services/apiProfessionals";

export function useProfessionals(){
    
    //Read or get data from API using the react query
	const {data: professionals = [], isLoading} = useQuery({
		queryKey: ["ourProfessionals"],
		queryFn: getProfessionalData,
	});


    return {professionals, isLoading};
}