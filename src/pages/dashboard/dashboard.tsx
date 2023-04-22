import type { FC } from "react";
import { useTranslation } from "react-i18next";

import type { PageProps } from "@/utils/types";
import { useDocumentTitle } from "@/utils/hooks";

import styles from "./dashboard.module.scss";

const Dashboard: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    return <main className={styles.Dashboard}>Dashboard</main>;
};
export default Dashboard;
