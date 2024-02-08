import { RootState } from '@/store/store';

export const getLanguaje = (state: RootState) => state.languaje;

export const getTheme = (state: RootState) => state.ui.value;