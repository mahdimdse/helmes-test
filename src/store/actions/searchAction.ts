import { SET_SEARCH, PUSH_SEARCH, MAKE_SEARCH } from "./actionTypes";

export type Store = ReturnType<any>;
export type AppDispatch = Store['dispatch'];

export const setSearches = (lastSearches: string[]) => {
    return {
        type: SET_SEARCH,
        lastSearches
    };
}

export const pushSearch = (lastSearchStr: string) => {
    return {
        type: PUSH_SEARCH,
        lastSearchStr
    };
}

export const makeSearch = (lastSearchStr: string) => {
    return {
        type: MAKE_SEARCH,
        lastSearchStr
    };
}