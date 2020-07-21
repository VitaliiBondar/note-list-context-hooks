import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {Settings} from './pages/Settings';
import {Navbar} from "./components/Navbar";
import {FirebaseState} from "./context/firebase/FirebaseState";
import {CreateUpdateNote} from "./pages/CreateUpdateNote";
import {NoteInfo} from "./pages/NoteInfo";


function App() {
  return (
    <FirebaseState>
        <BrowserRouter>
            <Navbar />
            <div className="container p-4">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/create-note'} component={CreateUpdateNote}/>
                    <Route path={'/update-note'} component={CreateUpdateNote}/>
                    <Route path={"/note-info"} component={NoteInfo} />
                </Switch>
            </div>
        </BrowserRouter>
    </FirebaseState>
  );
}

export default App;
