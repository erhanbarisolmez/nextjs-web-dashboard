import { Button } from "@mui/material";
import Link from "next/link";

export default function AdminPage(props:any) {
  console.log(props);
  return (
  
    <>
    <div>AdminPage</div>
    <Link href="/admin/settings">
  
    <Button 
    variant="contained"
    >
     Geri
   </Button>

   </Link>
   <Link href="/docs/settings/test/deneme/asd">
  
  <Button 
  variant="contained"
  >
   docs settings
 </Button>

 </Link>
   </>
  )
}
