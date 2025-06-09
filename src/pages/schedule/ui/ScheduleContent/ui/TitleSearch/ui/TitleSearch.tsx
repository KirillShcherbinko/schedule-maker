import { FilterByTitle } from '@/features/FilterByTitle';
import { titleFilterAtom } from '../../../model/atoms';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import { TITLE_SEARCH_LINK } from '../model/const';
import { BASE_NAMESPACE } from '../../../config/const';

export const TitleSearch = () => {
  const { t } = useTranslation();

  const [title, setTitle] = useAtom(titleFilterAtom);

  return (
    <div className="max-w-[420px] w-full">
      <FilterByTitle
        baseTitle={title}
        onFilterChange={setTitle}
        placeholder={t(`${TITLE_SEARCH_LINK}.placeholder`, BASE_NAMESPACE)}
      />
    </div>
  );
};
