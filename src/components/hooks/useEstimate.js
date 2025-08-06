import { useQuery } from "@tanstack/react-query";
import { getEstimateData } from "../services/apiEstimate";

export function useEstimate() {
  const { data: estimates, isLoading } = useQuery({
        queryKey: ["getEstimate"],
        queryFn: getEstimateData,
    });

    
  return { estimates, isLoading};
}
