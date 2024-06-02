import React from 'react';
import './app.css';

class QuienesSomos extends React.Component {
  render () {
    return (
      <div id='QuienesSomos1' className='QuienesSomosContainer'>
        <h1>¿QUE QUIEREN MIS PADRES?</h1>
        <div className='QuienesSomosFlexContainer'>
          <p className='QuienesSomosTexto'>
            Cuando nos facemos maiores dámonos de conta do que necesitamos, poder pasar o tempo que nos queda tranquilos e animados. Non queremos estar lonxe dos nosos fillos e netos e que nos visiten de cando en vez.
            <br /><br />
            Tampouco queremos estar todo o día metidos en casa sen facer nada, esperando a que pase o tempo de cada día hasta que cheguen os nosos fillos á casa.
            <br /><br />
            En definitiva, gustaríanos algo máis intermedio, poder estar entretidos e divertindonos durante o día pero poder pasar a noite cos nosos seres queridos, sentíndonos arropados en todo momento.
            <br /><br />
            A mellor opción para encontrar isto é un centro de día, gustaríanos pasar o día atendidos como Dios manda en Solleira.
            Sabemos que queremos algo.

            Sabemos que los ancianos estan en buenas manos
            
            Ahora intentamos siempre que todos se sientan genial.
          </p>
          <div className='QuienesSomosVideo'>
            
            <iframe className='QuienesSomosVideoVid' width="560" height="315" src="https://www.youtube.com/embed/CoQ4-H1Bld0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}


export default QuienesSomos;

