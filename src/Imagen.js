import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    // Datos que debe renderizar la imagen

    const item = [
      {
        id: 1,
        img: 'http://blog.nubecolectiva.com/wp-content/uploads/2019/03/img_destacada_blogdevs-2-930x360.png',
        class: 'img-fluid',
        alt: 'Efecto Sticky o Video Flotante mientras te desplazas verticalmente en una Página Web',
        title: 'Efecto Sticky o Video Flotante mientras te desplazas verticalmente en una Página Web',
        target: '_blank',
        link: 'http://blog.nubecolectiva.com/efecto-sticky-o-video-flotante-mientras-te-desplazas-verticalmente-en-una-pagina-web/'
      }
    ];

    return (

      item.map(item => { 

        // Es necesario colocar una 'key' a partir de la versión de React JS 16
        // colocamos el objeto 'id: 1' en <div key={ item.id } 

        return <a key={ item.id } href={ item.link } target={ item.target }>
                <img className={ item.class } src={ item.img } alt={ item.alt } title={ item.title } />
               </a>

      })

    )
    

  }

};

export default App;
