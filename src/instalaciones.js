import React from 'react';
import './app.css';

class Instalaciones extends React.Component {
  render () {
    return (
      <div id='Instalaciones1'>
        <InstalacionesContainer />
      </div>
    );
  }
}
class InstalacionesContainer extends React.Component {
  render () {
    return (
      <div className='InstalacionesContainer'>
        <div className='InstalacionesTituloDesc'>
          <h1>INSTALACIONES</h1>
          <p className='InstalacionesDescripcionTexto'>
          O Centro dispón de diferentes salas ben iluminadas, 800 metros cadrados para que poidamos estar a gusto e teñamos unha boa sensación de espacio.
        <br />
        <br />
          O Centro de Día Solleira ofrécelle a oportunidades de dispor de unhas boas instalaciones para mellorar a calidade de vida do maior.
        
        </p>
        <br />
        </div>
       
        <InstalacionesElemento titulo='Sala de Actividades' image1='img/instalaciones/retocado/salon1.jpg' image2='img/instalaciones/retocado/salon2.jpg' ElementoTexto={<p>Dispomos dunha sala grande de Actividades, que tamén se usa como comedor</p>} />
        <InstalacionesElemento titulo='Gimnasio' image1='img/instalaciones/retocado/gimnasio1.jpg' image2='img/instalaciones/retocado/gimnasio2.jpg' ElementoTexto={<p>Dispomos dun Ximnasio completamente adaptado e dunha sala de fisioterapia.</p>} />
        <InstalacionesElemento titulo='Sala de Rehabilitacion' image1='img/instalaciones/retocado/rehabilitacion1.jpg' image2='img/instalaciones/retocado/rehabilitacion2.jpg' ElementoTexto={<p>Dispomos dunha sala de rehabilitación donde realizar rehabilitacións completas aos pacientes.</p>} />
        <InstalacionesElemento titulo='Baños' image1='img/Instalaciones/retocado/baños1.jpg' image2='img/instalaciones/retocado/baños2.jpg' ElementoTexto={<p>Dispomos de baños completamente adaptados para diferentes necesidades dos nosos pacientes.</p>} />
      </div>
    );
  }
}

class InstalacionesElemento extends React.Component {
  render () {
    return (
      <div className='InstalacionesElemento'>
        <h2>{this.props.titulo}</h2>
        <div className='InstalacionesFotosFlex'>
          <img className='FotoElementoInst' src={this.props.image1}></img>
          <img className='FotoElementoInst' src={this.props.image2}></img>
        </div>
        <div className='ElementoTexto'>
         {this.props.ElementoTexto}
        </div>
      </div>
    );
  }
}


export default Instalaciones;

