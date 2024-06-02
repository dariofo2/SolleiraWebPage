import React from 'react';
import './app.css';

class Servicios2 extends React.Component {
  render () {
    return (
      <div id='Formacion1'>
        <FormacionContainer />
      </div>
    );
  }
}

class FormacionContainer extends React.Component {
  render () {
    const ApoyoDiario=new Array();
    ApoyoDiario[0]='img/iconos/reloj2.png';
    ApoyoDiario[1]='Xornada Media/Completa'
    ApoyoDiario[2]='Ti decides canto tempo queres que pasen connosco, o día enteiro ou metade, mañá ou tarde.'

    const PlanAFD=new Array();
    PlanAFD[0]='img/iconos/restaurante.png';
    PlanAFD[1]='Manutención e Dieta';
    PlanAFD[2]='Contamos con un equipo de Dietistas e os mellores cociñeiros que fan que te chupes os dedos.';

    const Informatica=new Array();
    Informatica[0]='img/iconos/autobus.png';
    Informatica[1]='Transporte Adaptado';
    Informatica[2]='Proporcionamos Transporte adaptado a todas as necesidades e dificultades médicas.';

    const CalidadeVida=new Array();
    CalidadeVida[0]='img/iconos/extraordinario.png'
    CalidadeVida[1]='Extraordinarios';
    CalidadeVida[2]='Servicio de Podoloxía, Perruqueria, Lavandería, Acompañamento a consultas médicas.'
    
    return (
      <div className='Servicios'>
        <h1>SERVICIOS</h1>
        <p className='FormacionDescripcionTexto'>
          En Solleira amamos o noso traballo e facémolo de corazón, sempre dedicando a nosa vida polo maior dándolles calidade de vida, queremos que os maiores se sintan cómodos e respetados.
        
        </p>
        <div className='ServiciosContainer'>
        <FormacionElemento image={ApoyoDiario[0]} titulo={ApoyoDiario[1]} texto={ApoyoDiario[2]} />
        <FormacionElemento image={PlanAFD[0]} titulo={PlanAFD[1]} texto={PlanAFD[2]} />
        <FormacionElemento image={Informatica[0]} titulo={Informatica[1]} texto={Informatica[2]} />
        <FormacionElemento image={CalidadeVida[0]} titulo={CalidadeVida[1]} texto={CalidadeVida[2]} />
        </div>
      </div>
    );
  }
}

class FormacionElemento extends React.Component {
  render () {
    return (
      <div className='FormacionElemento'>
        <img className='FotoElemento' src={this.props.image}></img>
        <h2>{this.props.titulo}</h2>
        <div><p className='FormacionElementoTexto'>{this.props.texto}</p></div>
      </div>
    );
  }
}


export default Servicios2;

