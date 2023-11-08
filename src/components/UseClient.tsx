'use client'
import CustomButton from "@/components/CustomButton";
import TelInput from "@/components/TelInput";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Box } from "@mui/material";
import Link from "next/link";
import { useState } from 'react';



export const UseClient = () => {
  
  const [phoneNumber, setPhoneNumber] = useState("");
   const handleOnChange = (value: any) => {
     setPhoneNumber(value);
     console.log('handleOnChange' + setPhoneNumber);
   }
 
   function handleOnSubmit(): void {
     setPhoneNumber(phoneNumber);
     console.log("handleOnSubmit" + phoneNumber);
   }
 
  return (
    <>
    
    <Box sx={{
      display: "grid",
      p: 3
    }}>

  
        <Link href="/login">
          <KeyboardBackspaceOutlinedIcon fontSize="medium" />
        </Link>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        <TelInput onChange={handleOnChange} />
      </Box>

      <Link href={`/login/phone/${phoneNumber}`}>
        <CustomButton buttonTitle={"Submit"} onClick={handleOnSubmit} />
      </Link>

      {/* Footer component */}
 



    </>

  )
}
