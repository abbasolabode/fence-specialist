import {format, parseISO} from "date-fns";

//Function for formatting date and time
export function formatDateAppointment(dateISOString){
  const date = parseISO(dateISOString) // Convert ISO string to date object
   
  return format(date, "MMMM do, yyyy 'at' h:mm a "); //e.g., "July 8th, 2025 at 1:47am"
}