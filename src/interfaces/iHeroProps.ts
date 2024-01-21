import { RefObject } from 'react';

export interface iHeroProps {
    title: string;
    subtitle: string;
    msg: string;
    reference: RefObject<HTMLDivElement> | null;
}
