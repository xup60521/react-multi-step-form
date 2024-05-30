import { useState } from "react";
import type { AddOnType } from "../type";

export default function Step3({
    setStep,
}: {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    const [pickedAddons, setPickedAddons] = useState<AddOnType[]>([]);
    function getPickedStyle(e: AddOnType) {
        if (pickedAddons.includes(e)) {
            return "border-purple-600 bg-neutral-50";
        }
        return "border-neutral-300";
    }
    function togglePicked(e: AddOnType) {
        if (pickedAddons.includes(e)) {
            setPickedAddons((prev) => prev.filter((d) => d !== e));
            return;
        }
        setPickedAddons((prev) => [...prev, e]);
    }
    return (
        <div className="w-full h-full flex flex-col md:px-24">
            <div className="flex flex-col w-full flex-grow">
                <h2 className="text-3xl font-bold text-slate-700 pt-12 pb-2">
                    Pick add-ons
                </h2>
                <p className="text-sm text-neutral-400">
                    Add-ons help enhance your gaming experience.
                </p>
                <div className="flex flex-col gap-4 py-10">
                    <div
                        onMouseDown={() => togglePicked("online-service")}
                        className={`flex transition items-center border-[1px] cursor-pointer rounded-lg p-4 ${getPickedStyle(
                            "online-service"
                        )}`}
                    >
                        <input type="checkbox" checked={pickedAddons.includes("online-service")} />
                    </div>
                    <div
                        onMouseDown={() => togglePicked("larger-storage")}
                        className={`flex transition items-center border-[1px] cursor-pointer rounded-lg p-4 ${getPickedStyle(
                            "larger-storage"
                        )}`}
                    >
                        <input type="checkbox" checked={pickedAddons.includes("larger-storage")} />
                    </div>
                    <div
                        onMouseDown={() => togglePicked("customizable-profile")}
                        className={`flex transition items-center border-[1px] cursor-pointer rounded-lg p-4 ${getPickedStyle(
                            "customizable-profile"
                        )}`}
                    >
                        <input type="checkbox" checked={pickedAddons.includes("customizable-profile")} />
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-4 w-full">
                <button
                    onMouseDown={() => setStep((prev) => prev - 1)}
                    className="text-neutral-400"
                >
                    Go Back
                </button>
                <button
                    onMouseDown={() => setStep((prev) => prev + 1)}
                    className="bg-blue-950 text-white px-6 py-3 rounded-lg"
                >
                    Next Step
                </button>
            </div>
        </div>
    );
}
