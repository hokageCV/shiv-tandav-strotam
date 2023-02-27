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
    const noSpacingOuter = "my-0.5 mx-0 py-1 px-0";
    const noSpacingInner = "m-0 p-0";

    const pClass234 = blur !== "0" ? `${blurText} ${noSpacingInner}` : `${noSpacingInner}`;

    return (
        <div className="card select-none mx-0.5 my-1 py-1 px-0 w-80 md:w-96 bg-shlokCardBG text-shlokText">
            <div
                className={`card-body w-full flex xs:flex-col justify-center items-center  md:text-md lg:text-lg  ${noSpacingOuter}`}
            >
                <p>
                    <span className={blur === "2" ? blurText : ""}>{first1}</span>
                    <span className={blur !== "0" ? blurText : ""}>{first2}</span>
                </p>
                <p className={pClass234}>{second}</p>
                <p className={pClass234}>{third}</p>
                <p className={pClass234}>{fourth}</p>
            </div>
        </div>
    );
}
