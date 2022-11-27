import { COOKIES } from "../../constants/cookies";
import { removeCookie, setCookie } from "../../utils";
import { SET_SEARCH, PUSH_SEARCH, MAKE_SEARCH } from "../actions/actionTypes";

export const initialState = {
    lastSearches: [],
    lastSearchStr: '',
};

export const defaultAction = {
    type: '',
    lastSearches: [],
    lastSearchStr: '',
}

export default (state = initialState, action = defaultAction) => {
    switch(action.type){
        case SET_SEARCH:
            return {
                ...state,
                lastSearches : action.lastSearches,
                lastSearchStr: state.lastSearchStr,
            }
        case PUSH_SEARCH:
            return {
                ...state,
                lastSearches : addToSearchHistory([...state.lastSearches], action.lastSearchStr),
                lastSearchStr: action.lastSearchStr,
            }
        case MAKE_SEARCH:
            return {
                ...state,
                lastSearches : state.lastSearches,
                lastSearchStr: action.lastSearchStr,
            }
        default: return state;
    }
}

const addToSearchHistory = (searchHistory: string[], newStr:string) => {
    if(searchHistory.length >= 10){
        searchHistory.shift();
        searchHistory.push(newStr);
    }
    else {
        if(searchHistory.length){
            searchHistory.includes(newStr) ? searchHistory.splice(searchHistory.indexOf(newStr), 1) : '';
            searchHistory.push(newStr)
        }
        else {
            searchHistory.push(newStr);
        }
    }
    removeCookie(COOKIES.SEARCHES);
    setCookie(COOKIES.SEARCHES, searchHistory.toString(), 5);
    return searchHistory;
}