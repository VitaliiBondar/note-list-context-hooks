import React, {useContext} from "react";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {CommentForm} from "../components/CommentAddForm";
import {Comment} from "../components/Comment";


export const NoteInfo = (props) => {
    const {selectedNote} = useContext(FirebaseContext)

    return (
        <>
            <div className="jumbotron">
                <h3 className="display-6">{selectedNote.name}</h3>
                <p className="lead">{selectedNote.content}</p>
            </div>
            {selectedNote.comments && selectedNote.comments.map((comment => {
                return <Comment key={comment.createdAt} comment={comment}/>
            }))}
            <CommentForm history={props.history}/>
        </>
    )


};