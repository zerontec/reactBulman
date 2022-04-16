import React from 'react';
import './Footer.css'
import { stylesFooter } from './styles';


const Footer =() => {


    return(


        <div>
<footer className="footer">
  <div className="content has-text-centered">

  <div className="columns">
  <div className="column ">
   
   

    <ul className="menu-list ">
    <li className='textf'><a><strong>Dashboard</strong></a></li>
    <li><a>Customers</a></li>
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>




  </div>
  <div className="column">
    Second column
  
  </div>
  <div className="column">
    Third column
  </div>
  <div className="column">
    Fourth column
  </div>
</div>

    <p>
      <strong>PokedexZ</strong> by <a href="https://leozeron.web.app">Leoberto Zeron</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
        </div>
    )



}


export default Footer