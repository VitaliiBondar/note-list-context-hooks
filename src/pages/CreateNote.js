import React, {useContext, useState} from "react";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const CreateNote = (props) => {
    const firebase = useContext(FirebaseContext)
    const [name, setName] = useState(firebase.selectedNote ? firebase.selectedNote.name : '');
    const [content, setContent] = useState(firebase.selectedNote ? firebase.selectedNote.content : '');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name.trim() && content.trim()) {
            firebase.selectedNote ? firebase.updateNote(firebase.selectedNote.id, name.trim(), content.trim()).then(() => console.log('ok')) :
                firebase.addNote(name.trim(), content.trim()).then(() => console.log('ok'))
            props.history.push('/')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group create-note'>
                <input type="text"
                       className="form-control"
                       placeholder='name'
                       value={name}
                       onChange={event => setName(event.target.value)}
                />
                <textarea
                    className="form-control"
                    id="textarea"
                    rows="7"
                    value={content}
                    onChange={event => setContent(event.target.value)}
                >{content}</textarea>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary btn-sm">
                        {firebase.selectedNote ? 'UPDATE' : 'ADD'}
                    </button>
                </div>
            </div>
        </form>
    )
};