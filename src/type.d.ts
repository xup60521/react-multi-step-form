export type PlanType = "arcade" | "advanced" | "pro";
export type MonthlyOrYearly = "monthly" | "yearly";
export type AddOnType =
    | "online-service"
    | "larger-storage"
    | "customizable-profile";
export type ResultType = {
    name: string;
    email: string;
    phone_number: string;
    time_plan: MonthlyOrYearly;
    plan_type: PlanType;
    add_ons: AddOnType[];
};
