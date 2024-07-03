import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import { Home } from '../home/Home';
import { Header } from "../common/Header";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Achievements } from "./Achievements";
import { Medal } from "./Medal";
import { Contact } from "./Contact";
export const Pages = () => {
    return( 
        <>
            <Router>
                <Header />
                <Switch>
                   <Route exact path="/" component={Home} />
                   <Route exact path="/skills" component={Skills} />
                   <Route exact path="/projects" component={Projects} />
                   <Route exact path="/education" component={Education} />
                   <Route exact path="/achievements" component={Achievements} />
                   <Route exact path="/medal/:medalId" component={Medal} />
                   <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>
        </>
    )
}