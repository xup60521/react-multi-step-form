import { atom } from "jotai";
import type { ResultType } from "./type";

export const resultAtom = atom<ResultType>({
    name: "",
    email: "",
    phone_number: "",
    time_plan: "monthly",
    plan_type: "arcade",
    add_ons: [],
});
