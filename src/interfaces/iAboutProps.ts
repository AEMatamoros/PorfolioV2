import { RefObject } from "react";

export interface iAboutProps {
  subtitle: string;
  msg: string;
  reference: RefObject<HTMLDivElement>;
}
