import { useState } from "preact/hooks";

type BlurType = "1" | "2" | "3";

export const useBlur = () => {
    const [blur, setBlur] = useState<BlurType>("2");

    const changeBlur = (val: BlurType) => setBlur(val);

    return { blur, changeBlur };
};
