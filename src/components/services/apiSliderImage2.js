import supabase from "./supabase";

export async function getSliderImagesData2() {
	const { data, error } = await supabase.from("sliderImage2").select("*");

	if (error) {
		throw new Error("There's an error while retrieving data from the server");
	}

	return data;
}
