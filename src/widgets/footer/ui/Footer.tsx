import { useTranslation } from 'react-i18next';
import { BASE_NAMESPACE } from '../config/consts';

const BASE_LINK = 'title';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <p className="text-center text-gray-500 w-full border-t-2 border-solid pt-5 border-footer">
      {t(BASE_LINK, BASE_NAMESPACE)}
    </p>
  );
};
