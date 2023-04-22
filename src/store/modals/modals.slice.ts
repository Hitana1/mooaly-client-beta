import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { ModalData, ModalsState, RemoveModalPayload } from "./modals.types";

const initialState: ModalsState = {
    stack: [],
};
const slice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        createModal(state, action: PayloadAction<ModalData>) {
            const isModalAlreadyOpen = state.stack.some(modal => modal.id === action.payload.id);
            if (!isModalAlreadyOpen) {
                state.stack.push(action.payload);
            }
        },
        removeModal(state, action: PayloadAction<RemoveModalPayload>) {
            state.stack = state.stack.filter(modal => modal.id !== action.payload.id);
        },
        removeAllModals(state) {
            state.stack = [];
        },
    },
});
export const {
    reducer,
    actions: { createModal, removeModal, removeAllModals },
} = slice;
