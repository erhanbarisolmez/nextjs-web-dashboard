'use client'
import CustomButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TelInput from "@/components/TelInput";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Box } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import LoginLayout from "../layout";

export default function Phone() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleOnChange = (value:any) => {
    setPhoneNumber(value);
    console.log('handleOnChange' + setPhoneNumber);
  }

  function handleOnSubmit() :void{
    setPhoneNumber(phoneNumber);
    console.log("handleOnSubmit" +phoneNumber);
    
  }
  return (
    <LoginLayout >  
    <>
    {/* Content */}
    <Box sx={{
      display:"grid",
      flexDirection:'column',
      p:3
    }}> 
    {/* Header Component */}
    <Header headerName={"Sign in with Apple"} headerTitle={"Phone Number"} />
    <Box
     sx={{}}
    >
    <Link href="/login">
    <KeyboardBackspaceOutlinedIcon fontSize="medium" />
    </Link>
    </Box>
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
      }}>
     <TelInput onChange={handleOnChange} />
    </Box>

    <Link href={`/login/phone/${phoneNumber}`}>    
    <CustomButton buttonTitle={"Submit"} onClick={handleOnSubmit} />
    </Link>

{/* Footer component */}
    <Footer />
    </Box>
  

</>
</LoginLayout>
 
  )
}