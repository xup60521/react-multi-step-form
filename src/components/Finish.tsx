import TYIcon from "/images/icon-thank-you.svg";

export default function Finish() {
    return (
        <div className="w-full h-full flex flex-col md:px-24">
            <div className="flex flex-col w-full h-fit md:flex-grow bg-white px-8 md:py-8 py-24 rounded-lg md:translate-y-0 -translate-y-[5rem]">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img
                        src={TYIcon}
                        alt="Thank You icon"
                        className="size-16"
                    />
                    <h3 className="text-2xl py-6 font-ubuntu font-bold text-blue-950">
                        Thank you!
                    </h3>
                    <p className="text-neutral-400 text-center font-ubuntu">
                        Thanks for confirming your subscription! We hope you
                        have fun using our platform. If you ever need support,
                        please feel free to email us at support@loremgaming.com
                    </p>
                </div>
            </div>
        </div>
    );
}
