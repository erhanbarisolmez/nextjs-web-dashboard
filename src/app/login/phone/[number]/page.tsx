'use client'
import CustomButton from "@/components/CustomButton";
import CustomLink from "@/components/CustomLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Box, Link, TextField, Typography } from "@mui/material";
import LoginLayout from "../../layout";

export default function TwoFactorVerification(...[props] : any) {

  return (
    <>
    <LoginLayout>
    <Box sx={{
            display:"flex",
            flexDirection:'column',
            width:'60%'
          }}> 
    <Header 
    headerName={"Two Factor Verification"}
    headerTitle={"Enter the verification code we sent to"}
    />
    <Typography variant="body1" 
      sx={{
        display:"flex",
        justifyContent:"center",
        
      }}>
        <b> ******7899</b>
     </Typography>

 
     <Link href="/login/phone">
          <KeyboardBackspaceOutlinedIcon fontSize="medium" sx={{color:'white'}}/>
    </Link>
         
        
     <Typography variant="subtitle2" 
      sx={{
        display:"flex",
        justifyContent:"flex-start",
        mt:2
      }}>
        
        <b>Type your 6 digit security code</b>
     </Typography>
     <Box sx={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
      
     }}>
      <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center', // Bu, altı metin alanını yatay olarak ortalar
      mt: 2, // İhtiyacınıza bağlı olarak aralığı ayarlayabilirsiniz
    }}
  >
    {[1, 2, 3, 4, 5, 6].map((index) => (
      <Box key={index} sx={{ mr: 1, textAlign: 'center', width:'30%',backgroundColor:'white', borderRadius:1, }}>
        <TextField
          variant="outlined"
          maxRows={1}
        />

      </Box>
    ))}
  </Box>

  </Box>
  <Box sx={{mt:3}}>
  <CustomButton buttonTitle={"Submit"} />
  </Box>
  <Box sx={{
    display:'flex',
    flexDirection:'row',
    mt:3,
    justifyContent:'center'
  }}>  
 <CustomLink text={"Didn't get the code?"} link={"Resend"} boldLinkText="Resend" />
  <Box sx={{ml:1}}>
  <CustomLink text={"or"} link={"Resend"} boldLinkText="Call Us "  />
  </Box>
  </Box>

  <Footer />
    </Box>
   </LoginLayout>
    </>
  )
}
