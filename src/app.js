import React from 'react';
import './app.css';
import Instalaciones from './instalaciones.js'
import Servicios from './servicios.js'
import NavBar from './navbar.js'
import Portada from './portada.js'
import Contacto from './contacto.js'
import Noticias from './noticias.js'
import QuienesSomos from './quienessomos';
import Equipo from './equipo';
import Actividades from './actividades';
import Servicios2 from './servicios2';

//SCRIPTS INICIALES
document.getElementById('html').style.scrollBehavior='smooth';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      Portada:'',
      Servicios:'',
      Noticias:'',
      Instalaciones:'',
      Contacto:'',
      Equipo:'',
      Actividades:'',
      Opiniones:'',
    };
  }
  componentDidMount(){
    document.addEventListener("scroll",()=>this.ComprobarScrollVisible())
  }

  ComprobarScrollVisible () {
    let NoticiasElement=document.getElementById('Noticias1');
    let Noticias1Rect=NoticiasElement.getBoundingClientRect();
    let FormacionElement=document.getElementById('Formacion1');
    let Formacion1Rect=FormacionElement.getBoundingClientRect();
    let PortadaElement=document.getElementById('Portada');
    let Portada1Rect=PortadaElement.getBoundingClientRect();
    let InstalacionesElement=document.getElementById('Instalaciones1');
    let Instalaciones1Rect=InstalacionesElement.getBoundingClientRect();
    let ContactoElement=document.getElementById('Contacto1');
    let Contacto1Rect=ContactoElement.getBoundingClientRect();
    let EquipoElement=document.getElementById('Equipo1');
    let Equipo1Rect=EquipoElement.getBoundingClientRect();
    let ActividadesElement=document.getElementById('Actividades1');
    let Actividades1Rect=ActividadesElement.getBoundingClientRect();

    if (Noticias1Rect.top<=120 & Noticias1Rect.top>=(-Noticias1Rect.height+20)) {
      this.setState({Noticias:'100%'});
    } else {
      this.setState({Noticias:'0%'})
    }
    
    if (Portada1Rect.top<=0 & Portada1Rect.top>=(-Portada1Rect.height)) {
      this.setState({Portada:'100%'});
    } else {
      this.setState({Portada:'0%'})
    }
    
    if (Formacion1Rect.top<=120 & Formacion1Rect.top>=(-Formacion1Rect.height+20)) {
      this.setState({Formacion:'100%'});
    } else {
      this.setState({Formacion:'0%'})
    }
  
    if (Instalaciones1Rect.top<=120 & Instalaciones1Rect.top>=(-Instalaciones1Rect.height+20)) {
      this.setState({Instalaciones:'100%'});
    } else {
      this.setState({Instalaciones:'0%'})
    }
  
    if (Contacto1Rect.top<=120 & Contacto1Rect.top>=(-Contacto1Rect.height+20)) {
      this.setState({Contacto:'100%'});
    } else {
      this.setState({Contacto:'0%'})
    }

    if (Equipo1Rect.top<=120 & Equipo1Rect.top>=(-Equipo1Rect.height+20)) {
      this.setState({Equipo:'100%'});
    } else {
      this.setState({Equipo:'0%'})
    }

    if (Actividades1Rect.top<=120 & Actividades1Rect.top>=(-Actividades1Rect.height+20)) {
      this.setState({Actividades:'100%'});
    } else {
      this.setState({Actividades:'0%'})
    }
  }


  render () {
    return (
      <div>
  
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_es/sdk.js#xfbml=1&version=v16.0" nonce="bAdSoA0S"></script>
        
        <NavBar 
            BarraScrollPortada={this.state.Portada}
            BarraScrollNoticias={this.state.Noticias}
            BarraScrollFormacion={this.state.Formacion}
            BarraScrollInstalaciones={this.state.Instalaciones}
            BarraScrollContacto={this.state.Contacto}
            BarraScrollEquipo={this.state.Equipo}
            BarraScrollActividades={this.state.Actividades}
         />

        <Portada />
        <div className='ContainerGlobal'>
          <div className='Separador' id='Filosofía'></div>
          <Servicios />
          <div className='Separador' id='QuienesSomos'></div>
          <QuienesSomos />
          <div className='Separador' id='Formacion'></div>
          <Servicios2 />
          <div className='Separador' id='Instalaciones'></div>
          <Instalaciones />
          <div className='Separador' id='Actividades'></div>
          <Actividades />
          <div className='Separador' id='Noticias'></div>
          <Noticias />
          <div className='Separador' id='Equipo'></div>
          <Equipo />
          <div className='Separador' id='Contacto'></div>
          <Contacto />

          
        </div>
        <Footer />
      </div>
    );
  }
}

class LogosFinal extends React.Component {
  render () {
    return (
      <div className='LogosFinal'>
        <br />
        <img className='LogoFinalImagen' src='./img/logo1.png'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo2.jpg'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo3.png'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo4.png'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo5.png'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo6.png'></img>
        <br />
        <br />
      </div>
    );
  }
}
class Footer extends  React.Component {
  render () {
    return (
      <div>
        <footer className='Footer'>
          <div>
            
          </div>
          <div className='FooterContenido' style={{textAlign:'center'}}>
          <img src='img/solleira/solleira-logo-color-blanco.png' style={{width:100}}></img>
          <p>Todos los Derechos Reservados. Solleira S.L. 2019</p>
          
          Plaza García Barbón, 8, Verín, España 
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

