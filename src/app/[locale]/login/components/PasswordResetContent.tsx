import CustomButton from "@/components/CustomButton";
import CustomTextfield from "@/components/CustomTextfield";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Box } from "@mui/material";
import Link from "next/link";
export default function PasswordResetContent() {
  return (
  <>
          {/* Content */}
          <Box sx={{
            display:"grid",
            flexDirection:'column',
            p:3
          }}> 
          {/* Header Component */}
          <Header headerName={"Password Reset"} headerTitle={"Enter your email to reset your password"} />
          <Box
            sx={{
            
            }}
          >
          <Link href="/login">
          <KeyboardBackspaceOutlinedIcon fontSize="medium" />
          </Link>

          </Box>
          <Box sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center'
            }}>
          <CustomTextfield 
          label={"Email"}
          variant={"outlined"} 
          id={""} 
          type={"email"}
          autoComplete={"true"} />
          </Box>

          <CustomButton buttonTitle={"Submit"} />
   

      {/* Footer component */}
          <Footer />
          </Box>
        

  </>

  )
}
