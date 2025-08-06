import { useQuery } from "@tanstack/react-query";
import { getServices } from "../services/apiServices";

export function useServices(){
	
    const {
		data: services,
		isLoading,
	} = useQuery({
		queryKey: ["services"],
		queryFn: getServices,
	});

	//Returned data object from the custom hook
    return {services, isLoading,};
}