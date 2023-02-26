import StateSelector from "../utilities/StateSelector";
import { blurContext, useBlur } from "../hooks/useBlur";
import OM from "/assets/om.png";

import { useContext } from "preact/hooks";

export default function Navbar() {
    const BlurLatest = useContext(blurContext);
    const { blur, changeBlur } = BlurLatest;

    return (
        <div className="navbar bg-navBG sticky top-0 z-50  sm:flex xs:flex-col md:flex-row">
            <div className="logoHeading md:flex-1">
                <span>
                    <img src={OM} alt="OM icon" width={50} height={50} className="m-1" />
                </span>
                <p className="btn btn-ghost mx-0.5 px-0.5 normal-case text-2xl text-navHeading">
                    Shiv Tandav Strotam
                </p>
            </div>
            <div className="md:flex-none flex flex-row">
                <StateSelector titleName="Show All" onClick={() => changeBlur("1")} />
                <StateSelector titleName="Show first few" onClick={() => changeBlur("2")} />
                <StateSelector titleName="Show None" onClick={() => changeBlur("3")} />
            </div>
        </div>
    );
}
