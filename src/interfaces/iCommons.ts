import { ReactElement } from 'react';

export interface iHeaderProps {
    handleTheme: () => void;
    currentTheme: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    texts: any;
    handleLanguaje: () => void;
    children?: ReactElement | ReactElement[];
}
