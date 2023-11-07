'use client'
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Box, Grid } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { NextIntlProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import './globals.css';
interface RootLayoutProps{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const locales = ['en', 'tr'];
const messages = {}; // Çeviri verileri

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
     <NextIntlProvider messages={messages} locale={locale}>
      <Grid container>
      <Box sx={{}}>
          <LanguageSwitcher />
        </Box>
      <Box
       sx={{
        display: "flex",
        gridTemplateColumns:'repeat(1,1fr)',
 
        backgroundColor:'black',
        justifyContent:'center',
       }}
      >
      
      <GoogleOAuthProvider clientId="604456811509-ivvuuq5qcn3h0elfhf2lijqd6bupoemv.apps.googleusercontent.com">
    
      {children}
     

     </GoogleOAuthProvider>
      </Box>
      </Grid>
      </NextIntlProvider>
      </body>
    </html>

  )
}