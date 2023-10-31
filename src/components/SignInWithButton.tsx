'use client'
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
interface SignInWithButtonProps{
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";

}

export default function SignInWithButton(props: SignInWithButtonProps) {
  const [showChild, setShowChild] = useState(true);
  const router = useRouter(); 
  const signIn = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
      router.push('/dashboard');
    },
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

  } = props;
  

  return (
    <div>
    <Box sx={{
      display:'flex',
      flexDirection:{xs:'column',md:'row'},
    }}>
      
      
      <Button variant={variant} onClick={() => signIn()} color={color} startIcon={<GoogleIcon />} size={size} sx={{ mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
        Sign in with Google
      </Button>
     
      <Link href={'/login/phone'} >
      <Button variant={variant}  color={color} startIcon={<AppleIcon />} size={size}  sx={{ ml: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }}>
      
        Sign in with Apple
       
      </Button>
      </Link>
   
    </Box>
    </div>
  )
}
