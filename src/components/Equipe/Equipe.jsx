import React, {Component} from 'react';
import style from '../Equipe/equipe.css';

class Team extends Component {
    render(){
        return(
            <div className="divzona">
            <h1 className="titulo">Sobre Nós</h1>
            <img className="timeImg foto1" src="https://www.condemais.com.br/wp/wp-content/uploads/2019/01/C87A0981perfil.jpg"></img>
            <section className="integrante1">
                <h2 className="integrante">Natalia</h2>
                <p className="textoIntegrante">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit.</p>
            </section>
            <img className="timeImg foto2" src="https://s2.glbimg.com/n9NaXMgHka7360FISqoGp4omGYw=/0x0:2362x3544/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/A/z/ef2NAbRnuQT2CmHNCLCA/mariana-sena-descreve-sua-personagem-gilda-em-todas-as-mulheres-do-mundo.jpg"></img>
            <section className="integrante2">
                <h2 className="integrante">Gilda</h2>
                <p className="textoIntegrante">Augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo.</p>
            </section>
            <img className="timeImg foto3" src="https://s2.glbimg.com/OTqXaX_rl0izkov4PQF-QOGH4dQ=/0x0:1883x2824/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/P/z/XMRfTCS9ActgiJt359Qg/sophie-charlotte-e-maria-alice-na-serie-todas-as-mulheres-do-mundo.jpg"></img>
            <section className="integrante3">
                <h2 className="integrante">Maria Alice</h2>
                <p className="textoIntegrante">Integer nec felis sodales, sagittis dolor non, congue libero. Morbi nec fringilla ipsum, ac finibus ligula. Praesent quis iaculis mi, a iaculis odio. Cras quis.</p>
            </section>
            <img className="timeImg foto4" src="https://nedjornal.files.wordpress.com/2020/05/laura-martha-nowill-.jpg?w=600"></img>
            <section className="integrante4">
                <h2 className="integrante">Laura</h2>
                <p className="textoIntegrante">Nunc varius arcu tortor, sit amet rutrum urna facilisis id. Mauris mattis in massa et condimentum. Proin dui leo, volutpat sed turpis a, malesuada commodo.</p>
            </section>
        </div>
        )
    }
}

export default Team;