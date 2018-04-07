import React from 'react';
import {auth} from './base';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.email = null;
        this.passwd = null;

        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isLoggedIn:false,
            error:false,
            isLogging:false
        }
    }

    handleLogin(){
        this.setState({
            isLogging:true,
            error:false
        });
        auth
            .signInWithEmailAndPassword(this.email.value,this.passwd.value)
            .then((user) => { 
                this.setState({
                    isLogging:false,
                    error:false,
                    isLoggedIn:true
                });
                
                console.log('logged in',user); 
            })   
            .catch(error => {
                console.log('error',error);
                this.setState({
                    isLogging:false,
                    error:true
                });
            })
    }

    render(){
        if (this.state.isLoggedIn){
            return <Redirect to='./Admin'/>
        }

        return (
            <div>
                <input type='email' ref={ref => this.email = ref}/>
                <input type='passwd' ref={ref => this.passwd =ref}/>
                {this.state.error && <p> E-mail e/ou senha inválidos.</p>}
                <button onClick={this.handleLogin} disabled={this.state.isLogging}>
                    Entrar
                </button>
            </div>
        )
    }
}

export default Login;
