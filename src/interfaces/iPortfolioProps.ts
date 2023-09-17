import { RefObject } from "react";

export interface iPortfolioProps {
  subtitle: string;
  currentLanguaje: string;
  currentTheme: string;
  reference: RefObject<HTMLElement>;
}
