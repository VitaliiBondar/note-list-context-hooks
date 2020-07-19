import React from "react";
import {Link} from "react-router-dom";

export const Notes = ({notes, onDelete, onUpdate, onOpen}) => (
    <div>
        <ul className="list-group">
            {notes.length ? notes.map(note => (
                <li className="note"
                    key={note.id}
                >
                    <div className="card card-list">
                        <div className="card-body">
                            <h5 className="card-title">{note.name}</h5>
                            <p className="card-text">{note.content}</p>

                        </div>
                        <div className="card-footer text-muted d-flex justify-content-between">
                            {note.comments ?
                                <div className="d-flex align-items-center">
                                <span className="comment-count">
                                    {note.comments.length}
                                </span>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-dots"
                                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                        <path
                                            d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                </div> : <div></div>}
                            <div className="d-flex justify-content-end">
                                <Link to="/create-note">
                                    <button
                                        type='button'
                                        className="btn btn-warning btn-sm"
                                        onClick={() => onOpen(note.id)}
                                    >Update
                                    </button>
                                </Link>
                                <Link to="/note-info">
                                    <button
                                        type='button'
                                        className="btn btn-info btn-sm"
                                        onClick={() => onOpen(note.id)}
                                    >Info
                                    </button>
                                </Link>
                                <button
                                    type='button'
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(note.id)}
                                >Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            )) : 'Try to create your first note'}
        </ul>
    </div>
)