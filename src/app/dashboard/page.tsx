'use client'
import { Typography } from "@mui/material";
import Link from "next/link";


export default function Dashboard() {

  return (
    <>
      <Typography variant="h4" sx={{ color:'purple'}}>
          Dashboard Page
      </Typography> 
      <Link href={"/"}>.</Link>
    </>
  )
}
