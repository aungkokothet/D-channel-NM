import React,{ Component } from 'react';
import dchannel from "../img/dchannel.jpg";
import {Link} from "react-router-dom";

class Register extends Component{
    render() {
        return(

            <div className="wrap">
                <div className="container">
                    <div className="login">
                        <p className="orange none">Register</p>
                        <div className="form">
                            <div className="login-icon text-center">
                                <img src={dchannel} alt="dchannel"/>
                            </div>
                            <input type="text" name="" placeholder="Phone No" required=""></input>
                                <button className="btn-com">
                                    <Link to="/form" className="cl-white" value="register">CONTINUE</Link>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
