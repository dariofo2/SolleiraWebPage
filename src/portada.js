import React from 'react';
import './app.css';

class Portada extends React.Component {
  render () {
    return (
      <div id='Portada' className='Div1Portada'>
        <PortadaContainerInterior />
      </div>
    );
  }
}

class PortadaContainerInterior extends React.Component {
  render () {
    return (
      <div className='Div2Portada'>
          <div className='PortadaIzquierda'>
            <img className='PortadaImagenLogo' src='img/solleira/solleira-logo-color-blanco.png' width='600px'/>
            <div className='PortadaIzquierdaBotones'>
              <a href='#QuienesSomos'><div className='BotonLlamativo'>¿Que quieren mis padres?</div></a>
              <a href='#Contacto'><div className='BotonLlamativo'>Contáctanos</div></a>
            </div>
          </div>
          <div className='PortadaDerecha'>
          <iframe className='FotoLogoPortada' width="560" height="315" src="https://www.youtube.com/embed/slloaolj9yU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        
      </div>
    );
  }
}

export default Portada;

