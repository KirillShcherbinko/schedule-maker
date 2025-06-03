import { atom } from 'jotai';
import { atomWithStore } from 'jotai-zustand';
import { useEventStore } from './store';
import type { TEventsList } from '@/shared/model/types';

export const selectedDateAtom = atom(new Date());

export const eventsAtom = atomWithStore(useEventStore);

export const tagFilterAtom = atom<number[]>([]);
export const titleFilterAtom = atom<string>('');

export const filteredEventsAtom = atom((get) => {
  const events = get(eventsAtom).events;
  if (!events) return {};

  const selectedTags = get(tagFilterAtom);
  const searchQuery = get(titleFilterAtom).trim().toLocaleLowerCase();

  return Object.entries(events).reduce<TEventsList>((acc, [date, eventsList]) => {
    const filteredEvents = eventsList.filter((event) => {
      const tagMatches = selectedTags.length === 0 || event.tags.some((tag) => selectedTags.includes(tag.id));
      const titleMatches = searchQuery === '' || event.title.toLowerCase().includes(searchQuery);

      return tagMatches && titleMatches;
    });

    acc[date] = filteredEvents || [];

    return acc;
  }, {});
});

export const isFormOpenAtom = atom(false);
