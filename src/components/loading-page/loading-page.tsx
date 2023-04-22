import type { FC } from "react";

import styles from "./loading-page.module.scss";

const LoadingPage: FC = () => {
    // View
    return (
        <main className={styles.LoadingPage}>
            <svg width={36} height={36} fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.353 10.647 18 0l10.647 10.647-.034.034a4.705 4.705 0 0 0-6.62.033L18 14.706l-3.993-3.992a4.705 4.705 0 0 0-6.62-.034l-.034-.033Zm0 14.706L18 36l10.647-10.647a4.705 4.705 0 0 1-6.654 0L18 21.361c.16-.161.308-.33.44-.507l-.44.44-.44-.44c.133.176.28.346.44.507l-3.993 3.992a4.705 4.705 0 0 1-6.654 0Zm18-18L36 18 25.353 28.647l-.034-.034a4.705 4.705 0 0 0-.033-6.62L21.294 18l3.992-3.993a4.705 4.705 0 0 0 .034-6.62l.033-.034Zm-14.706 0L0 18l10.647 10.647a4.705 4.705 0 0 1 0-6.654L14.639 18c.161.16.33.308.507.44l-.44-.44.44-.44c-.176.133-.346.28-.507.44l-3.992-3.993a4.705 4.705 0 0 1 0-6.654Z"
                    fill="currentColor"
                />
            </svg>
        </main>
    );
};
export default LoadingPage;
