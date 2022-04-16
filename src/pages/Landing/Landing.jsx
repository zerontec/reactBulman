import React from "react";
import Info from "../../components/Info/Info";
import NavbarP from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Pkb from './imagesL/Pkb.png';
import Tp from './imagesL/Tp.png';
import Poke from './imagesL/Poke.png'
import Pr from './imagesL/Pr.png'
import Pv from './imagesL/Pv.png';

import Pkba from './imagesL/Pkba.png'
import { stylesLanding } from "./styles";
import InfoF from "../../components/InfoF/InfoF";
import { Link } from "react-router-dom";

const Landing = () => {

return(

<div>
  

  

  <div className="columns">
  <div className="column is-full">

    <figure className={stylesLanding.imagea} >
  <img src={Tp}  />
</figure>


  </div>
  </div>
  
  <div className="columns">
  <div className="column">
  <p className="title is-size-1 has-text-success">
  Descubre
    </p>
  <figure className={stylesLanding.imagea}>
  <img src={Pkb}/>
</figure>

  </div>
 
  <div className="column">
  <p className="title is-size-1 has-text-success">
   Encuentra
</p>
  <figure className="image is-400x400 ">
  <img src={Pkba}/>
</figure>

  </div>
  <div className="column">
  <p className="title is-size-1 has-text-success">
   Pokedex
    </p>
  <figure className="image is-400x400 ">
  <img src={Pkb}/>
</figure>

  </div>
</div>


  
    <p className="subtitle ">
    Ingresa y Descubre mucho más
    </p>
    <button className="button are-medium is-primary "><Link to='/dashboard'>Descubre Mucho mas</Link></button>
 


  


<hr/>

<section className="hero is-primary">
  <div className="hero-body">
    <p className="title">
   Pokedex Z
    </p>
    <p className="subtitle">
      Hecho para ti 
    </p>
  </div>
</section>

<Info/>


<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child box message is-primary">

        
    <figure className={stylesLanding.imagea} >
  <img src={Poke}  />
</figure>


<div className="message-header">
    <p>Primary</p>
    <button className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    <strong>Pellentesque risus mi</strong>, 
    tempus quis placerat ut, porta nec nulla. 
    Vestibulum rhoncus ac ex sit amet fringilla.
     Nullam gravida purus diam, et dictum 
     <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>



    </article>
  </div>


  <div className="tile is-parent">
     
    <article className="tile is-child box message is-danger">
    <figure className={stylesLanding.imagea} >
  <img src={Pr}  />
</figure>

<div className="message-header ">
    <p>Primary</p>
    <button className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>




    </article>
    
  </div>
  <div className="tile is-parent">
  <article className="tile is-child box message is-primary">

        
<figure className={stylesLanding.imagea} >
<img src={Pv}  />
</figure>


<div className="message-header">
<p>Primary</p>
<button className="delete" aria-label="delete"></button>
</div>
<div className="message-body">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
</div>



</article>
  </div>
</div>


{/* info */}





</div>

)



}


export default Landing