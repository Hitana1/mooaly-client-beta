import type { RootState } from "@/store";

export const selectCreatedModalsIds = (state: RootState) => state.modals.stack.map(modal => modal.id);
