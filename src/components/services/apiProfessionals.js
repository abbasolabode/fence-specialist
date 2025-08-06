import supabase from "./supabase";

export async function getProfessionalData(){
    
const { data, error } = await supabase
.from('ourProfessionals')
.select('*')


if(error) throw new Error("There's an error while downloading the data");

return data;

}