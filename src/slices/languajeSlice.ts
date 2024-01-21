import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ESlabels } from '../languajes/ES';

import { iTexts } from '../interfaces/iTexts';

const initialState: iTexts = {
    type: 'ES',
    labels: ESlabels,
};

export const languajeSlice = createSlice({
    name: 'languaje',
    initialState,
    reducers: {
        changeLenguaje: (state, action: PayloadAction<iTexts>) => {
            return (state = action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeLenguaje } = languajeSlice.actions;

export default languajeSlice.reducer;
