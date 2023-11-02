'use client'
import { Typography } from "@mui/material";
import Link from "next/link";

interface DashboardProps{
user? : any;
}
export default function Dashboard(props : DashboardProps) {

  return (
    <>
      <Typography variant="h4" sx={{ color:'purple'}}>
          Dashboard Page
      </Typography> 
      <Typography variant="caption" sx={{ color: 'purple' }}>
        Welcome, {props.user?.name || 'Guest'}! {/* props.user ile kullanıcı adını görüntüleme */}
      </Typography>
      <Link href={"/"}>.</Link>
    </>
  )
}
