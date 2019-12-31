import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

import Sermons from "./routes/sermons.jsx";
import Audios from "./routes/audios.jsx";
import Announcement from "./routes/announcement.jsx";
import Reimbursement from "./routes/reimbursement.jsx";
import LogIn from "./routes/login.jsx";
import SignUp from "./routes/signup.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mt-4">  
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />

        <Route path="/audios" component={Audios} />
        <Route path="/sermons" component={Sermons} />
        <Route path="/announcement" component={Announcement} />
        <Route path="/reimbursement" component={Reimbursement} />

        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </div>

    </Router>
  );
}

export default App;
