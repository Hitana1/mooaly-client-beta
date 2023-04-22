import type { FC } from "react";
import { useTranslation } from "react-i18next";

import type { PageProps } from "@/utils/types";
import { useDocumentTitle } from "@/utils/hooks";

const About: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    // View
    return <main>About</main>;
};
export default About;
