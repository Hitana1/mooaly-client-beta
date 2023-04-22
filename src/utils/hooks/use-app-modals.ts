import { useCallback } from "react";
import { useSelector } from "react-redux";

import { AppModalsIds } from "@/utils/constants";
import { useAppDispatch } from "@/utils/hooks/use-app-dispatch";
import { createModal, removeModal, removeAllModals, selectCreatedModalsIds } from "@/store/modals";
import type { ModalData } from "@/store/modals";

type IsModalOpen = (modalId: AppModalsIds) => boolean;
type OnModalOpen = (modalId: AppModalsIds, data: ModalData) => void;
type OnModalClose = (modalId: AppModalsIds) => void;
type OnAllModalsClose = (modalId: AppModalsIds) => void;
type UseAppModals = () => {
    isModalOpen: IsModalOpen;
    onModalOpen: OnModalOpen;
    onModalClose: OnModalClose;
    onAllModalsClose: OnAllModalsClose;
};

export const useAppModals: UseAppModals = () => {
    const dispatch = useAppDispatch();
    const createdModalsIds = useSelector(selectCreatedModalsIds);
    // Handlers
    const isModalOpen: IsModalOpen = useCallback(
        modalId => {
            return createdModalsIds.some(createdModalId => createdModalId === modalId);
        },
        [createdModalsIds],
    );
    const onModalOpen: OnModalOpen = useCallback(
        (modalId, data) => {
            dispatch(createModal({ id: modalId, props: data }));
        },
        [dispatch],
    );
    const onModalClose: OnModalClose = useCallback(
        modalId => {
            dispatch(removeModal({ id: modalId }));
        },
        [dispatch],
    );
    const onAllModalsClose: OnAllModalsClose = useCallback(
        modalId => {
            dispatch(removeAllModals());
        },
        [dispatch],
    );
    return {
        isModalOpen,
        onModalOpen,
        onModalClose,
        onAllModalsClose,
    };
};
