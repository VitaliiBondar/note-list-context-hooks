import React, {useReducer} from "react";
import axios from 'axios';
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import {ADD_COMMENT, ADD_NOTE, DELETE_NOTE, FETCH_NOTES, SELECTED_NOTE, SHOW_LOADER} from "../types";

const url = 'https://mass-media-group.firebaseio.com';

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false,
        selectedNote: null
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`)
        const payload = res.data ? Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        }) : []
        dispatch({type: FETCH_NOTES, payload})
    }

    const addNote = async (name, content) => {
        const note = {
            name,
            content,
            date: new Date().toJSON(),
        }
        try {
            const res = await axios.post(`${url}/notes.json`, note)
            console.log('addNotes', res.data)
            const payload = {
                ...note,
                id: res.data.name
            }
            dispatch({type: ADD_NOTE, payload})
        } catch (e) {
            console.log('error', e.message)
        }


    }

    const deleteNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type: DELETE_NOTE,
            payload: id
        })
    }
    const selectNote = id => {
        dispatch({
            type: SELECTED_NOTE,
            payload: id
        })
    }

    const updateNote = async (id, name, content) => {
        const note = {
            name,
            content,
            updateAt: new Date().toJSON(),
        }
        await axios.patch(`${url}/notes/${id}.json`, note)

        selectNote()
        await fetchNotes();
    }

    const addComment = async (selectedNote, author, content) => {
        const note = {
            comments: selectedNote.comments ?
                [...selectedNote.comments, {author, content, createdAt: new Date().toJSON()}]
                : [{author, content, createdAt: new Date().toJSON()}],

        }
        await axios.patch(`${url}/notes/${selectedNote.id}.json`, note)
        dispatch({type: ADD_COMMENT, payload: {author, content, createdAt: new Date().toJSON()}})

    }


    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, deleteNote, fetchNotes, updateNote, selectNote, addComment,
            loading: state.loading,
            notes: state.notes,
            selectedNote: state.selectedNote
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}