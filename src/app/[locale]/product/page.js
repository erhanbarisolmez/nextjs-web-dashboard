
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

const Product = () => {
  const t = useTranslations('Index'); // 'product' dil dosyasının anahtarını buraya ekleyin

  return (

  
        <Box>
          {t('title')}

    </Box>
  
  )
}

export default Product