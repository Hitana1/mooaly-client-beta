import { lazy } from "react";

import { AppRoutes, AppRoutesAccesses } from "@/utils/constants";
import type { Route } from "@/utils/types";

// For guests
const Home = lazy(() => import("@/pages/home").then(({ Home }) => ({ default: Home })));
const SignIn = lazy(() => import("@/pages/sign-in").then(({ SignIn }) => ({ default: SignIn })));
const SignUp = lazy(() => import("@/pages/sign-up").then(({ SignUp }) => ({ default: SignUp })));
const PasswordRecovery = lazy(() =>
    import("@/pages/password-recovery").then(({ PasswordRecovery }) => ({ default: PasswordRecovery })),
);
// For users
const Dashboard = lazy(() => import("@/pages/dashboard").then(({ Dashboard }) => ({ default: Dashboard })));
const Transactions = lazy(() => import("@/pages/transactions").then(({ Transactions }) => ({ default: Transactions })));
const Categories = lazy(() => import("@/pages/categories").then(({ Categories }) => ({ default: Categories })));
// For all
const Pricing = lazy(() => import("@/pages/pricing").then(({ Pricing }) => ({ default: Pricing })));
const About = lazy(() => import("@/pages/about").then(({ About }) => ({ default: About })));
const Notfound = lazy(() => import("@/pages/not-found").then(({ NotFound }) => ({ default: NotFound })));
const FAQ = lazy(() => import("@/pages/faq").then(({ FAQ }) => ({ default: FAQ })));
const TermsOfUse = lazy(() => import("@/pages/terms-of-use").then(({ TermsOfUse }) => ({ default: TermsOfUse })));
const PrivacyPolicy = lazy(() =>
    import("@/pages/privacy-policy").then(({ PrivacyPolicy }) => ({ default: PrivacyPolicy })),
);
// Routes
export const appRoutes: Route[] = [
    // For all
    {
        title: "pricing.page-title",
        path: AppRoutes.PRICING,
        element: Pricing,
        meta: {
            access: AppRoutesAccesses.FOR_ALL,
        },
    },
    {
        title: "about.page-title",
        path: AppRoutes.ABOUT,
        element: About,
        meta: {
            access: AppRoutesAccesses.FOR_ALL,
        },
    },
    {
        title: "faq.page-title",
        path: AppRoutes.FAQ,
        element: FAQ,
        meta: {
            access: AppRoutesAccesses.FOR_ALL,
        },
    },
    {
        title: "terms-of-use.page-title",
        path: AppRoutes.TERMS_OF_USE,
        element: TermsOfUse,
        meta: {
            access: AppRoutesAccesses.FOR_ALL,
        },
    },
    {
        title: "privacy-policy.page-title",
        path: AppRoutes.PRIVACY_POLICY,
        element: PrivacyPolicy,
        meta: {
            access: AppRoutesAccesses.FOR_ALL,
        },
    },
    // For guests
    {
        title: null,
        path: AppRoutes.HOME,
        element: Home,
        meta: {
            access: AppRoutesAccesses.FOR_GUESTS,
        },
    },
    {
        title: "sign-in.page-title",
        path: AppRoutes.SIGN_IN,
        element: SignIn,
        meta: {
            access: AppRoutesAccesses.FOR_GUESTS,
        },
    },
    {
        title: "sign-up.page-title",
        path: AppRoutes.SIGN_UP,
        element: SignUp,
        meta: {
            access: AppRoutesAccesses.FOR_GUESTS,
        },
    },
    {
        title: "password-recovery.page-title",
        path: AppRoutes.PASSWORD_RECOVERY,
        element: PasswordRecovery,
        meta: {
            access: AppRoutesAccesses.FOR_GUESTS,
        },
    },
    // For users
    {
        title: "dashboard.page-title",
        path: AppRoutes.DASHBOARD,
        element: Dashboard,
        meta: {
            access: AppRoutesAccesses.FOR_USERS,
        },
    },
    {
        title: "transactions.page-title",
        path: AppRoutes.TRANSACTIONS,
        element: Transactions,
        meta: {
            access: AppRoutesAccesses.FOR_USERS,
        },
    },
    {
        title: "categories.page-title",
        path: AppRoutes.CATEGORIES,
        element: Categories,
        meta: {
            access: AppRoutesAccesses.FOR_USERS,
        },
    },
    // Not found
    {
        title: "not-found.page-title",
        path: AppRoutes.NOT_FOUND,
        element: Notfound,
        meta: {
            access: AppRoutesAccesses.FOR_ALL,
        },
    },
];
