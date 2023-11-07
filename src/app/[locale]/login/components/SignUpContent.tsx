import CustomButton from "@/components/CustomButton";
import CustomLink from "@/components/CustomLink";
import CustomTextfield from "@/components/CustomTextfield";
import DividerWith from "@/components/DividerWith";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SignInWithButton from "@/components/SignInWithButton";
import { Box } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { useTranslations } from "next-intl";
export default function SignUpContent() {
  const t = useTranslations('LOGIN.SignUp'); // ?
  return (
    <Box sx={{
      display:"grid",
      flexDirection:'column',
      p:3
    }}> 
    <Header headerName={t('header-name')} headerTitle={t('header-title')} />
     {/* Social Sign Button */}
     <SignInWithButton googleText={t('sign-in-with-google')} appleText={t('sign-in-with-apple')}/>

{/* Divider*/}
 <Box sx={{
    p:3,
  }}>
       <DividerWith text={t('or-with-email')} />
</Box>

{/* CustomTextfield EMAIL&PASSWORD */}
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}>
    <CustomTextfield label={t('email-text')} variant={'outlined'} id={''} type={'email'} autoComplete={'true'}  />
    <CustomTextfield label={t('password-test')} variant={'outlined'} id={''} type={'password'} autoComplete={'true'}  />
    <CustomTextfield label={t('repeat-password-text')} variant={'outlined'} id={''} type={'password'} autoComplete={'true'}  />          
    </Box>
    <Box sx={{
      display:'flex',
      alignItems:'center',
    }}>
    <Checkbox color="default" /><CustomLink text={t('i-accept-the')} link={"/login/signup"} boldLinkText={t('terms')} />

    </Box>
    <Box
          sx={{
            display:'flex',
            mt:2,
            justifyContent:'center',
          }}>
    <CustomButton buttonTitle={t('sign-up-button')}/>
    </Box>
    {/* CustomLink Components SignUp */}
    <Box
          sx={{
            display:'flex',
            mt:3,
            justifyContent:'center',
          }}>
       
        <CustomLink text={t('already-have-an-account')} variant={'subtitle2'} link={'/login'} boldLinkText={t('sign-in-link') }/>
        
    </Box>
    <Footer terms={t('footer-terms')} plans={t('footer-plans')} contactUs={t('footer-contact-us')} />
    </Box>
  )
}
