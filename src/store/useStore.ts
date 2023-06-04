import { create } from 'zustand';
import { createSystemlice } from './systemSlice';
import { MainSlice } from './store';
import { createLayoutlice } from './layoutSlice';

import { StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T } ? S & { use: { [K in keyof T]: () => T[K] } } : never;

const createSelectors = <S extends UseBoundStore<StoreApi<MainSlice>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {} as WithSelectors<typeof _store>['use'];
  for (const k of Object.keys(store.getState())) {
    Object.assign(store.use, { [k]: () => store((s) => s[k as keyof typeof s]) });
  }

  return store;
};

const _useStore = create<MainSlice>()((...args) => ({
  ...createSystemlice(...args),
  ...createLayoutlice(...args),
}));

export const useStore = createSelectors(_useStore);
