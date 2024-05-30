import type { PlanType, MonthlyOrYearly } from "../type";
import ArcadeIcon from "/images/icon-arcade.svg";
import AdvancedIcon from "/images/icon-advanced.svg";
import { useAtom } from "jotai";
import { resultAtom } from "@/state";

export default function Step2({
    setStep,
}: {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    const [result, setResult] = useAtom(resultAtom);
    function setSelectedPlan(e: PlanType) {
        setResult((prev) => {
            prev.plan_type = e;
            return { ...prev };
        });
    }
    function setMonthOrYear(e: MonthlyOrYearly) {
        setResult((prev) => {
            prev.time_plan = e;
            return { ...prev };
        });
    }
    function getSelectStyle(e: PlanType) {
        if (result.plan_type === e) {
            return "border-purple-600 bg-neutral-50";
        }
        return "border-neutral-300";
    }

    return (
        <div className="w-full h-full flex flex-col md:px-24">
            <div className="flex flex-col w-full flex-grow">
                <h2 className="text-3xl font-bold text-slate-700 pt-12 pb-2">
                    Select your plan
                </h2>
                <p className="text-sm text-neutral-400">
                    You have the option of monthly or yearly billing.
                </p>
                <div className="grid grid-cols-3 gap-4 py-12">
                    <div
                        onMouseDown={() => setSelectedPlan("arcade")}
                        className={`flex transition cursor-pointer flex-col border-[1px] rounded-lg p-4 ${getSelectStyle(
                            "arcade"
                        )}`}
                    >
                        <img src={ArcadeIcon} className="size-8" />
                        <div className="flex flex-col pt-10">
                            <h4 className="font-bold text-blue-900">Arcade</h4>
                            {result.time_plan === "monthly" ? (
                                <>
                                    <span className="text-sm text-neutral-400">{`$9/mo`}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-sm text-neutral-400">{`$90/yr`}</span>
                                    <p className="text-xs font-bold py-2 text-blue-800">
                                        2 months free
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div
                        onMouseDown={() => setSelectedPlan("advanced")}
                        className={`flex transition cursor-pointer flex-col border-[1px] rounded-lg p-4 ${getSelectStyle(
                            "advanced"
                        )}`}
                    >
                        <img src={AdvancedIcon} className="size-8" />
                        <div className="flex flex-col pt-10">
                            <h4 className="font-bold text-blue-900">Advanced</h4>
                            {result.time_plan === "monthly" ? (
                                <>
                                    <span className="text-sm text-neutral-400">{`$12/mo`}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-sm text-neutral-400">{`$120/yr`}</span>
                                    <p className="text-xs font-bold py-2 text-blue-800">
                                        2 months free
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div
                        onMouseDown={() => setSelectedPlan("pro")}
                        className={`flex transition cursor-pointer flex-col border-[1px] rounded-lg p-4 ${getSelectStyle(
                            "pro"
                        )}`}
                    >
                        <img src={ArcadeIcon} className="size-8" />
                        <div className="flex flex-col pt-10">
                            <h4 className="font-bold text-blue-900">Pro</h4>
                            {result.time_plan === "monthly" ? (
                                <>
                                    <span className="text-sm text-neutral-400">{`$15/mo`}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-sm text-neutral-400">{`$150/yr`}</span>
                                    <p className="text-xs font-bold py-2 text-blue-800">
                                        2 months free
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center w-full bg-slate-50 gap-6 py-3">
                    <span
                        className={`text-sm transition font-bold ${
                            result.time_plan === "monthly"
                                ? "text-sky-800"
                                : "text-neutral-400"
                        }`}
                    >
                        Monthly
                    </span>
                    <button
                        onMouseDown={() =>
                            setMonthOrYear(
                                result.time_plan === "monthly"
                                    ? "yearly"
                                    : "monthly"
                            )
                        }
                        className="bg-blue-950 text-transparent w-9 h-5 text-sm rounded-full"
                    >
                        O
                    </button>
                    <div
                        onMouseDown={() =>
                            setMonthOrYear(
                                result.time_plan === "monthly"
                                    ? "yearly"
                                    : "monthly"
                            )
                        }
                        className={`size-3 absolute bg-white cursor-pointer transition-all rounded-full ${
                            result.time_plan === "monthly"
                                ? ""
                                : "translate-x-[0.9rem]"
                        }`}
                    ></div>
                    <span
                        className={`text-sm transition font-bold ${
                            result.time_plan === "yearly"
                                ? "text-sky-800"
                                : "text-neutral-400"
                        }`}
                    >
                        Yearly
                    </span>
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
