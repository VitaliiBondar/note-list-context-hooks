import React from "react";
import * as moment from 'moment'

export const Comment = (props) => {
    return (
        (
            <div className="card card-item">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-content-center">
                        <div><h5 className="card-title">{props.comment.author}</h5></div>
                        <div>{moment(props.comment.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                    </div>
                    <p className="card-text">{props.comment.content}</p>
                </div>
            </div>
        )
    )
}