import { useQuery } from "@tanstack/react-query";
import { getPastWorkImages} from "../services/apiPastWork";

//Custom hook
export function usePastWorkImage(){
   const {
		data: pastWorkImages,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["fence-image"],
		queryFn: getPastWorkImages,
	});

   // if(pastWorkImages) return console.log("data fetched:", pastWorkImages);

    return {pastWorkImages, isLoading};
}