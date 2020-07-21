import React from "react";
import * as moment from 'moment'

export const Comment = (props) => {
    const {author, createdAt, content} = props.comment;
    return (
        (
            <div className="card card-item">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-content-center">
                        <div><h5 className="card-title">{author}</h5></div>
                        <div>{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                    </div>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        )
    )
}