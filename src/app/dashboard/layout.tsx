'use client'
import { Box } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ReactNode, useEffect, useState } from 'react';

export default function DashboardLayout({children} : {children : ReactNode}) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null;
  }
  return (
    <html>
      <body>
      <Box
       sx={{
        display: "flex",
        gridTemplateColumns:'repeat(1,1fr)',
        width:"1",
        height:'100vh',
        backgroundColor:'#e3f4fb',
        justifyContent:'center',
        color:'black'
       }}
      >
       <GoogleOAuthProvider clientId="604456811509-ivvuuq5qcn3h0elfhf2lijqd6bupoemv.apps.googleusercontent.com">
        <main>{children}</main>
     </GoogleOAuthProvider>

      </Box>
      </body>
    </html>
  )
}