import React, {useContext, useState} from "react";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const CommentForm = (props) => {
    const firebase = useContext(FirebaseContext)
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name.trim() && content.trim()) {
            firebase.addComment(firebase.selectedNote, name.trim(), content.trim()).then(() => console.log('ok'))
        }
        setName('');
        setContent('');

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="textarea">Enter your comment here</label>
                <textarea
                    className="form-control"
                    id="textarea"
                    rows="3"
                    value={content}
                    onChange={event => setContent(event.target.value)}
                >{content}</textarea>
            </div>
            <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <small
                    id="nameHelp"
                    className="form-text text-muted"
                >Your first and last name</small>
            </div>
            <button type="submit" className="btn btn-primary">Post comment</button>
        </form>
    )
}
