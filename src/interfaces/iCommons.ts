import { ReactElement } from "react";
import { scrollToTop } from "../utils/scrollTop";

export interface iHeaderProps {
  handleTheme: () => void;
  currentTheme: string;
  texts: any;
  handleLanguaje: () => void;
  children?: ReactElement | ReactElement[];
}
