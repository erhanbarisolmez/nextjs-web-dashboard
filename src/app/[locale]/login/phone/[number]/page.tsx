import { useTranslations } from "next-intl";
import { TwoFactorVerificationComponent } from "../../components/TwoFactorVerificationComponent";

export default function TwoFactorVerification(...[props]: any) {
  const t = useTranslations('LOGIN.TwoFactorVerification');
  return (
    <>
      <TwoFactorVerificationComponent
        headerName={t('header-name')}
        headerTitle={t('header-title')}
        securityCode={t('security-code')}
        buttonTitle={t('custom-button-title')}
        customLinkText={t('customLinkText')}
        customButtonBoldLink={t('bold-link-text')}
        customButtonBoldLink2={t('bold-link-text2')}
        customLinkText2={t('custom-link-text2')}
        terms={t('footer-terms')}
        plans={t('footer-plans')}
        contactUs={t('footer-contact-us')} />
    </>
  )
}
