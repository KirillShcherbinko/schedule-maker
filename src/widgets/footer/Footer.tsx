import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation();

  return <p className="text-center text-gray-500 w-full border-t-2 border-solid pt-5 border-footer">{t('footer')}</p>
}