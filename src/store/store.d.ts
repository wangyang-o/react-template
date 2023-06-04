import { SystemSlice } from './systemSlice';
import { LayoutSlice } from './layoutSlice';

type SetActionsInf<T> = {
  [Key in keyof T as `set${Capitalize<Key & string>}`]: (value: T[Key]) => void;
};

type ExtraActions = {
  reset: () => void;
};

type MainSlice = SystemSlice & LayoutSlice;
