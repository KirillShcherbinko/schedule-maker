import { create } from 'zustand';
import type { TStoreAction, TStoreState } from './types';

export const useUserStore = create<TStoreState & TStoreAction>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
}));
