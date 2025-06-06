import { ru } from 'date-fns/locale/ru';
import type { Locale } from 'date-fns';

export const customRu: Locale = {
  ...ru,
  localize: {
    ...ru.localize,
    month: (n, opts) => {
      const name = ru.localize.month(n, opts);
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    day: (n, opts) => {
      const name = ru.localize.day(n, opts);
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
