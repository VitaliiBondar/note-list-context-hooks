import {ADD_NOTE, DELETE_NOTE, FETCH_NOTES, SHOW_LOADER, SELECTED_NOTE, ADD_COMMENT} from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({...state, notes: [...state.notes, payload]}),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
    [DELETE_NOTE]: (state, {payload}) => ({...state, notes: state.notes.filter(note => note.id !== payload)}),
    [SELECTED_NOTE]: (state, {payload}) => ({
        ...state,
        selectedNote: state.notes.filter(note => note.id === payload)[0]
    }),
    [ADD_COMMENT]: (state, {payload}) => ({
        ...state,
        selectedNote: {
            ...state.selectedNote,
            comments: state.selectedNote.comments ? [...state.selectedNote.comments, {...payload}] : [payload]
        }
    }),
    DEFAULT: state => state,
}
export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action);
}