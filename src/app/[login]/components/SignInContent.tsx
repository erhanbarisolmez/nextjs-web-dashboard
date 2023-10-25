import CustomButton from '@/components/CustomButton';
import CustomTextfield from '@/components/CustomTextfield';
import DividerWith from '@/components/DividerWith';
import ForgotPassword from '@/components/ForgotPassword';
import Header from '@/components/Header';
import IfNot from '@/components/IfNot';
import SignInWithButton from '@/components/SignInWithButton';
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function SignInContent() {
  return (
    <>
        {/* Content */}
            <Box sx={{
            display:"grid",
            flexDirection:'column',
            p:3
          }}> 
          {/* Header */}
          <Header headerName={'Sign In'} headerTitle={'You Social Account'} />
          
          {/* Social Sign Button */}
          <SignInWithButton />

        {/* Divider*/}
         <Box sx={{
            p:3,
          }}>
               <DividerWith text={'Or with Email'} />
        </Box>

        {/* EMAIL&PASSWORD Text Field */}
            <Box sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <CustomTextfield label={'Email'} variant={'outlined'} id={''} type={'email'} autoComplete={'true'}  />
            <CustomTextfield label={'Password'} variant={'outlined'} id={''} type={'password'} autoComplete={'true'}  />     
            </Box>
       {/* Forgot Password */}
         <Box sx={{
          display:'flex',
          mt:1,
          textAlign:"right",
          justifyContent:'right',
          alignContent:'center',
          alignItems:'center'
         }}>
          <ForgotPassword />
         </Box>
         {/* Sign In Button */}
         <Box
          sx={{
            display:'flex',
            mt:2,
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center'
          }}
         >
          <CustomButton buttonTitle={'Sign In'} />
         </Box>
          {/* If Not Components  */}
          <Box
          sx={{
            display:'flex',
            mt:3,
            justifyContent:'center',
          }}>
            {/* <Typography variant="subtitle2">
            Not a member yet? <Link href={"/login/signup"} >
                <b>Sign Up</b>
               </Link>
            </Typography> */}
        <IfNot text={'Not a member yet?'} variant={'subtitle2'} link={'/login/signup'} />

          </Box>
         {/* Footer */}
         <Box sx={{
          display:'flex',
          pt:5,
          justifyContent:'center',
         }}>
        <Typography variant='caption'>
        <b><Link href={"/"}> TERMS  |</Link>
        <Link href={"/"}> PLANS  |</Link>
        <Link href={"/"}> CONTACT US</Link></b>
        </Typography>
        
         </Box>
       </Box>
   
    </>
  )
}
