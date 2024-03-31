import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { AppDispatch, State } from '../../types/state';
import { store } from '../../store/store';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const useAppStore: () => typeof store = useStore;
