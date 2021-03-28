import React, { Component } from 'react';
import style from '../AboutUs/AboutUs.css';

class About extends Component {
    render(){
        return(
            <div className="bodyAbout">
            <h1 className="title">Sobre nós</h1>
            <img className = "imagem" src='https://cariasdrinks.com/wp-content/uploads/2018/10/44621107_1781394758631504_5111934783676481536_n-1080x628.jpg'></img>
            <p className="texto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
            </div>
        )
    }
}

export default About;