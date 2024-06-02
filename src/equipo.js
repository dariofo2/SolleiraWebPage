import React from 'react';
import './app.css';

class Equipo extends React.Component {
  render () {
    const ModestoCarneroTexto=<div><p>-Formación en “Atención Sociosanitaria a persas dependentes en institución sociais”<br /><br />-Experiencia no coidado de xente maior no ámbito sociosanitario</p></div>
    const MariaNievesTexto=<p>-Técnica en coidados auxiliares de enfermería (TCAE)<br /><br />-Formación en “Atención Sociosanitaria a persas dependentes en institución sociais”<br /><br />-Mais de 15 anos de experiencia no coidado de xente maior no ámbito sociosanitario</p>
    const MercedesDizTexto=<p>-Técnica en coidados auxiliares de enfermería (TCAE)<br /><br />-Formación en “Atención Sociosanitaria a persas dependentes en institución sociais”<br /><br />-Formación en hidrotermal – balneoterapia- técnicas de benestar<br /><br />-Mais de 15 anos de experiencia no coidado de xente maior no ámbito sociosanitario</p>
    const MariaRiveroTexto=<p>-Máster en Intervención Multidisciplinar na diversidade<br /><br />-Anos de experiencia no coidado de xente maior no ámbito sector sociosanitario</p>
    return (
      <div id='Equipo1' className='NuestroEquipoContainer'>
        <h1>NUESTRO EQUIPO</h1>
        <div className='PersonasEquipoContainer'>
          <PersonaEquipo 
            nombre='Modesto Carnero Rodríguez' 
            historia={ModestoCarneroTexto}
            puesto='Celador'
            img='img/personal/small/modestocarnero.jpg'
          />
          <PersonaEquipoReversa
            nombre='María Nieves Justo' 
            historia={MariaNievesTexto}
            puesto='Enfermera'
            img='img/personal/small/marianeves.jpg'
          />
          <PersonaEquipo 
            nombre='Mercedes Diz Gallego' 
            historia={MercedesDizTexto}
            puesto='Enfermera'
            img='img/personal/small/mercedesdiz.jpg'
          />
          <PersonaEquipoReversa
            nombre='María Rivero Martínez' 
            historia={MariaRiveroTexto}
            puesto='Educadora Social'
            img='img/personal/small/mariarivero.jpg'
          />
        </div>
      </div>
    );
  }
}

class PersonaEquipo extends React.Component {
  render () {
    return (
      <div className='PersonaEquipoContainer'>
        <div className='TextoPersonaEquipo'>
          <h2 style={{marginBottom:5, color:'orange'}}> {this.props.nombre} </h2>
          <h3 style={{textAlign:'center', marginTop:0}}> {this.props.puesto} </h3>
          <p>{this.props.historia}</p>
        </div>
        <div className='ImagenPersonaEquipo'>
          <img src={this.props.img} className='ImagenPersonaEquipoImg'></img>
        </div>
      </div>
    );
  }
}

class PersonaEquipoReversa extends React.Component {
  render () {
    return (
      <div className='PersonaEquipoContainer'>
        <div className='ImagenPersonaEquipo'>
          <img src={this.props.img} className='ImagenPersonaEquipoImg'></img>
        </div>
        <div className='TextoPersonaEquipo'>
          <h2 style={{marginBottom:5, color:'orange'}}> {this.props.nombre} </h2>
          <h3 style={{textAlign:'center', marginTop:0}}> {this.props.puesto} </h3>
          <p>{this.props.historia}</p>
        </div>
      </div>
    );
  }
}


export default Equipo;

