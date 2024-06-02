import React from 'react';
import './app.css';

class NavBar extends React.Component {
  constructor (props) {
    super (props)
    this.state={
      MenuDesplegable:'none',
    }
  }

  MostrarMenu () {
    if (this.state.MenuDesplegable=='none') {
      this.setState({MenuDesplegable:'flex'})
    } else {
    this.setState({MenuDesplegable:'none'})
    }
  }
  
  render () {
    return (
      <div className='NavBar'>
        <div className='NavBarContainer'>
        <LogoNavBar />
        <LinksNavBar 
            BarraScrollPortada={this.props.BarraScrollPortada}
            BarraScrollNoticias={this.props.BarraScrollNoticias}
            BarraScrollFormacion={this.props.BarraScrollFormacion}
            BarraScrollInstalaciones={this.props.BarraScrollInstalaciones}
            BarraScrollContacto={this.props.BarraScrollContacto} 
            BarraScrollEquipo={this.props.BarraScrollEquipo}
            BarraScrollActividades={this.props.BarraScrollActividades} 
            />
        <MenuMoviles onClick={()=>this.MostrarMenu()}/>
        <SocialMedia />
        </div>

        <div className='DesplegableLinksMoviles' style={{display:this.state.MenuDesplegable}}>
        <LinkElemento value='Inicio' href='#Portada' BarraScrollWidth={this.props.BarraScrollPortada} />
        <LinkElemento value='Servicios' href='#Formacion' BarraScrollWidth={this.props.BarraScrollFormacion} />
        <LinkElemento value='Instalaciones' href='#Instalaciones' BarraScrollWidth={this.props.BarraScrollInstalaciones} />
        <LinkElemento value='Noticias' href='#Noticias' BarraScrollWidth={this.props.BarraScrollNoticias} />
        <LinkElemento value='Actividades' href='#Actividades' />
        <LinkElemento value='Equipo' href='#Equipo' />
        <LinkElemento value='Contacto' href='#Contacto' BarraScrollWidth={this.props.BarraScrollContacto} />
        </div>
      </div>
    );
  }
}

class LogoNavBar extends React.Component {
  render() {
    return (
      <div>
        <img src='img/solleira/solleira-logo-color.png' style={{width:100, height:85}}></img>
      </div>
    );
  }
}

class LinksNavBar extends React.Component {
  render() {
    return (
      <div className='NavBarLinksContainer' >
        
        <LinkElemento value='Inicio' href='#Portada' BarraScrollWidth={this.props.BarraScrollPortada} />
        <LinkElemento value='Servicios' href='#Formacion' BarraScrollWidth={this.props.BarraScrollFormacion} />
        <LinkElemento value='Instalaciones' href='#Instalaciones' BarraScrollWidth={this.props.BarraScrollInstalaciones} />
        <LinkElemento value='Actividades' href='#Actividades' BarraScrollWidth={this.props.BarraScrollActividades} />
        <LinkElemento value='Noticias' href='#Noticias' BarraScrollWidth={this.props.BarraScrollNoticias} />
        <LinkElemento value='Equipo' href='#Equipo' BarraScrollWidth={this.props.BarraScrollEquipo} />
        <LinkElemento value='Contacto' href='#Contacto' BarraScrollWidth={this.props.BarraScrollContacto} />
      </div>
    );
  }
}

class LinkElemento extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      BarraWidth: '0%'
    };
  }
  
  HandleOnMouseOver () {
    this.setState ({BarraWidth: '100%'});
  }

  HandleOnMouseOut () {
    this.setState ({BarraWidth: '0%'})
  }
  render () {
    return (
      <div className='NavBarLinkElemento' 
            onMouseOver={()=>this.HandleOnMouseOver()}
            onMouseOut={()=>this.HandleOnMouseOut()}>

        <a href={this.props.href}>
          <div className='BarraLinkElementoScroll' style={{width:this.props.BarraScrollWidth}}></div>
          <div>{this.props.value}</div>
          <div className='BarraLinkElemento' style={{width:this.state.BarraWidth}}></div>
        </a>
      </div>
    );
  }
}
class SocialMedia extends React.Component {
  render() {
    return (
      <div className='NavBarSocialMedia'>
        <a href='https://www.facebook.com/CentroDeDiaVerin'><img style= {{width:'20px', filter:'invert(100%)'}}src='./img/fbicon.png'></img></a>
        <img style={{width:'20px', filter:'invert(100%)'}} src='./img/telephoneback.png'></img>
        <div className='NavBarTelefonos'>
          <div>988 41 33 80</div>
        </div>
      </div>
    );
  }
}

class MenuMoviles extends React.Component {
  render() {
    return (
      <div className='MenuMoviles' onClick={()=>this.props.onClick()}>
        <h2 style={{color:'white'}}>MENU</h2>

      </div>
    );
  }
}

export default NavBar;

