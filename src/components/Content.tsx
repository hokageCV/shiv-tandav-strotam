import data from "../constants/shlok.json";
import Shlok from "../utilities/Shlok";

export default function Content() {
    return (
        <div className="flex flex-col justify-center items-center my-7 mx-7 p-2">
            {data.map((shlok) => (
                <Shlok
                    first1={shlok.first1}
                    first2={shlok.first2}
                    second={shlok.second}
                    third={shlok.third}
                    fourth={shlok.fourth}
                />
            ))}
            <div className="card select-none my-2 w-96  text-shlokText">
                <div className="card-body">
                    <p>इति श्रीरावण-कृतम्-शिव-ताण्डव-स्तोत्रम्म्पूर्णम् ॥</p>
                </div>
            </div>
        </div>
    );
}
