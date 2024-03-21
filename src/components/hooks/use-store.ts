import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { AppDispatch } from '../../types/state';
import { OffersState } from '../../types/types';
import { store } from '../../store/store';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<OffersState> = useSelector;
export const useAppStore: () => typeof store = useStore;
