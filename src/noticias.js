import React from 'react';
import './app.css';

const FB = window.FB;

class Noticias extends React.Component {
  componentDidMount() {
    FB.XFBML.parse();
  }
  render () {
    if (window.innerWidth>=500) {
      return (
      <div id='Noticias1' className='Noticias'>
        <h1>NOTICIAS</h1>
        <div className='FBContainer'>
            <div id='fb-pages' class="fb-page" data-href="https://www.facebook.com/centrodediaverin" data-lazy="false" data-tabs="timeline" data-width="800" data-height="600" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/centrodediaverin" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/centrodediaverin">Solleira. Centro de día de Verín</a></blockquote></div>
        </div>
        </div>
    );
    } else {
        return (
          <div id='Noticias1' className='Noticias'>
            <h1>NOTICIAS</h1>
            <div className='FBContainer'>
                <div id='fb-pages' class="fb-page" data-href="https://www.facebook.com/centrodediaverin" data-lazy="false" data-tabs="timeline" data-width="300" data-height="300" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/centrodediaverin" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/centrodediaverin">Solleira. Centro de día de Verín</a></blockquote></div>
            </div>
            </div>
        );
    }
  }
}


export default Noticias;

