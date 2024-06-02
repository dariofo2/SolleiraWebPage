import React from 'react';
import './app.css';

class Servicios extends React.Component {
  render() {
    return (
      <div id='Formacion'>
        <FormacionContainer />
      </div>
    );
  }
}

class FormacionContainer extends React.Component {
  render() {
    const ApoyoDiario = new Array();
    ApoyoDiario[0] = 'img/iconos/ancianos.png';
    ApoyoDiario[1] = 'Respecto polo Maior';
    ApoyoDiario[2] = 'Pensando sempre na súa intimidade, dignidade e independencia.';

    const PlanAFD = new Array();
    PlanAFD[0] = 'img/iconos/ayuda.png';
    PlanAFD[1] = 'Empatía';
    PlanAFD[2] = 'Comprendendo cada situación e dándolle a mellor resposta posible.';

    const Informatica = new Array();
    Informatica[0] = 'img/iconos/pensamiento-positivo.png';
    Informatica[1] = 'Actitude positiva';
    Informatica[2] = 'Centrándose nas cousas boas e minimizando o negativo.';

    const CalidadeVida = new Array();
    CalidadeVida[0] = 'img/iconos/calidadvida.png';
    CalidadeVida[1] = 'Mellora da Calidade de vida';
    CalidadeVida[2] = 'Intentando que sexan participes nas actividades que fan.';

    return (
      <div className='Formacion'>
        <h1 style={{ color: 'white' }}>FILOSOFÍA</h1>
        <p className='FormacionDescripcionTexto'>
          En Solleira amamos o noso traballo e facémolo de corazón, sempre dedicando a nosa vida polo maior dándolles calidade de vida, queremos que os maiores se sintan cómodos e respetados.

        </p>
        <div className='FormacionContainer'>
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
  render() {
    return (
      <div className='FormacionElemento'>
        <img className='FotoElemento' src={this.props.image}></img>
        <h2 className='h2Formacion'>{this.props.titulo}</h2>
        <div><p className='FormacionElementoTexto'>{this.props.texto}</p></div>
      </div>
    );
  }
}


export default Servicios;

