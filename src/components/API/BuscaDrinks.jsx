import React from 'react';
import style from '../API/api.css';
import Button from '../Button/Button';
import {requisicao} from '../../model/arquivoFetch';
import {useState, useEffect} from 'react';

export default function BuscarDrinks(){
const [dadosApi, setDadosApi] = useState("")

    useEffect(async () => {
    const req = await requisicao();
    setDadosApi(req);
    console.log(req)
  }, []);

    const arrMap = [1,2,3,4,5,6,7]

    return(
        <div>
            <section className = "cabecalho">
                <div className="drinkTitulo">
                    <h1>Drinks</h1>
                </div>
                <div className="posicionaBotao">
                <Button titulo = "Drinks Populares" estilo = "botao"></Button>
                <Button titulo = "Buscar Drinks" estilo = "botao" noClick= "BuscarDrinks()"></Button>
                </div>
            </section>
            <section className = "conteudoDrunk">
               {arrMap.map(
                   (valor, index)=>{
                       <h1>
                           {}
                       </h1>
                    }
               )}
            </section>
        </div>
    )
}