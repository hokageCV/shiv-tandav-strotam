import { useState } from "preact/hooks";

type BlurType = "1" | "2" | "3";

export const useBlur = () => {
    const [blur, setBlur] = useState<BlurType>("2");

    const changeBlur = (val: BlurType) => setBlur(val);

    const changeBlurTo0 = () => changeBlur("1");
    const changeBlurTo1 = () => changeBlur("2");
    const changeBlurTo2 = () => changeBlur("3");

    return { blur, changeBlurTo0, changeBlurTo1, changeBlurTo2 };
};
