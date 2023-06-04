import { StateCreator } from 'zustand';
import { SetActionsInf, ExtraActions, MainSlice } from '../store';

interface layoutState {
  headerActive: boolean;
  sideNavActive: boolean;
}

const initialState: layoutState = {
  headerActive: true,
  sideNavActive: true,
};

export type LayoutSlice = layoutState & SetActionsInf<layoutState> & ExtraActions;
export const createLayoutlice: StateCreator<MainSlice, [], [], LayoutSlice> = (set) => ({
  ...initialState,
  setHeaderActive: (headerActive) => set({ headerActive }),
  setSideNavActive: (sideNavActive) => set({ sideNavActive }),
  reset: () => set(initialState),
});
