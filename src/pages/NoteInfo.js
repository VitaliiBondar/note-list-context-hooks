import React, {useContext} from "react";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {CommentForm} from "../components/CommentAddForm";
import {Comment} from "../components/Comment";


export const NoteInfo = (props) => {
    const firebase = useContext(FirebaseContext)

    return (
        <>
            <div className="jumbotron">
                <h3 className="display-6">{firebase.selectedNote.name}</h3>
                <p className="lead">{firebase.selectedNote.content}</p>
            </div>
            {firebase.selectedNote.comments && firebase.selectedNote.comments.map((comment => {
                return <Comment key={comment.createdAt} comment={comment}/>
            }))}
            <CommentForm history={props.history}/>
        </>
    )


};