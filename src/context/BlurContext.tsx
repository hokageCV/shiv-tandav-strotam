import { useContext } from "preact/hooks";
import { createContext } from "preact";
import { h, FunctionComponent } from "preact";
import { useBlur } from "../hooks/useBlur";

export const blurContext = createContext<ReturnType<typeof useBlur>>(
    {} as ReturnType<typeof useBlur> //typscript ko temporarily dkhokha
);

export const BlurContextProvider: FunctionComponent = ({ children }) => {
    const { blur, changeBlurTo0, changeBlurTo1, changeBlurTo2 } = useBlur();
    return (
        <blurContext.Provider value={{ blur, changeBlurTo0, changeBlurTo1, changeBlurTo2 }}>
            {children}
        </blurContext.Provider>
    );
};

export const useBlurContextProvider = () => {
    return useContext(blurContext);
};
