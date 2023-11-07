import { useTranslations } from "next-intl";

interface TranslateProps {
  key: string;
  children: (translation: string) => React.ReactNode;
}

export const Translate = ({ key, children }: TranslateProps) => {
  const t = useTranslations(key);
  const translation = t(key);
  return children(translation);
}
