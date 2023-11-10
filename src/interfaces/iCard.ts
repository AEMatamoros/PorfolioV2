export interface iCard {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    proyect: any;
    currentLanguaje: string;
    currentTheme: string;
    handleLightboxShow: () => void;
    setTemplate: (arg0: JSX.Element) => void;
}
