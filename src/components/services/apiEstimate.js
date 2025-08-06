import supabase from "./supabase";

export async function getEstimateData(){
const { data, error } = await supabase
.from('getEstimate')
.select('*')

 if(error) {
    console.error(error);
    throw new Error("There's an error while fetching data")
 }

 return data;

}