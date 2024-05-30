import { useAtom } from "jotai";
import { resultAtom } from "../state";
import { type ChangeEvent } from "react";
import { useToast } from "./ui/use-toast";

export default function Step1({
    setStep,
}: {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    const [result, setResult] = useAtom(resultAtom);
    const { toast } = useToast();
    function handleName(e: ChangeEvent<HTMLInputElement>) {
        setResult((prev) => {
            prev.name = e.target.value;
            return { ...prev };
        });
    }
    function handleEmail(e: ChangeEvent<HTMLInputElement>) {
        setResult((prev) => {
            prev.email = e.target.value;
            return { ...prev };
        });
    }
    function handlePhoneNumber(e: ChangeEvent<HTMLInputElement>) {
        setResult((prev) => {
            prev.phone_number = e.target.value;
            return { ...prev };
        });
    }
    function handleNextStep() {
        const { name, email, phone_number } = result;
        if (!name) {
            toast({
                title: "Name is required.",
                variant: "destructive"
            })
            return;
        }
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!emailRegex.test(email)) {
            toast({
                title: "Please input the correct email.",
                variant: "destructive"
            })
            return;
        }
        const phoneNumberRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
        if (!phoneNumberRegex.test(phone_number)) {
            toast({
                title: "Please input the correct phone number.",
                variant: "destructive"
            })
            return;
        }
        setStep((prev) => prev + 1);
    }
    return (
        <div className="w-full h-full flex flex-col md:px-24">
            <div className="flex flex-col w-full flex-grow">
                <h2 className="text-3xl font-bold text-slate-700 pt-12 pb-2">
                    Personal info
                </h2>
                <p className="text-sm text-neutral-400">
                    Please provide your name, email address, and phone number.
                </p>
                <div className="flex flex-col w-full gap-6 py-12">
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-xs text-blue-800">Name</span>
                        <input
                            placeholder="e.g. Stephen King"
                            value={result.name}
                            onChange={handleName}
                            className="w-full p-2 px-4 rounded border-[1px] border-neutral-300"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-xs text-blue-800">
                            Email Address
                        </span>
                        <input
                            placeholder="e.g. stephenking@lorem.com"
                            value={result.email}
                            onChange={handleEmail}
                            className="w-full p-2 px-4 rounded border-[1px] border-neutral-300"
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-xs text-blue-800">
                            Phone Number
                        </span>
                        <input
                            placeholder="e.g. +1 234 567 890"
                            value={result.phone_number}
                            onChange={handlePhoneNumber}
                            className="w-full p-2 px-4 rounded border-[1px] border-neutral-300"
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end py-4 w-full">
                <button
                    onMouseDown={handleNextStep}
                    className="bg-blue-950 text-white px-6 py-3 rounded-lg"
                >
                    Next Step
                </button>
            </div>
        </div>
    );
}
