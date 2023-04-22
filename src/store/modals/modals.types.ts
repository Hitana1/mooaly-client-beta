// State
import { AppModalsIds } from "@/utils/constants";

export type ModalData = {
    id: AppModalsIds;
    props: any;
};
export type ModalsState = {
    stack: ModalData[];
};
// Payloads
export type RemoveModalPayload = {
    id: ModalData["id"];
};
