// lib/useDirectionStore.ts
import { create } from 'zustand';

type Direction = 'left' | 'right';

type DirectionStore = {
  direction: Direction;
  setDirection: (dir: Direction) => void;
};

export const useDirectionStore = create<DirectionStore>((set) => ({
  direction: 'right', // default
  setDirection: (dir) => set({ direction: dir }),
}));
