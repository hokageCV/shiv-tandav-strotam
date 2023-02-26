import { useBlurContextProvider } from "../hooks/useBlur";

type ShlokType = {
    first1: string;
    first2: string;
    second: string;
    third: string;
    fourth: string;
};

export default function Shlok({ first1, first2, second, third, fourth }: ShlokType) {
    const { blur } = useBlurContextProvider();

    const blurText = "blur-lg hover:blur-none bg-blurBG hover:bg-blurHoverBG";

    return (
        <div className="card select-none my-2 w-96 bg-shlokCardBG text-shlokText">
            <div className="card-body py-4 w-full flex xs:flex-col justify-center items-center">
                <p>
                    <span className={blur === "3" ? blurText : ""}>{first1}</span>
                    <span className={blur !== "1" ? blurText : ""}>{first2}</span>
                </p>
                <p className={blur !== "1" ? blurText : ""}>{second}</p>
                <p className={blur !== "1" ? blurText : ""}>{third}</p>
                <p className={blur !== "1" ? blurText : ""}>{fourth}</p>
            </div>
        </div>
    );
}
