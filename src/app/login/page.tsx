import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>

<Grid container>


      <Box
       sx={{
        display: "flex",
        gridTemplateColumns:'repeat(1,1fr)',
        width:"1",
        height:'100vh',
        backgroundColor:'gray',
        justifyContent:'center'
       }}
      >

        <Box
          sx={{
            color:'black',
            backgroundColor:'#e3f4fb',
            width:'60%'
          }}
        >
            Left
        </Box>
        <Box
          sx={{
            display:'flex',
            backgroundColor:'#3370a4',
            width:'40%',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
           {/* Content */}
          <Box sx={{
            display:"flex",
            flexDirection:'column'
          }}> 
          {/* Header */}
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            mb:2,
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
            justifyContent:'center'
          }}>
            <Button variant="contained">
              Sign in with google
            </Button>
            <Button variant="contained" sx={{ml:2}}>
              Sign in with Apple
            </Button>
          </Box>
        {/* Divider*/}
               <Box sx={{
                mt:5,
               }}>
               <Divider orientation="horizontal" flexItem >
                   <Typography variant="caption">Or with Email</Typography>
              </Divider>
               </Box>

        {/* Text Field */}
            <Box sx={{
              mt:2
            }}>
            <TextField id="outlined-basic" label="Email" variant="outlined"  sx={{
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
          mt:2,
          textAlign:"right",
         }}>
        <Link href="/">
          <Typography variant="subtitle2">
          Forgot Password?
          </Typography>
        </Link>
         </Box>
         {/* Sign In Button */}
         <Box
          sx={{
            mt:4
          }}
         >
          <Button variant="contained" sx={{
            width:'100%'
          }} >
              Sign In
            </Button>
         </Box>
          </Box>
      
        </Box>
      </Box>
      </Grid>
    </>

  )
}
