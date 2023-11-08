
import Header from '@/components/Header';
import { useTranslations } from "next-intl";

interface TranslationsProps{
  children: React.ReactNode;
  setTranslations: string;
}
export const Translations = (props : TranslationsProps) => {
  const {children, setTranslations} = props;
  const t = useTranslations(setTranslations); // 'product' 'LOGIN.SignUp' dil dosyasının anahtarını buraya ekleyin

  return (
    <>
    <Header  headerName={t('header-name') }headerTitle={"header-title"}/>

    </>
  )
}
