import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    // Datos que debe cargar el audio

    const item = [
      {
        id: 1,
        audio: 'http://nubecolectiva.com/blog/tutos/demos/renderizando_elementos_multimedia_react/mp3/cancion.mp3',
        formato: 'audio/mpeg',
      }
    ];

    return (

      item.map(item => { 

        // Es necesario colocar una 'key' a partir de la versión de React JS 16
        // colocamos el objeto 'id: 1' en <div key={ item.id } 

        return  <div key={ item.id }>
                  <audio controls>
                    <source src={ item.audio } type={ item.formato }/>
                  </audio>
                </div>
       

      })

    )
    

  }

};

export default App;
