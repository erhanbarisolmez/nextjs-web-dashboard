import AdvertSpace from "@/components/AdvertSpace";
import { Box } from "@mui/material";

interface LeftContentProps{
  test: string;
}
export default function LeftContent() {

  return (
    <>
      {/* Content */}
      <Box sx={{
            display:"grid",
            flexDirection:'column',
            p:3
          }}> 
        <AdvertSpace />
       </Box>
  
        </>

  )
}
