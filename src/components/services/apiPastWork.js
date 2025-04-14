import supabase from "./supabase";

export async function getPastWorkImages(){

const { data, error } = await supabase
  .from('fence-image')
  .select("*")
  

  if(error){
    console.error(error);
    throw new Error("fence images can not be loaded");
  }

  return data;
}