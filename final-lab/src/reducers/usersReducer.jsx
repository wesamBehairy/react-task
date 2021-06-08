/* eslint-disable import/no-anonymous-default-export */
import TYPES from "./types";

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {

        case TYPES.users:
            return {
                ...state,
                items: action.payload
            };

        case TYPES.userDetails:
            return {
                ...state,
                item: action.payload
            };

        case TYPES.clearDetails:
            return {
                ...state,
                item: action.payload
            };

        case TYPES.deleteUser:
            return {
                ...state,
                items: [...state.items , action.payload]
            };

        case TYPES.addUser:
            return {
                ...state,
                item: action.payload,
                items: [...state.items, action.payload]
            };

        default:
            return state;
    }
}
