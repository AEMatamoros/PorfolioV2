import { RefObject } from "react";

export interface iExperienceProps {
  subtitle: string;
  currentLanguaje: string;
  reference: RefObject<HTMLDivElement>;
}

export interface iExperienceDescription {
  place: any;
  currentLanguaje: string;
}

export interface IExperiencePlaceName {
  placeName: string;
}
