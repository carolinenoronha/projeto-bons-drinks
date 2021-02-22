import React, { Component } from 'react';
import './FormularioContato.css'

class FormularioContato extends Component{
    render(){
        return(
            <div id="forms">
                <div>
                    Nome:
                    <input type="text" className="input"></input>
                </div>
                <div>
                    Email:
                    <input type="text" className="input"></input>
                </div>
                <div>
                    Mensagem:
                    <input type="text" className="input"></input>
                </div>

                <button className="submit">Enviar</button>
            </div>
        )
    }
}

export default FormularioContato;