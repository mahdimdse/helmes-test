import { SET_VIEW } from "./actionTypes";

export type Store = ReturnType<any>;
export type AppDispatch = Store['dispatch'];

export const setView = (viewType:string) => {
    return {
        type: SET_VIEW,
        viewType
    };
}