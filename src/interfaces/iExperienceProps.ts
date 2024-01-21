import { RefObject } from 'react';

export interface iExperienceProps {
    subtitle: string;
    currentLanguaje: string;
    reference: RefObject<HTMLDivElement>;
}

export interface iExperienceDescription {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    place: any;
    currentLanguaje: string;
}

export interface IExperiencePlaceName {
    placeName: string;
}
