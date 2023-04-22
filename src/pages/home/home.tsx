import type { FC } from "react";
import { useTranslation } from "react-i18next";

import type { PageProps } from "@/utils/types";
import { useDocumentTitle } from "@/utils/hooks";

import styles from "./home.module.scss";

const Home: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    return <main className={styles.Home}>Home</main>;
};
export default Home;
