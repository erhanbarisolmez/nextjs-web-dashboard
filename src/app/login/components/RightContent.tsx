import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Link from "next/link";
export default function RightContent() {
  return (
    <>
        {/* Content */}
        <Box
          sx={{
            display:'flex',
            backgroundColor:'#3370a4',
            width:'40%',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
               <Box sx={{
            display:"grid",
            flexDirection:'column',
            p:3
          }}> 
          {/* Header */}
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            mb:6,
            justifyContent:'center',
            alignItems:'center',
          }}>

              <Typography variant="h3" >
                Sign In             
              </Typography>
              <Typography variant="subtitle1">
              Your Social  Accounts
              </Typography>
          </Box>
          
          {/* Button */}
          <Box sx={{
            display:'flex',
            flexDirection:{xs:'column',md:'row'},
            
          }}>
            <Button variant="contained" color={'info'} startIcon={<GoogleIcon />} size="medium" sx={{ mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
              Sign in with google
            </Button>
            <Button variant="contained"  color={'info'} startIcon={<AppleIcon />} size="medium"  sx={{ ml: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }}
>
              Sign in with Apple
            </Button>
          </Box>
        {/* Divider*/}
               <Box sx={{
                p:3,
               }}>
               <Divider orientation="horizontal" variant="fullWidth"  flexItem >
                   <Typography variant="caption">Or with Email</Typography>
              </Divider>
               </Box>

        {/* Text Field */}
            <Box sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <TextField id="outlined-basic" label="Email" variant="outlined"   sx={{
              width:'100%',
              backgroundColor:'white',
        
            }} />
           <TextField id="outlined-basic" label="Password" variant="outlined"  sx={{
              width:'100%',
              backgroundColor:'white',
              mt:2
        
            }} />
            </Box>
             {/* Forget Password */}
         <Box sx={{
          display:'flex',
          mt:2,
          textAlign:"right",
          justifyContent:'right',
          alignContent:'center',
          alignItems:'center'
         }}>
        <Link href={"/login/passwordreset"}>
          <Typography variant="subtitle2">
          Forgot Password?
          </Typography>
        </Link>
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
          <Button variant="contained" color={'info'} size='large' sx={{
            width:'100%',
          }} >
              Sign In
            </Button>
         </Box>
          {/* SIGN UP  */}
         
          <Box
          sx={{
            display:'flex',
            mt:3,
            justifyContent:'center',
          }}>
            <Typography variant="subtitle2">
            Not a member yet? <Link href={"/login/signup"} >
                <b>Sign Up</b>
               </Link>
            </Typography>
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
       </Box>
    </>
  )
}
