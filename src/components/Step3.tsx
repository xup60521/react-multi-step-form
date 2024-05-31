import type { AddOnType } from "../type";
import { useAtom } from "jotai";
import { resultAtom } from "@/state";

export default function Step3({
    setStep,
}: {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    // const [pickedAddons, setPickedAddons] = useState<AddOnType[]>([]);
    const [result, setResult] = useAtom(resultAtom);
    function getPickedStyle(e: AddOnType) {
        if (result.add_ons.includes(e)) {
            return "border-purple-600 bg-neutral-50";
        }
        return "border-neutral-300";
    }
    function togglePicked(e: AddOnType) {
        if (result.add_ons.includes(e)) {
            setResult((prev) => {
                prev.add_ons = prev.add_ons.filter((d) => d !== e);
                return { ...prev };
            });
            return;
        }
        setResult((prev) => {
            prev.add_ons = [...prev.add_ons, e];
            return { ...prev };
        });
    }
    return (
        <div className="w-full h-full flex flex-col md:px-24">
            <div className="flex flex-col w-full h-fit md:flex-grow bg-white px-8 py-8 rounded-lg md:translate-y-0 -translate-y-[5rem]">
                <h2 className="text-3xl font-bold text-slate-700 md:pt-12 pb-2">
                    Pick add-ons
                </h2>
                <p className="text-sm text-neutral-400">
                    Add-ons help enhance your gaming experience.
                </p>
                <div className="flex flex-col gap-4 py-10">
                    <div
                        onMouseDown={() => togglePicked("online-service")}
                        className={`flex transition items-center border-[1px] cursor-pointer rounded-lg p-4 gap-2 ${getPickedStyle(
                            "online-service"
                        )}`}
                    >
                        <input
                            type="checkbox"
                            checked={result.add_ons.includes("online-service")}
                            className="mx-2"
                        />
                        <div className="flex flex-col flex-grow">
                            <h5 className="text-sm font-bold text-blue-800">
                                Online service
                            </h5>
                            <span className="text-xs text-neutral-400">
                                Access to multiplayer games
                            </span>
                        </div>
                        <span className="text-purple-800 text-sm">
                            {result.time_plan === "monthly"
                                ? `+$1/mp`
                                : `+$10/yr`}
                        </span>
                    </div>
                    <div
                        onMouseDown={() => togglePicked("larger-storage")}
                        className={`flex transition items-center border-[1px] cursor-pointer gap-2 rounded-lg p-4 ${getPickedStyle(
                            "larger-storage"
                        )}`}
                    >
                        <input
                            type="checkbox"
                            checked={result.add_ons.includes("larger-storage")}
                            className="mx-2"
                        />
                        <div className="flex flex-col flex-grow">
                            <h5 className="text-sm font-bold text-blue-800">
                                Larger storage
                            </h5>
                            <span className="text-xs text-neutral-400">
                                Extra 1TB of cloud save
                            </span>
                        </div>
                        <span className="text-purple-800 text-sm">
                            {result.time_plan === "monthly"
                                ? `+$2/mp`
                                : `+$20/yr`}
                        </span>
                    </div>
                    <div
                        onMouseDown={() => togglePicked("customizable-profile")}
                        className={`flex transition items-center border-[1px] cursor-pointer gap-2 rounded-lg p-4 ${getPickedStyle(
                            "customizable-profile"
                        )}`}
                    >
                        <input
                            type="checkbox"
                            checked={result.add_ons.includes(
                                "customizable-profile"
                            )}
                            className="mx-2"
                        />
                        <div className="flex flex-col flex-grow">
                            <h5 className="text-sm font-bold text-blue-800">
                                Customizable profile
                            </h5>
                            <span className="text-xs text-neutral-400">
                                Custom theme on your profile
                            </span>
                        </div>
                        <span className="text-purple-800 text-sm">
                            {result.time_plan === "monthly"
                                ? `+$2/mp`
                                : `+$20/yr`}
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:flex hidden justify-between py-4 w-full px-8">
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
