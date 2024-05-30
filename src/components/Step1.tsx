export default function Step1({
    setStep,
}: {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    function handleNextStep() {
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
                            className="w-full p-2 px-4 rounded border-[1px] border-neutral-300"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <span className="text-xs text-blue-800">
                            Phone Number
                        </span>
                        <input
                            placeholder="e.g. +1 234 567 890"
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
