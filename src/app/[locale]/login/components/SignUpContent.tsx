
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
  const t = useTranslations(); // ?
  return (
    <Box sx={{
      display:"grid",
      flexDirection:'column',
      p:3
    }}> 
    <Header headerName={"Sign Up"} headerTitle={"Create Account"} />
     {/* Social Sign Button */}
     <SignInWithButton googleText={t('sign-in-with-google')} appleText={t('sign-in-with-apple')}/>

{/* Divider*/}
 <Box sx={{
    p:3,
  }}>
       <DividerWith text={'Or with Email'} />
</Box>

{/* CustomTextfield EMAIL&PASSWORD */}
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}>
    <CustomTextfield label={'Email'} variant={'outlined'} id={''} type={'email'} autoComplete={'true'}  />
    <CustomTextfield label={'Password'} variant={'outlined'} id={''} type={'password'} autoComplete={'true'}  />
    <CustomTextfield label={'Repeat Password'} variant={'outlined'} id={''} type={'password'} autoComplete={'true'}  />          
    </Box>
    <Box sx={{
      display:'flex',
      alignItems:'center',
    }}>
    <Checkbox color="default" /><CustomLink text={"I Accept the"} link={"/login/signup"} boldLinkText="Terms" />

    </Box>
    <Box
          sx={{
            display:'flex',
            mt:2,
            justifyContent:'center',
          }}>
    <CustomButton buttonTitle={"Sign Up"}/>
    </Box>
    {/* CustomLink Components SignUp */}
    <Box
          sx={{
            display:'flex',
            mt:3,
            justifyContent:'center',
          }}>
       
        <CustomLink text={'Already have an Account?'} variant={'subtitle2'} link={'/login'} boldLinkText='Sign in' />
        
    </Box>
    <Footer />
    </Box>
  )
}
