import Header from "@/components/Header";
import { Box } from "@mui/material";

export default function PasswordResetContent() {
  return (
  <>
          {/* Content */}
          <Box sx={{
            display:"grid",
            flexDirection:'column',
            p:3
          }}> 
              <Header headerName={"Password Reset"} headerTitle={"Enter your email to reset your password"} />

          </Box>
  </>

  )
}
