import { Button } from "@mui/material";
import Link from "next/link";

export default function AdminSettings() {
  return(
    <>
        <div>AdminSettings</div>
        <Link href="/admin/deneme">
    <Button 
    variant="contained"
    >
    Pages
  </Button>
  </Link>
    </>
    
  )
}
