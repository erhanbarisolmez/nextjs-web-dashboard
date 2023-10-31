'use client'
import { Box, Grid } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showChild, setShowChild] = useState(true);
  
  useEffect(() => {
    setShowChild(true);
    
  }, [])

  if (!showChild) {
    return null;
  }
  return (
    <html>
     <body>
      <Grid container>
      <Box
       sx={{
        display: "flex",
        gridTemplateColumns:'repeat(1,1fr)',
        width:"1",
        height:'100vh',
        backgroundColor:'black',
        justifyContent:'center',
       }}
      >
      <GoogleOAuthProvider clientId="604456811509-ivvuuq5qcn3h0elfhf2lijqd6bupoemv.apps.googleusercontent.com">
        <main>{children}</main>
     </GoogleOAuthProvider>
      </Box>
      </Grid>

      </body>
    </html>
  
  )
}
