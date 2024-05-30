import { useState } from "react";
import SideBarDesktop from "./images/bg-sidebar-desktop.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-screen font-ubuntu h-screen bg-slate-200 flex justify-center items-center">
            <div className="bg-white p-4 px-3 flex flex-col md:flex-row md:h-4/5 md:w-[65rem] max-w-full rounded-lg">
                <div
                    className="h-full aspect-[1/2]"
                    style={{
                        backgroundImage: `url(${SideBarDesktop})`,
                        backgroundRepeat: "round",
                    }}
                >
                    123
                </div>
                <div className="flex flex-col"></div>
            </div>
        </div>
    );
}

export default App;
