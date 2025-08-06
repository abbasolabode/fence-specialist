import supabase from "./supabase";

export async function getBlogArticles() {
	const { data, error } = await supabase.from("blogArticles").select("*");

	if (error) {
		console.error(error);
		throw new Error("There's an error while fetching data");
	}

	return data;
}
