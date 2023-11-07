import CustomButton from "@/components/CustomButton";
import CustomTextfield from "@/components/CustomTextfield";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function PasswordResetContent() {

  const t = useTranslations('LOGIN.PasswordReset');
  return (
  <>
          {/* Content */}
          <Box sx={{
            display:"grid",
            flexDirection:'column',
            p:3
          }}> 
          {/* Header Component */}
          <Header headerName={t('header-name')} headerTitle={t('header-title')} />
          <Box
            sx={{
            
            }}
          >
          <Link href="/login">
          <KeyboardBackspaceOutlinedIcon fontSize="medium" />
          </Link>

          </Box>
          <Box sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center'
            }}>
          <CustomTextfield 
          label={t('email-text')}
          variant={"outlined"} 
          id={""} 
          type={"email"}
          autoComplete={"true"} />
          </Box>

          <CustomButton buttonTitle={t('button-text')} />
   

      {/* Footer component */}
      <Footer terms={t('footer-terms')} plans={t('footer-plans')} contactUs={t('footer-contact-us')} />
          </Box>
        

  </>

  )
}
