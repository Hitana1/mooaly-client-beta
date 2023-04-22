import type { FC } from "react";
import { useTranslation } from "react-i18next";

import type { PageProps } from "@/utils/types";
import { useAppModals, useDocumentTitle } from "@/utils/hooks";
import { Page } from "@/components/page";
import { Typography, TypographyVariants } from "@/components/typography";
import { Button, ButtonSizes, ButtonVariants } from "@/components/button";
import { ArrowDown, ArrowUpRight, PlusFilled } from "@/components/icons";
import { AppModalsIds } from "@/utils/constants";

import styles from "./categories.module.scss";

const Categories: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    const { onModalOpen } = useAppModals();
    // Handlers
    const onAddCategory = () => {
        onModalOpen(AppModalsIds.ADD_CATEGORY);
    };
    // View
    return (
        <Page className={styles.Categories}>
            <header className={styles.header}>
                <Typography variant={TypographyVariants.HEADLINE_4}>Categories</Typography>
                <Button rightIcon={PlusFilled} onClick={onAddCategory}>
                    Add a category
                </Button>
            </header>
            <table className={styles.categoriesTable}>
                <thead className={styles.header}>
                    <tr className={styles.row}>
                        <td className={styles.column}>
                            <Typography variant={TypographyVariants.DESCRIPTION}>#</Typography>
                        </td>
                        <td className={styles.column}>
                            <Typography variant={TypographyVariants.DESCRIPTION}>Name</Typography>
                        </td>
                        <td className={styles.column}>
                            <Typography variant={TypographyVariants.DESCRIPTION}>Transactions</Typography>
                        </td>
                        <td className={styles.column}>
                            <Typography variant={TypographyVariants.DESCRIPTION}>Last transaction</Typography>
                        </td>
                        <td className={styles.column}>
                            <Typography variant={TypographyVariants.DESCRIPTION}>Income</Typography>
                        </td>
                        <td className={styles.column}>
                            <Typography variant={TypographyVariants.DESCRIPTION}>Expense</Typography>
                        </td>
                        <td className={styles.column}>
                            <Typography variant={TypographyVariants.DESCRIPTION}>Actions</Typography>
                        </td>
                    </tr>
                </thead>
                <tbody className={styles.body}>
                    {[...Array(10)].map((_, index) => (
                        <tr className={styles.row} key={index}>
                            <td className={styles.column}>
                                <Typography variant={TypographyVariants.TEXT}>{index + 1}</Typography>
                            </td>
                            <td className={styles.column}>
                                <Typography variant={TypographyVariants.SUBTITLE}>Shopping</Typography>
                            </td>
                            <td className={styles.column}>
                                <Typography variant={TypographyVariants.TEXT}>174</Typography>
                            </td>
                            <td className={styles.column}>
                                <Typography variant={TypographyVariants.TEXT}>17.04.2023</Typography>
                            </td>
                            <td className={styles.column}>
                                <Typography variant={TypographyVariants.TEXT}>10.000$</Typography>
                            </td>
                            <td className={styles.column}>
                                <Typography variant={TypographyVariants.TEXT}>10.000$</Typography>
                            </td>
                            <td className={styles.column}>
                                <Button
                                    icon={ArrowDown}
                                    size={ButtonSizes.SMALL}
                                    variant={ButtonVariants.GHOST}
                                    isRounded
                                    title={"Add income"}
                                />
                                <Button
                                    icon={ArrowUpRight}
                                    size={ButtonSizes.SMALL}
                                    variant={ButtonVariants.GHOST}
                                    isRounded
                                    title={"Add expense"}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Page>
    );
};
export default Categories;
