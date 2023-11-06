import CustomButton from '@/components/CustomButton';
import CustomLink from '@/components/CustomLink';
import CustomTextfield from '@/components/CustomTextfield';
import DividerWith from '@/components/DividerWith';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SignInWithButton from '@/components/SignInWithButton';
import { Box, Link } from "@mui/material";
import { useTranslations } from 'next-intl';


export default function LoginPage() {
  const t = useTranslations('LOGIN.SignUp'); // 'product' dil dosyasının anahtarını buraya ekleyin
 
  return (
        <Box sx={{
            display:"grid",
            flexDirection:'column',
            p:3
         }}> 
          {/* Header */}
          <Header  headerName={t('header-name')} headerTitle={t('header-title')}/>
          
          {/* Social Sign Button */}
          <SignInWithButton />

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
          <CustomLink text={''} link={'/login/password-reset'} variant='subtitle2' linkText='Forgot Password?' />
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
          <CustomButton buttonTitle={'Sign In'} />
          </Link>
         </Box>
          {/* CustomLink Components SignUp */}
          <Box
          sx={{
            display:'flex',
            mt:3,
            justifyContent:'center',
          }}>

        <CustomLink text={'Not a member yet?'} variant={'subtitle2'} link={'/login/signup'} boldLinkText='Sign Up' />
        
          </Box>
         {/* Footer */}
          <Footer />
       </Box>
   

        

   
  )
}
