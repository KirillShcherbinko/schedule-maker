import { create } from 'zustand';
import type { TTagStoreState, TTagStoreAction } from './types';
import { data } from './consts';

export const useTagStore = create<TTagStoreState & TTagStoreAction>((set) => ({
  tags: data.tags,

  setTags: (tags) => set({ tags }),

  addTag: (tagToAdd) =>
    set((state) => ({
      tags: [...state.tags, tagToAdd],
    })),
  removeTag: (tagToRemove) =>
    set((state) => ({
      tags: state.tags.filter((tag) => tag.id !== tagToRemove.id),
    })),
  updateTag: (tagToUpdate, newTagData) =>
    set((state) => ({
      tags: state.tags.map((tag) => (tag.id === tagToUpdate.id ? { ...tag, ...newTagData } : tag)),
    })),
}));
