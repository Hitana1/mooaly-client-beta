import { useRef, useEffect } from "react";

type UseDocumentTitle = (title: string | null) => void;

export const useDocumentTitle: UseDocumentTitle = title => {
    const isDocumentDefined = typeof document !== "undefined";
    const documentOriginalTitle = useRef(isDocumentDefined ? document.title : null);

    useEffect(() => {
        const appName = import.meta.env.VITE_APP_NAME;

        if (isDocumentDefined && documentOriginalTitle.current !== title) {
            document.title = title ? `${title} | ${appName}` : appName;
        }
    }, [title, documentOriginalTitle, isDocumentDefined]);
};
