
import Header from '@/components/Header';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

const Product = () => {
  const t = useTranslations('LOGIN.SignUp'); // 'product' dil dosyasının anahtarını buraya ekleyin

  return (

  
        <Box>
        <Header  headerName={t('header-name')} headerTitle={t('header-title')}/>

    </Box>
  
  )
}

export default Product