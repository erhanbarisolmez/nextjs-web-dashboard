import Footer from "@/components/Footer";
import Header from '@/components/Header';
import { UseClient } from '@/components/UseClient';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

import 'server-only';

const Product = () => {
  const t = useTranslations('LOGIN.Phone'); // 'product' dil dosyasının anahtarını buraya ekleyin


  return (
<>
  
<Box sx={{
      display: "grid",
      p: 3
    }}>

        <Header  headerName={t('header-name')} headerTitle={t('header-title')}/>

        <UseClient>
   
        </UseClient>
        <Footer terms={t('footer-terms')} plans={t('footer-plans')} contactUs={t('footer-contact-us')} />

    </Box>
       </>
  )
}

export default Product