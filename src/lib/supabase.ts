import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://midegjawikeldbkgbrqq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZGVnamF3aWtlbGRia2dicnFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMDIxNTMsImV4cCI6MjA1MzU3ODE1M30.UHwKC94rIRHGKyBDh-BJRdqJCuiGO8yJpDPm-JQgQ88";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);