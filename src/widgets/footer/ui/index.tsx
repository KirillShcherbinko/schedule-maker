import { useTranslation } from 'react-i18next';
import { FOOTER_NAMESPACE } from '../model/consts';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <p className="text-center text-gray-500 w-full border-t-2 border-solid pt-5 border-footer">
      {t('title', FOOTER_NAMESPACE)}
    </p>
  );
};
