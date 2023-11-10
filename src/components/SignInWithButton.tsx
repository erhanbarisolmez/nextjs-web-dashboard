'use client'
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import jwt from 'jsonwebtoken'; // jsonwebtoken'ı projeye ekledik
import Link from 'next-intl/link';
import { useEffect, useState } from 'react';
interface SignInWithButtonProps{
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";
  user?: any;
  setUser?: any;
  googleText?: string;
  appleText?: string;
}

export default function SignInWithButton(props: SignInWithButtonProps) {
  const [showChild, setShowChild] = useState(false);

  const signIn =  useGoogleLogin({
    
    onSuccess: ((credentialResponse) => {
      
      console.log("Access Token: ",credentialResponse.access_token);
      console.log('Credential Response', credentialResponse);
      var accessToken = credentialResponse.access_token;
      var decoded = jwt.decode(accessToken);
      console.log("Access Token: ",decoded);
      window.location.href = '/dashboard';
    }),
    onError: () =>{
      console.log('Login Failed');
    }

  });

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  const {
    variant= "contained",
    color = "info",
    size = "medium",
    googleText,
    appleText
  } = props;
  

  return (
  <div>
    <Box sx={{
      display:'flex',
      flexDirection:{xs:'column',md:'row'},

    }}>
     
      <Button variant={variant} onClick={() => signIn()} color={color} startIcon={<GoogleIcon />} size={size}  sx={{ mr: { xs: 0, md: 1 }, mb: { xs: 2, md: 0 } }}>
      {googleText}
      </Button>
  
      <Link href={'/login/phone'} >
      <Button variant={variant}  color={color} startIcon={<AppleIcon />} size={size} fullWidth sx={{ ml: { xs: 0, md: 1 }, mt: { xs: 2, md: 0 } }}>
      
        {appleText}
       
      </Button>
      </Link>
   
    </Box>
    </div>
  )
}
