'use client'
import { Box, Grid } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import './globals.css';
interface RootLayoutProps{
  children?: React.ReactNode;
  params?: any;
}

const locales = ['en', 'tr'];

export default function RootLayout({children, params: {locale}} : RootLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();


  const [showChild, setShowChild] = useState(true);
  useEffect(() => {
    setShowChild(true);
    
  }, [])

  if (!showChild) {
    return null;
  }
  
  return (
    <html lang={locale}>
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
