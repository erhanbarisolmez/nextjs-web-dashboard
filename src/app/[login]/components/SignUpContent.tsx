import Header from "@/components/Header";
import { Box } from "@mui/material";

export default function SignUpContent() {
  return (
    <Box sx={{
      display:"grid",
      flexDirection:'column',
      p:3
    }}> 
    <Header headerName={"Sign Up"} headerTitle={"Create Account"} />
    </Box>
  )
}
