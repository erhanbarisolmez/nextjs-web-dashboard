
import { useTranslations } from "next-intl";
import { PhoneComponent } from "../components/Phone";
export default function Phone() {
  const t = useTranslations('LOGIN.Phone');


  return (
    <>
    <PhoneComponent 
      headerName={t("header-name")}
      headerTitle={t("header-title")}
      customButtonTitle={t("button-text")}
      terms={t("footer-terms")}
      plans={t("footer-plans")}
      contactUs={t("footer-contact-us")} 
      />
      </>
  )
}
