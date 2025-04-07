
export async function getServices(){

const { data, error } = await supabase
  .from('services')
  .select('*')

  if(error){
    console.error(error);
    throw new Error("services can not be loaded");
  }
  console.log(data);
  return data;
}