import Home, { AboutJournal, AdvisoryBoard, EditorialBoard, Guidelines, Policy, Volumes } from "./Body";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Announcement from "./Announcements";
export default function navbar() {
    return (

        <Router>

            <div className="navbar">
                <li><Link to="/">Home</Link></li>
                <li class="dropdown">
                    <Link to="/AboutJournal">About journal</Link>
                    <li class="dropdown-content">
                        <Link to="/AboutJournal">About journal</Link>
                        <Link to="/Volumes">Volumes</Link>
                    </li>
                </li>
                <li><Link to="/EditorialBoard">Editorial Board</Link></li>
                <li><Link to="/AdvisoryBoard">Advisory Board</Link></li>
                <li><Link to="/Policy">Policy</Link></li>
                <li><Link to="/Guidelines">Guidelines</Link></li>
            </div>
            <div className="flex">
                <div className="main">

                    <div>
                        <Switch>

                            <Route path="/AboutJournal">
                                <AboutJournal />
                            </Route>
                            <Route path="/Volumes">
                                <Volumes />
                            </Route>
                            <Route path="/EditorialBoard">
                                <EditorialBoard />
                            </Route>
                            <Route path="/AdvisoryBoard">
                                <AdvisoryBoard />
                            </Route>
                            <Route path="/Policy">
                                <Policy />
                            </Route>
                            <Route path="/Guidelines">
                                <Guidelines />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>


                <div className="sidebar">

                    <div><div>  <Announcement /> </div></div>

                </div>
            </div>


        </Router>



    )
}