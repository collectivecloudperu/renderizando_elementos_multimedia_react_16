import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    // Datos del Video de Youtube

    const imagen = [
      {
        id: 1,
        url: 'https://www.youtube.com/embed/t_ZEavuVcZ0',
        title: 'Cambiemos el aspecto visual(UI) de nuestro Sublime Text 3'
      }
    ];

    return (

      imagen.map(item => {

        // Es necesario colocar una 'key' a partir de la versión de React JS 16
        // colocamos el objeto 'id: 1' en <div key={ item.id  

        return <div key={ item.id } className='embed-responsive embed-responsive-4by3'>
            <iframe className='embed-responsive-item' src={ item.url } title={ item.title } ></iframe>
          </div>
       

      })

    )
    

  }

};

export default App;
