import {create} from 'zustand';
type BearState = {
  bears: number;
  nuts: number;
  bears2: number;
  increasePopulation: () => void;
  increaseNut: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create<BearState>(set => ({
  bears: 0,
  nuts: 0,
  bears2: 0,
  increasePopulation: () => {
    console.log('====hello');
    set((state: BearState) => ({bears: state.bears + 1}));
  },
  increaseNut: () => set((state: BearState) => ({nuts: state.nuts + 1})),
  removeAllBears: () => set({bears: 0}),
}));
