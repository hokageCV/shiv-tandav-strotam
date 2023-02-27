import { useBlurContextProvider } from "../context/BlurContext";

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
        <div className="card select-none mx-0.5 my-1 w-96 bg-shlokCardBG text-shlokText">
            <div className="card-body m-0 py-1 w-full flex xs:flex-col justify-center items-center  md:text-md lg:text-lg">
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
