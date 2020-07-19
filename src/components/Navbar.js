import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Navbar = () => {
    const {selectNote} = useContext(FirebaseContext)
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                Note App
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        exact
                        to="/"
                    >List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"
                             to="/create-note"
                             onClick={() => selectNote(null)}
                    >Create Note</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"
                             to="/settings"
                    >Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}