import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import style from '../ContactForms/ContactForms.css';
import {useState} from 'react';

export default function Contact(){

    const [inputUsuario, setInputUsuario] = useState("")
    
    const type = (valor) => {
        console.log(valor.target.value);
        setInputUsuario(valor.target.value)
    }

    const limpar = (event) => {
        event.preventDefault();
    }    


    return (
        <div className="divContato">
            <h1 className="formTitle">Contato</h1>
            <img className="formImg" src="https://cdn4.ecycle.com.br/cache/images/recicle_tudo/diversos/50-650-mquina-de-escrever.jpg"></img>
            <form className="forms">
                <div>
                    <Input htmlFor="name" noChange={type} tipo="text" name="name">Nome:</Input>
                </div>
                <div>
                    <Input htmlFor="email" noChange={type} tipo="text" name="email">Email:</Input>
                </div>
                <div>
                    <label htmlFor="message" className="labelInput">Mensagem:</label>
                    <textarea className="textArea" onChange={type} name="message" />
                </div>
                <div>
                    <Button estilo="botao" noClick={limpar} titulo="Enviar" />
                </div>
            </form>
        </div>
    )
}
