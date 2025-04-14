import supabase from "./supabase";

export async function getVarieties() {
    const { data, error } = await supabase
        .from("variety")
        .select("*");

    if (error) {
        console.error(error);
        throw new Error("Varieties can not be loaded");
    }

    return data;
}