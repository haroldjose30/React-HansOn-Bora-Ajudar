import React from 'react';
import base from './base'

class AdminCampanhas extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            campanhas: {}
        }
        
        this.renderCampanha = this.renderCampanha.bind(this);
        this.removerCampanha = this.removerCampanha.bind(this);

    }

    componentDidMount() {
        base.syncState('campanhas', {
            context: this,
            state: 'campanhas',
            asArray: false

        })
    }

    removerCampanha(){

    }

    renderCampanha(key,campanha) {
        return (
            <li>
                {campanha.nome}
                &nbsp;
                <button onClick={()=>1}>Editar</button>
                <button onClick={()=> this.removeCampanha(key)}>Remover</button>
            </li>)
    }

    render() {
        return (
            <div>
                <h1>Campanhas</h1>
                <ul>
                    {Object.keys(this.state.campanhas).map(key => this.renderCampanha(key,this.state.campanhas[key]))}
                </ul>
            </div>
        )
    }
}

export default AdminCampanhas;