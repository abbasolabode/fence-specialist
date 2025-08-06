import supabase from "./supabase";

export async function createAppointmentData(formData) {
	const { data, error } = await supabase
		//Querying the appointment table in the supabase
		.from("appointment")
		.insert([formData]); //Insert the data received from the input fields

	if (error) {
		console.error(error);
		throw new Error("Data could not be sent: Failed!");
	}

	//Return data
	return data;
}

export async function getAppointmentData() {
	const { data, error } = await supabase
		.from("appointment")
		.select("*")

	if (error) {
		console.error(error);
		throw new Error("Data could not be sent: Failed!");
	}
    console.log(data)
	return data;
}
