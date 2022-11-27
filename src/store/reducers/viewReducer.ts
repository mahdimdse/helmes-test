import { LIST_VIEW } from "../../constants/view";
import { SET_VIEW } from "../actions/actionTypes";
import { COOKIES } from "../../constants/cookies";
import { removeCookie, setCookie } from "../../utils";

export const initialState = {
    viewType: LIST_VIEW.LIST,
};

export const defaultAction = {
    type: '',
    viewType: LIST_VIEW.LIST,
}

export default (state = initialState, action = defaultAction) => {
    switch(action.type){
        case SET_VIEW:
            return {
                ...state,
                viewType: fixView(action.viewType),
            }
        default: return state;
    }
}

const fixView = (viewType:string) => {
    removeCookie(COOKIES.VIEW);
    setCookie(COOKIES.VIEW, viewType, 5);
    return viewType;
}