import React,{ Component } from 'react';
import dchannel from './../img/dchannel.jpg';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state= {
            Email:'',
            Password:''
        }
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.Login = this.Login.bind(this);
    }

    Email(Event){
        this.setState({
            Email: Event.target.value
        });
    }

    Password(Event){
        this.setState({
            Email: Event.target.value
        });
    }
    Login() {
        // console.log(this.state.Email);
        // console.log(this.state.Password);

        this.props.history.push("/dashboard/order");
        fetch('http://Api/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == 'True')
                    this.props.history.push("/dashboard/order");
            })
    }

    render() {
        return(
            <div className="wrap">
                <div className="container">
                    <div className="login">
                        <p className="orange none">Login</p>
                        <div className="form">
                            <div className="login-icon text-center">
                                <img src={dchannel} alt="dchannel"/>
                            </div>
                            <input type="text" name="" placeholder="Phone No" required=""></input>
                            <input type="password" name="" placeholder="Password" required=""></input>
                                    <button className="btn-com">SIGN IN</button>
                                    <button className="btn-com"><Link to="/register" className="cl-white" value="register">REGISTER</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
