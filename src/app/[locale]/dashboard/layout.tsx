'use client'
import { Box } from '@mui/material';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import RootLayout from '../layout';
interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
const locales = ['en', 'tr'];

export default function DashboardLayout({ children, params:{locale}}: LayoutProps) {
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
    <RootLayout  params={{
      locale: locale
    }} >
    <html lang={locale}>
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
        <div>{children}</div>


      </Box>
      
      </body>
    </html>
    </RootLayout>
  )
}