import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";

import "@/config/i18n";
import { App } from "@/app";
import { store, persistor } from "@/store";

import "@/assets/scss/reset.scss";
import "@/assets/scss/main.scss";
import "rc-dropdown/assets/index.css";

const queryClient = new QueryClient();
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </PersistGate>
        </ReduxProvider>
    </StrictMode>,
);
