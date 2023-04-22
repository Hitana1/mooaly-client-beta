import { AppLanguages } from "@/utils/constants";

import type { Language } from "./settings-overlay.types";

export const languages: Language[] = [
    {
        name: "English",
        value: AppLanguages.EN,
    },
    {
        name: "Русский",
        value: AppLanguages.RU,
    },
];
