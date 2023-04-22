import type { FC } from "react";
import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Logo, Navbar, Controls, MobileMenu } from "./components";

import styles from "./app-header.module.scss";

const AppHeader: FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    // Effects
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);
    // Handlers
    const onMobileMenuOpen = () => {
        setIsMobileMenuOpen(true);
    };
    const onMobileMenuClose = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);
    // View
    return (
        <>
            <header className={styles.AppHeader}>
                <div className={styles.content}>
                    <Logo />
                    <Navbar />
                    <Controls onMobileMenuOpen={onMobileMenuOpen} />
                </div>
            </header>
            {isMobileMenuOpen ? <MobileMenu onClose={onMobileMenuClose} /> : null}
        </>
    );
};
export default AppHeader;
