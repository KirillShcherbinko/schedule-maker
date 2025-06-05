import { FilterByTitle } from '@/features/FilterByTitle';
import { eventsAtom, titleFilterAtom } from '../../../model/atoms';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import { TITLE_SEARCH_LINK } from '../model/const';
import { BASE_NAMESPACE } from '../../../config/const';

export const TitleSearch = () => {
  const { t } = useTranslation();

  const [, setTitle] = useAtom(titleFilterAtom);
  const [{ events }] = useAtom(eventsAtom);

  return (
    <div className="max-w-[420px] w-full">
      <FilterByTitle
        data={events}
        onFilterChange={setTitle}
        placeholder={t(`${TITLE_SEARCH_LINK}.placeholder`, BASE_NAMESPACE)}
      />
    </div>
  );
};
