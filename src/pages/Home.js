import React, {Fragment, useContext, useEffect} from "react";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loader";

export const Home = () => {
    const {loading, notes, fetchNotes, deleteNote, updateNote, selectedNote, selectNote} = useContext(FirebaseContext)
    console.log('selected note', selectedNote)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])
    return (
        <Fragment>
            {loading ? <Loader/> :
                <Notes notes={notes} onDelete={deleteNote} onUpdate={updateNote} onOpen={selectNote}/>}
        </Fragment>
    )
};