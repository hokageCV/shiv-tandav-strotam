import { useState } from "preact/hooks";

type BlurType = "0" | "1" | "2";

export const useBlur = () => {
    const [blur, setBlur] = useState<BlurType>("1");

    const changeBlur = (val: BlurType) => setBlur(val);

    const changeBlurTo0 = () => changeBlur("0");
    const changeBlurTo1 = () => changeBlur("1");
    const changeBlurTo2 = () => changeBlur("2");

    return { blur, changeBlurTo0, changeBlurTo1, changeBlurTo2 };
};
