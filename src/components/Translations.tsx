'use client'
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import AdvertSpace from "./AdvertSpace";

interface TranslationsProps{
  headerName: React.ReactNode
}
export const Translations = (props : TranslationsProps) => {
  const t = useTranslations('LOGIN.LeftContent');
  return (
    <>
      {/* Content */}
      <Box sx={{
            display:"grid",
            flexDirection:'column',
            p:3
          }}> 
        <AdvertSpace headerName={t('header-name')} />
     
       </Box>
  
        </>

  )
}
