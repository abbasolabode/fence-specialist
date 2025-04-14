import { useQuery } from "@tanstack/react-query";
import { getVarieties} from "../services/apiVariety";

export function useVarieties(){
    const {
            data: varieties,
            isLoading: isLoadingVarieties,
            error: errorVariety,
        } = useQuery({
            queryKey: ["variety"],
            queryFn: getVarieties,
        });
    
        return {varieties, isLoadingVarieties, errorVariety}; 
}