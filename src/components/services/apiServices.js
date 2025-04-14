// Import the Supabase client and URL from the supabase.js file
import supabase from "./supabase";

export async function getServices(){
const { data, error } = await supabase
  .from('services')
  .select('*')

  if(error){
    console.error(error);
    throw new Error("services can not be loaded");
  }
  
  return data;

}



