import { useSelector, useDispatch } from 'react-redux';
import { ESlabels, ENlabels } from '@/languajes/index';
import { changeLenguaje } from '@/slices/languajeSlice';
import { getLanguaje } from '@/slices/selectors/uiSelectors';

export default function SelectLanguajeHook() {
    const currentLanguaje = useSelector(getLanguaje);
    const dispatch = useDispatch();

    const handleLanguaje = () => {
        currentLanguaje.type !== 'ES'
            ? dispatch(changeLenguaje({ type: 'ES', labels: ESlabels }))
            : dispatch(changeLenguaje({ type: 'EN', labels: ENlabels }));
    };
    return { currentLanguaje, handleLanguaje, type: currentLanguaje.type };
}
