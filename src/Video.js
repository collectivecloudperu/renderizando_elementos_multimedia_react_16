import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    // Datos del Video

    const item = [
      {
        id: 1,
        video: 'http://nubecolectiva.com/blog/tutos/demos/video_fijo_flotante/video/video.mp4',
        formato: 'video/mp4',
      }
    ];

    return (

      item.map(item => {

        // Es necesario colocar una 'key' a partir de la versión de React JS 16
        // colocamos el objeto 'id: 1' en <div key={ item.id }  

        return  <div key={ item.id }>
                  <video width='100%' controls>
                    <source src={ item.video} type={ item.formato }/>
                  </video>
                </div>
       

      })

    )
    

  }

};

export default App;
