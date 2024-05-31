import SideBarDesktop from "/images/bg-sidebar-desktop.svg";
import SideBarMobile from "/images/bg-sidebar-mobile.svg";

export default function Bar({ step }: { step: number }) {
    function highlight(s: number) {
        if (s === step || (step > 4 && s === 4)) {
            return "bg-cyan-200 text-black border-cyan-200";
        }
        return "border-white text-white";
    }
    const list = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
    return (
        <>
            <div
                className="h-full aspect-[1/2] flex-col gap-8 hidden md:flex px-10 text-white font-ubuntu py-8"
                style={{
                    backgroundImage: `url(${SideBarDesktop})`,
                    backgroundRepeat: "round",
                }}
            >
                {list.map((item, index) => (
                    <div className="flex w-full gap-4 items-center" key={index}>
                        <div
                            className={`size-8 transition flex justify-center items-center border-[1px] rounded-full ${highlight(
                                index + 1
                            )}`}
                        >
                            {index + 1}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-neutral-400">
                                STEP {index + 1}
                            </span>
                            <p className="text-sm font-bold">{item}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="md:hidden flex w-full justify-center pt-8 pb-24 gap-4"
                style={{ backgroundImage: `url(${SideBarMobile})` }}
            >
                {list.map((_item, index) => (
                    <span
                        className={`rounded-full size-8 transition flex justify-center items-center border-[1px] ${highlight(
                            index + 1
                        )}`}
                    >
                        {index + 1}
                    </span>
                ))}
            </div>
        </>
    );
}
