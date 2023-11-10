
import CustomButton from '@/components/CustomButton';
import CustomLink from '@/components/CustomLink';
import CustomTextfield from '@/components/CustomTextfield';
import DividerWith from '@/components/DividerWith';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import SignInWithButton from '@/components/SignInWithButton';
import { Box, Link } from "@mui/material";
import { useTranslations } from 'next-intl';


export default function LoginPage() {
  const t = useTranslations('LOGIN.SignIn'); // 'product' dil dosyasının anahtarını buraya ekleyin
 
  return (
        <Box sx={{
            display:"grid",
            flexDirection:'column',
            p:3
         }}> 
          <Box sx={{}}>
          <LanguageSwitcher hrefEN={'/login'} hrefTR={'/login'} />
          </Box>
          {/* Header */}
          <Header  headerName={t('header-name')} headerTitle={t('header-title')}/>
          
          {/* Social Sign Button */}
          <SignInWithButton size='medium'  googleText={t('sign-in-with-google')} appleText={t('sign-in-with-apple')}/>

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
            <CustomTextfield label={t('email-text')} variant={'outlined'} id={'email'} type={'email'} autoComplete={'true'}  />
            <CustomTextfield label={t('password-text')} variant={'outlined'} id={'password'} type={'password'} autoComplete={'true'}  />     
            </Box>
       {/* CustomLink Component Forgot Password */}
         <Box sx={{
          display:'flex',
          mt:1,
          textAlign:"right",
          justifyContent:'right',
          alignContent:'center',
          alignItems:'center'
         }}>
          <CustomLink text={''} link={'/login/password-reset'} variant='subtitle2' linkText={t('forgot-password')} />
         </Box>
         {/* CustomButton Components Sign In Button */}
         <Box
          sx={{
            display:'flex',
            mt:2,
            justifyContent:'center',
        
          }}
         >
          <Link href='/dashboard' width={'100%'}>
          <CustomButton buttonTitle={t('sign-in-button')} />
          </Link>
         </Box>
          {/* CustomLink Components SignUp */}
          <Box
          sx={{
            display:'flex',
            mt:3,
            justifyContent:'center',
          }}>

        <CustomLink text={t('not-a-member-yet')} variant={'subtitle2'} link={'/login/signup'} boldLinkText={t('sign-up')} />
        
          </Box>
         {/* Footer */}
  
          <Footer terms={t('footer-terms')} plans={t('footer-plans')} contactUs={t('footer-contact-us')} />
          
       </Box>
   

        

   
  )
}
