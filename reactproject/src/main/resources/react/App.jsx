import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route,Router, Switch} from 'react-router-dom';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            history : new BrowserRouter().history
        }

    }
    render(){
        return(
           <React.Fragment>
                 <Router history = {this.state.history}>
                     <div>
                         <ul>
                             <li><Link to="/page1">page1</Link></li>
                             <li><Link to="/page2">page2</Link></li>
                             <li><Link to="/page3">page3</Link></li>
                         </ul>
                     </div>

                     <Switch>
                        <Route exact path="/page1" component={Page1}/> 
                        <Route exact path="/page2" component={Page2}/> 
                        <Route exact path="/page3" component={Page3}/> 
                     </Switch>
                 </Router>
           </React.Fragment>
        );
    }
}
export default App;
ReactDOM.render(<App/>, document.getElementById("react"));