import supabase from "./supabase";

export async function getContactFormData(newData){

const { data, error } = await supabase
.from('contactForm')
.insert([newData])
//.select()

if(error){
    console.error(error);
    throw new Error("There's an error while creating data")
}

return data;
}




