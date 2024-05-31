import { price } from "@/lib/utils";
import { resultAtom } from "@/state";
import { useAtomValue } from "jotai";

export default function Step4({
    setStep,
}: {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    const result = useAtomValue(resultAtom)
    let totalprice = price[result.time_plan].plan[result.plan_type]
    result.add_ons.forEach(item => {
        const p = price[result.time_plan].addons[item]
        totalprice += p
    })
    function capitalizeFirstLetter(string: string) {
        if (!string) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="w-full h-full flex flex-col md:px-24">
            <div className="flex flex-col w-full h-fit md:flex-grow bg-white px-8 py-8 rounded-lg md:translate-y-0 -translate-y-[5rem]">
                <h2 className="text-3xl font-bold text-slate-700 md:pt-12 pb-2">
                    Finishing up
                </h2>
                <p className="text-sm text-neutral-400">
                    Double-check everything looks OK before confirming.
                </p>
                <div className="flex flex-col bg-neutral-100 p-4 mt-8 rounded-lg">
                    <div className="flex justify-between items-center w-full  border-b-[1px] border-neutral-300 pb-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-bold text-blue-800 font">{`${capitalizeFirstLetter(result.plan_type)} (${capitalizeFirstLetter(result.time_plan)})`}</p>
                            <button onMouseDown={()=>{setStep(2)}} className="text-xs text-left w-fit text-neutral-400 underline underline-offset-2">Change</button>
                        </div>
                        <span className="font-bold text-blue-800">{`$${price[result.time_plan].plan[result.plan_type]}/mo`}</span>
                    </div>
                    <div className="flex flex-col w-full py-2">
                        {result.add_ons.map(item => {
                            return <div className="flex justify-between items-center py-2" key={item}>
                                <span className="text-xs text-neutral-400 ">{capitalizeFirstLetter(item)}</span>
                                <span className="text-sm text-blue-800">{`+$${price[result.time_plan].addons[item]}/${result.time_plan === "monthly" ? "mo" : "yr"}`}</span>
                            </div>
                        })}
                    </div>
                </div>
                <div className="flex justify-between p-4">
                        <span className="text-xs text-neutral-400">Total (per {result.time_plan === "monthly" ? "month" : "year"})</span>
                        <span className="text-indigo-700">{`$${totalprice}/${result.time_plan === "monthly" ? "mo" : "yr"}`}</span>
                </div>
            </div>
            <div className="md:flex hidden justify-between py-4 w-full px-8">
                <button onMouseDown={() => setStep((prev) => prev - 1)} className="text-neutral-400">
                    Go Back
                </button>
                <button
                    className="bg-indigo-700 text-white px-6 py-3 rounded-lg"
                    onMouseDown={()=>setStep(prev => prev + 1)}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
