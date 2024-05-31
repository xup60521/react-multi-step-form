export default function MobileBottomNav(props: {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    const { step, setStep } = props;
    if (step === 5) {
        return null
    }
    return (
        <div className="md:hidden z-20 p-4 flex w-full bg-white items-center justify-between">
            {step !== 1 && (
                <button
                    onMouseDown={() => setStep((prev) => prev - 1)}
                    className="text-neutral-400"
                >
                    Go Back
                </button>
            )}
            <div className="flex-grow"></div>
            {step === 4 ? (
                <button
                    className="bg-indigo-700 text-white px-6 py-3 rounded"
                    onMouseDown={() => setStep((prev) => prev + 1)}
                >
                    Confirm
                </button>
            ) : (
                <button
                    className="bg-blue-950 px-6 py-3 text-white rounded"
                    onMouseDown={() => setStep((prev) => prev + 1)}
                >
                    Next Step
                </button>
            )}
        </div>
    );
}
