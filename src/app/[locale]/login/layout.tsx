'use client'
import { Box, Grid } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import RootLayout from "../layout";
import LeftContent from "./components/LeftContent";
 
import AdvertSpace from "@/components/AdvertSpace";
import { IntlProvider, useTranslations } from "next-intl";
import { useRouter } from 'next-intl/client';


interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
const locales = ['en', 'tr'];
export default function LoginLayout({ children, params:{locale}}: LayoutProps) {
  const t = useTranslations('LOGIN.LeftContent');
    const router = useRouter();
    // Validate that the incoming `locale` parameter is valid
    const isValidLocale = locales.some((cur) => cur === locale);
    if (!isValidLocale) notFound();
  
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  
  return (
    <IntlProvider locale={locale}>
    <RootLayout params={{
      locale: locale
    }}>
    <html lang={locale}>
      <body>
      <Grid container>
      <Box
      
       sx={{
        display: 'flex',
        flexDirection: 'row',
        gridTemplateColumns: 'repeat(1, 1fr)',
        width: "100%",
        height: '100vh', // Set to 100% of the viewport height
        justifyContent: 'center',
        alignContent: 'space-around',
      
       }}
      >
          <Box
          sx={{
            color:'black',
            backgroundColor:'#e3f4fb',
            width:'60%',
            display:'flex',
            justifyContent:'center',
            textAlign:'center',
            alignItems:'center'
          }}
        >
        
       <LeftContent  >
   
        <AdvertSpace headerName={t("header-name")}  />
       </LeftContent>
         
        </Box>
     
      <Box
          sx={{
            display:'flex',
            backgroundColor:'#3370a4',
            width:'40%',
            justifyContent:'center',
            alignItems:'center',
          }}
        >
      
      <GoogleOAuthProvider clientId="604456811509-ivvuuq5qcn3h0elfhf2lijqd6bupoemv.apps.googleusercontent.com">
        {children}
       </GoogleOAuthProvider>
      
        </Box>
      </Box>
      </Grid>
      </body>
   </html>
   </RootLayout>
   </IntlProvider>
  )
}