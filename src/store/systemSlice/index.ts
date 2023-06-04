import { StateCreator } from 'zustand';
import { SetActionsInf, ExtraActions, MainSlice } from '../store';

interface SystemState {
  theme: string;
  color: string;
}

const initialState: SystemState = {
  theme: 'default',
  color: 'red',
};

export type SystemSlice = SystemState & SetActionsInf<SystemState> & ExtraActions;
export const createSystemlice: StateCreator<MainSlice, [], [], SystemSlice> = (set) => ({
  ...initialState,
  setColor: (color) => set({ color }),
  setTheme: (theme) => set({ theme }),
  reset: () => set(initialState),
});
