import { useState } from "react";
import "./App.css";
import Bar from "./components/Bar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Finish from "./components/Finish";
import MobileBottomNav from "./components/MobileBottomNav";

function App() {
    const [step, setStep] = useState(1);
    function handleFadeInOut(s: number) {
        if (s < step) {
            return "animate-fadeoutleft";
        }
        if (s === step) {
            return "animate-fadeinright";
        }
        return "hidden";
    }

    return (
        <div className="w-screen font-ubuntu h-screen bg-slate-200 flex justify-center items-center">
            <div className="bg-white md:p-4 md:px-3 flex flex-col md:flex-row md:h-4/5 md:w-[65rem] max-w-full md:rounded-lg w-full h-full">
                <Bar step={step} />
                <div className="relative flex-grow h-full bg-slate-50 md:bg-white">
                    <div
                        className={`flex w-full h-full flex-col absolute flex-grow md:p-0 p-4 ${handleFadeInOut(
                            1
                        )}`}
                    >
                        <Step1 setStep={setStep} />
                    </div>
                    <div
                        className={`flex flex-col h-full w-full absolute flex-grow md:p-0 p-4 ${handleFadeInOut(
                            2
                        )}`}
                    >
                        <Step2 setStep={setStep} />
                    </div>
                    <div
                        className={`flex flex-col h-full w-full absolute flex-grow md:p-0 p-4 ${handleFadeInOut(
                            3
                        )}`}
                    >
                        <Step3 setStep={setStep} />
                    </div>
                    <div
                        className={`flex flex-col h-full w-full absolute flex-grow md:p-0 p-4 ${handleFadeInOut(
                            4
                        )}`}
                    >
                        <Step4 setStep={setStep} />
                    </div>
                    <div
                        className={`flex flex-col h-full w-full absolute flex-grow md:p-0 p-4 ${handleFadeInOut(
                            5
                        )}`}
                    >
                        <Finish />
                    </div>
                </div>
                <MobileBottomNav step={step} setStep={setStep} />
            </div>
            {/* {step}
            <button onClick={() => setStep((prev) => prev + 1)}>
                increment
            </button> */}
        </div>
    );
}

export default App;
