import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BlurContextProvider } from "./context/BlurContext";

export function App() {
    return (
        <BlurContextProvider>
            <div className=" bg-baseBG">
                <Navbar />
                <Content />
                <Footer />
            </div>
        </BlurContextProvider>
    );
}
