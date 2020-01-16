import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"

import Reimbursement from "./routes/reimbursement.jsx";
import Announcement from "./routes/announcement.jsx";
import Sermons from "./routes/sermons.jsx";
import SignUp from "./routes/signup.jsx";
import Audios from "./routes/audios.jsx";
import LogIn from "./routes/login.jsx";
import Home from "./routes/home.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mt-4">  
        <Route path="/" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/audios" component={Audios} />
        <Route path="/sermons" component={Sermons} />
        <Route path="/announcement" component={Announcement} />
        <Route path="/reimbursement" component={Reimbursement} />


      </div>

    </Router>
  );
}

export default App;