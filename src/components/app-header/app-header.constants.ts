import { AppRoutes } from "@/utils/constants";
import { NavLink } from "./app-header.types";

export const guestRoutes: NavLink[] = [
    {
        name: "common.app-header.navbar.home",
        to: AppRoutes.HOME,
    },
    {
        name: "common.app-header.navbar.pricing",
        to: AppRoutes.PRICING,
    },
    {
        name: "common.app-header.navbar.about",
        to: AppRoutes.ABOUT,
    },
];
export const usersRoutes: NavLink[] = [
    {
        name: "common.app-header.navbar.dashboard",
        to: AppRoutes.DASHBOARD,
    },
    {
        name: "common.app-header.navbar.transactions",
        to: AppRoutes.TRANSACTIONS,
    },
    {
        name: "common.app-header.navbar.categories",
        to: AppRoutes.CATEGORIES,
    },
];
