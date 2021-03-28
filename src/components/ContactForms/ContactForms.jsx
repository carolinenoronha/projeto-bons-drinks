import React, { Component } from 'react';
import './ContactForms.css';
import Button from '../Button/Button'

class ContactForm extends Component{
    render(){
        return(
            <form id="forms">
                <label>Nome:</label>
                <div>
                    <input type="text" className="input"></input>
                </div>
                <label>Email:</label>
                <div>
                    <input type="text" className="input"></input>
                </div>
               <label>Mensagem:</label>
                <div>
                    <input type="text" className="input"></input>
                </div>
                <Button text="Enviar"/>
        </form> 
        )
    }
}

export default ContactForm;