import React,{ Component} from 'react';
import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import Login from './containers/login';

class App extends Component {
    render(){
        return (

            <Router>
                <div>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" component={Login}/>
                </div>
            </Router>
        );
    }
}
export default App;
