import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { AppLanguages } from "@/utils/constants";
// English translations
import commonTranslationEn from "@/locales/en/common.json";
import signInTranslationEn from "@/locales/en/sign-in.json";
import signUpTranslationEn from "@/locales/en/sign-up.json";
import homeTranslationEn from "@/locales/en/home.json";
import dashboardTranslationEn from "@/locales/en/dashboard.json";
import passwordRecoveryTranslationEn from "@/locales/en/password-recovery.json";
import pricingTranslationEn from "@/locales/en/pricing.json";
import aboutTranslationEn from "@/locales/en/about.json";
import transactionsTranslationEn from "@/locales/en/transactions.json";
import categoriesTranslationEn from "@/locales/en/categories.json";
import notFoundTranslationEn from "@/locales/en/not-found.json";
import faqTranslationEn from "@/locales/en/faq.json";
import termsOfUseTranslationEn from "@/locales/en/terms-of-use.json";
import privacyPolicyTranslationEn from "@/locales/en/privacy-policy.json";
// Russian translations
import commonTranslationRu from "@/locales/ru/common.json";
import signInTranslationRu from "@/locales/ru/sign-in.json";
import signUpTranslationRu from "@/locales/ru/sign-up.json";
import homeTranslationRu from "@/locales/ru/home.json";
import dashboardTranslationRu from "@/locales/ru/dashboard.json";
import passwordRecoveryTranslationRu from "@/locales/ru/password-recovery.json";
import pricingTranslationRu from "@/locales/ru/pricing.json";
import aboutTranslationRu from "@/locales/ru/about.json";
import transactionsTranslationRu from "@/locales/ru/transactions.json";
import categoriesTranslationRu from "@/locales/ru/categories.json";
import notFoundTranslationRu from "@/locales/ru/not-found.json";
import faqTranslationRu from "@/locales/ru/faq.json";
import termsOfUseTranslationRu from "@/locales/ru/terms-of-use.json";
import privacyPolicyTranslationRu from "@/locales/ru/privacy-policy.json";
// Init
i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        resources: {
            [AppLanguages.EN]: {
                translation: {
                    common: commonTranslationEn,
                    "sign-in": signInTranslationEn,
                    "sign-up": signUpTranslationEn,
                    home: homeTranslationEn,
                    dashboard: dashboardTranslationEn,
                    "password-recovery": passwordRecoveryTranslationEn,
                    pricing: pricingTranslationEn,
                    about: aboutTranslationEn,
                    transactions: transactionsTranslationEn,
                    categories: categoriesTranslationEn,
                    "not-found": notFoundTranslationEn,
                    faq: faqTranslationEn,
                    "terms-of-use": termsOfUseTranslationEn,
                    "privacy-policy": privacyPolicyTranslationEn,
                },
            },
            [AppLanguages.RU]: {
                translation: {
                    common: commonTranslationRu,
                    "sign-in": signInTranslationRu,
                    "sign-up": signUpTranslationRu,
                    home: homeTranslationRu,
                    dashboard: dashboardTranslationRu,
                    "password-recovery": passwordRecoveryTranslationRu,
                    pricing: pricingTranslationRu,
                    about: aboutTranslationRu,
                    transactions: transactionsTranslationRu,
                    categories: categoriesTranslationRu,
                    "not-found": notFoundTranslationRu,
                    faq: faqTranslationRu,
                    "terms-of-use": termsOfUseTranslationRu,
                    "privacy-policy": privacyPolicyTranslationRu,
                },
            },
        },
        fallbackLng: AppLanguages.EN,
        debug: import.meta.env.DEV,
        detection: {
            order: ["querystring", "cookie"],
            caches: ["cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;
