import React from 'react';
import base from './base'
import { networkInterfaces } from 'os';

class AdminCampanhas extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            campanhas: {}
        }

        this.renderCampanha = this.renderCampanha.bind(this);
        this.removerCampanha = this.removerCampanha.bind(this);
        this.handleSave = this.handleSave.bind(this);

    }

    componentDidMount() {
        base.syncState('campanhas', {
            context: this,
            state: 'campanhas',
            asArray: false

        })
    }

    handleSave() {
        const nome = this.nome.value;
        const descricao = this.descricao.value;
        const tipo = this.state.tipo;
        const comoDoar = this.state.tipo === 'produtos' ? this.comoDoar.value : null;
        const meta = this.state.tipo === 'doacao' ? this.meta.value : null;
        const doado = this.state.tipo === 'doacao' ? this.doado.value : null;
        base.push('campanhas', {
            data: { nome, descricao, tipo, meta, doado, comoDoar },
            then: err => {
                if (!err) {
                    this.nome.value = '';
                    this.descricao.value = '';
                    this.subTitulo.value = '';
                    if (this.comoDoar)
                        this.comoDoar.value = '';
                    if (this.meta)
                        this.meta.value = ''
                    if (this.doado)
                        this.doado.value = ''
                    this.setState({tipo:''})
                }
            }
        })
    }

    removerCampanha(key) {
        base.remove('campanhas/' + key, err => {
            console.log('erro:', err);

        })
    }

    renderCampanha(key, campanha) {
        return (
            <li key={key}>
                {campanha.nome}
                &nbsp;
                <button onClick={() => 1}>Editar</button>
                <button onClick={() => this.removerCampanha(key)}>Remover</button>
            </li>)
    }

    render() {
        return (
            <div>
                <h1>Campanhas</h1>
                <h2>Nova Campanha</h2>
                Campanha: <input type="text" ref={ref => this.nome = ref} /><br />
                Sub-título: <input type="text" ref={ref => this.subTitulo = ref} /><br />
                Descrição: <textarea ref={ref => this.descricao = ref} /><br />
                tipo: <br />
                <input type="radio" name='tipo' onClick={() => this.setState({ tipo: 'doacao' })} />Doação <br />
                <input type="radio" name='tipo' onClick={() => this.setState({ tipo: 'produtos' })} />Produtos <br />
                {
                    this.state.tipo === 'doacao' &&
                    <div>
                        <h4>Doação</h4>
                        Meta: <input type="text" ref={ref => this.meta = ref} />
                        Doado: <input type="text" ref={ref => this.doado = ref} defaultValue={0} />
                    </div>
                }
                {
                    this.state.tipo === 'produtos' &&
                    <div>
                        <h4>Produtos</h4>
                        Como Doar: <input type="text" ref={ref => this.comoDoar = ref} />
                    </div>
                }
                <button onClick={this.handleSave}>Salvar nova campanha</button>
                <ul>
                    {Object.keys(this.state.campanhas).map(key => this.renderCampanha(key, this.state.campanhas[key]))}
                </ul>
            </div>
        )
    }
}

export default AdminCampanhas;