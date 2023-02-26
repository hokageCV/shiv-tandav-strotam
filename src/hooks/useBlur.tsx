import { useContext, useState } from "preact/hooks";
import { createContext } from "preact";
import { h, FunctionComponent } from "preact";

type BlurType = "1" | "2" | "3";

export const useBlur = () => {
    const [blur, setBlur] = useState<BlurType>("2");

    const changeBlur = (val: BlurType) => {
        setBlur(val);
        console.log("blur is now: ", val);
    };

    return { blur, changeBlur };
};

export const blurContext = createContext<ReturnType<typeof useBlur>>(
    {} as ReturnType<typeof useBlur> //typscript ko temporarily dkhokha
);

export const BlurContextProvider: FunctionComponent = ({ children }) => {
    const { blur, changeBlur } = useBlur();
    return <blurContext.Provider value={{ blur, changeBlur }}>{children}</blurContext.Provider>;
};

export const useBlurContextProvider = () => {
    return useContext(blurContext);
};
