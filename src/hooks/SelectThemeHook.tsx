import { useRef, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '@/slices/uiSlice';
import { getTheme } from '@/slices/selectors/uiSelectors';

export default function SelectThemeHook() {
    const currentTheme = useSelector(getTheme);
    const dispatch = useDispatch();

    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleTheme = () => {
        if (wrapperRef.current?.classList.contains('dark')) {
            wrapperRef.current?.classList.remove('dark');
            dispatch(changeTheme('light'));
        } else {
            wrapperRef.current?.classList.add('dark');
            dispatch(changeTheme('dark'));
        }
    };
    useLayoutEffect(() => {
        handleTheme();
    }, []);
    return {
        wrapperRef,
        handleTheme,
        currentTheme,
    };
}
