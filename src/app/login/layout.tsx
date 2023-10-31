'use client'
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import LeftContent from "./components/LeftContent";

interface LayoutProps {

  children: React.ReactNode;
}

export default function LoginLayout({ children}: LayoutProps) {
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
            width:'60%',
            display:'flex',
            justifyContent:'center',
            textAlign:'center',
            alignItems:'center'
          }}
        >
        
       <LeftContent />
         
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
   
          {children}
        
        </Box>
      </Box>
      </Grid>
      </body>
   </html>
  )
}
