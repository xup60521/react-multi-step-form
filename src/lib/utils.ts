import type { AddOnType } from "@/type";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const price = {
    yearly: {
        plan: {
            arcade: 90,
            advanced: 120,
            pro: 150,
        },
        addons: {
            "online-service": 10,
            "larger-storage": 20,
            "customizable-profile": 20
        }
    },
    monthly: {
        plan: {
            arcade: 9,
            advanced: 12,
            pro: 15,
        },
        addons: {
            "online-service": 1,
            "larger-storage": 2,
            "customizable-profile": 2
        }
    },
};
