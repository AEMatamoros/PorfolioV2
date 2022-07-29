import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ESlabels, ENlabels } from "../languajes";
import { RootState } from "../store/store";
import { changeLenguaje } from "../slices/languajeSlice";

export default function SelectLanguajeHook() {
  const currentLanguaje = useSelector((state: RootState) => state.languaje);
  const dispatch = useDispatch();

  const handleLanguaje = () => {
    currentLanguaje.type !== "ES"
      ? dispatch(changeLenguaje({ type: "ES", labels: ESlabels }))
      : dispatch(changeLenguaje({ type: "EN", labels: ENlabels }));
  };
  return { currentLanguaje, handleLanguaje };
}
