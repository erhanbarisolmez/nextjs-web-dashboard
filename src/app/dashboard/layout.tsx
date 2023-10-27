'use client'
import { Box } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';

export default function DashboardLayout({children} : {children : ReactNode}) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
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
      {children}

      </Box>
      </body>
    </html>
   

  )
}