import { useQuery } from "@tanstack/react-query";
import { getSliderImagesData2 } from "../services/apiSliderImage2";



export function useSliderImage2(){
    console.log("useSliderImage2 hook is being called"); // Add this
    const {data, isLoading} = useQuery({
       queryKey: ["sliderImage2"],
       queryFn: getSliderImagesData2,
    })

    console.log(data)
    return {data, isLoading};
}