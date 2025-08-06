import supabase from "./supabase";

export async function getSliderImagesData() {

const { data, error } = await supabase
.from('sliderimage1')
.select('*')


  if(error) {
    throw new Error("There was an while retrieving data from the server")
  }

  return data;

}