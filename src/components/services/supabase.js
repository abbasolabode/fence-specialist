
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bvkxceokggqtneiapoys.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2a3hjZW9rZ2dxdG5laWFwb3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1Mzk1MDIsImV4cCI6MjA1NDExNTUwMn0.b8bvxlY7RVFat3WCuIFItPzKTskChZ_WeAO_xB4QuTg";
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;