import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    // Datos del Google Map

    const imagen = [
      {
        id: 1,
        fuente: 'https://www.google.com/maps/embed/v1/place?key=TU_API_KEY_GOOGLE_MAP&q=Space+Needle,Seattle+WA"',        
        title: 'Google Maps'
      }
    ];

    return (

      // Renderizamos el Mapa de Google, dentro de este colocamos cada objeto del array 'const imagen'

      imagen.map(item => { 

        // Es necesario colocar una 'key' a partir de la versión de React JS 16
        // colocamos el objeto 'id: 1' en <div key={ item.id } 

        return <div key={ item.id } className='embed-responsive embed-responsive-4by3'>
            <iframe className='embed-responsive-item' src={ item.fuente } title={ item.title } style={{Border: + "0" }}></iframe>
          </div>
       

      })

    )
    

  }

};

export default App;
