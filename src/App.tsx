import React,{ Component} from 'react';
import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import Login from './containers/login';
import Register from './containers/register';
import Form from './containers/form';

class App extends Component {
    render(){
        return (

            <Router>
                <div>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/form" component={Form}/>
                </div>
            </Router>
        );
    }
}
export default App;
