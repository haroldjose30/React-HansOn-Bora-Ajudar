import React from 'react';
import { auth } from './base';
import { Route,Redirect } from 'react-router-dom';
import AdminCampanhas from './AdminCampanhas'


const AdminHome = props => <p> Seja Bem Vindo</p>

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthing: true,
            isLoggedIn: false,
            user: null
        }



    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            console.log(user);
            this.setState({
                isAuthing: false,
                isLoggedIn: !!user,
                user: user
            })
        })
    }

    render() {

        if (this.state.isAuthing) {
            return <p>aguarde</p>
        }

        if (!this.state.isLoggedIn) {
            return <Redirect to='/login' />
        }
        else {
            return (
                <div className='card'>
                    <h1>Painel administrativo</h1>
                    <Route path='/' component={AdminHome}/>
                    <Route  path={`${this.props.match.url}/Campanhas`}  /*igual a rota  '/Admin/Campanhas'*/
                            component={AdminCampanhas}/>
                </div>
                
            )
        }
    }

};





export default Admin;
