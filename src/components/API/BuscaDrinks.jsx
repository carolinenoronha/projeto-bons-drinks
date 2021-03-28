import React from 'react';
import '../API/api.css';
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
                <Button  titulo = "Drinks Populares" estilo = "botao"/>
                <Button titulo = "Buscar Drinks" estilo = "botao"/>
                </div>
            </section>
            <section className = "conteudoDrink">
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