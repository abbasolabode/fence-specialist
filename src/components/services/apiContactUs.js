import supabase from "./supabase";

export async function getContactUsData(newData) {
	const { data, error } = await supabase.from("contactUs").insert([newData]);
	//.select()

	if (error) {
		console.error(error);
		throw new Error("There's an error while creating data");
	}

	return data;
}
