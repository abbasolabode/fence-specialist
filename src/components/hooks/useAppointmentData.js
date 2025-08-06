import { useQuery } from "@tanstack/react-query";
import { getAppointmentData } from "../services/apiAppointment";


export function useAppointmentData(){
  const {data: appointmentData} = useQuery({
    queryKey: ["appointment"], //Querying the appointment key in the supabase
    queryFn:  getAppointmentData, //calling the getAppointmentData API to fetch data
   })
   
   //Returned data
   return {appointmentData};
}