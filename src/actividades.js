import React from 'react';
import './app.css';

class Actividades extends React.Component {
  render () {
    return (
      <div id='Actividades1' className='ActividadesContainer'>
        <h1>ACTIVIDADES</h1>
        <div className='ActividadesElementosContainer'>
          <ActividadElemento 
            nombre='Estimulación Cognitiva, Orientanción e Reminiscencia' 
            descripcion='Mantener orientada á persona no entorno espacial e temporal, activando a memoria persoal e autobiográfica, traballando a memoria, gnosias, capacidade de atencion e concentración, linguaxe, motivación, praxias e funcións executivas. Estimular a interacción e mellorar a capacidade de expresión.' 
            img='img/actividades/estimulacioncognitiva.jpg' 
          />
          <ActividadElemento 
            nombre='Xerontoximnasia' 
            descripcion='Traballamos o esquema corporal potenciando as súas capacidades fisicas e a motricidade grosa para reducir o risco de caídas e favorecer o equilibrio, fomentar a participación, aprender a respetar ritmos e momentos para relaxarse, con un aumento do seu estado de ánimo.' 
            img='img/actividades/fisioterapia.jpg' 
          />
          <ActividadElemento 
            nombre='Expresión artística' 
            descripcion='Potenciamos a creatividade e a composición estética, estimulamos a motricidade fina, favorecendo a estimulación sensorial e potenciando as función executivas para reflectir emocións, incrementar a interacción social e reforzar o grado de autoestima e sentimento de utilidade, mantendo á persona nun nivel apropiado de independencia no seu medio social.' 
            img='img/actividades/artistica.jpg' 
          />
          <ActividadElemento 
            nombre='Psicomotricidade' 
            descripcion='Relación entre a actividade Motora e a Cognitiva, entrenamos a lateralidade, estimulamos a motricidade fina, favorecendo a estimulación social e a concentración atenta nun traballo, para reforzar a autoestima coa satisfacción de sentirse útil.' 
            img='img/actividades/psicomotricidad.jpg' 
          />
          <ActividadElemento 
            nombre='Dinámicas Grupais' 
            descripcion='Evita o illamento da persoa potenciado as relación interpersonais, fomenta contactos positivos, estimula os sentidos, emocións e diversión, controla mellor o seu corpo e motiva a relaxación.' 
            img='img/actividades/actividadesgrupo.jpg' 
          />
          <ActividadElemento 
            nombre='Actividades da Vida Diaría' 
            descripcion='Retrasar a aparición da dependencia, fomentando a independencia, retardar a sobrecarga do coidador, mellorar a autoestima, o sentimento de utilidade, e a calidade de vida, mantendo a persona conectada co mundo, actuando como suxeito activo.' 
            img='img/actividades/vidadiaria.jpg' 
          />
          <ActividadElemento 
            nombre='Celebracións' 
            descripcion='Celebramos os días sinalados e os aniversarios, fomentando a socializacion para mellorar o estado de animo e alcanzar a máxima independencia no seu medio social aumentando a súa calidade de vida.' 
            img='img/actividades/celebraciones.jpg' 
          />
        </div>
      </div>
    );
  }
}

class ActividadElemento extends React.Component {
  render () {
    return (
      <div className='ActividadElemento'>
          <div className='ImagenActividad'>
            <img src={this.props.img} className='ImagenActividadImg'></img>
          </div>
          <h2> {this.props.nombre} </h2>
          <p style={{marginTop:0}}>{this.props.descripcion}</p>
      </div>
    );
  }
}


export default Actividades;

