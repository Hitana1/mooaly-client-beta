import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { PageProps } from "@/utils/types";
import { useDocumentTitle } from "@/utils/hooks";

const NotFound: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    // View
    return <main>Not found</main>;
};
export default NotFound;
