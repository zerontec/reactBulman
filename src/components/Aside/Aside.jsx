import React from "react";
import Footer from "../Footer/Footer";
import Paginations from "../Paginations/Pagination";
import { Link, Outlet } from  'react-router-dom'
import NavbarP from "../Navbar/Navbar";
import InfoF from "../InfoF/InfoF";
import './Aside.css'
import { asideStyles } from "./styles";

const Aside = () => {


    return(

<div>



      
        <div className="column ">
          
        <article className="panel is-primary">
                        <p className="panel-heading">
                          Primary
                        </p>
                        <p className="panel-tabs">
                          <a className="is-active">All</a>
                          <a>Public</a>
                          <a>Private</a>
                          <a>Sources</a>
                          <a>Forks</a>
                        </p>
                        <div className="panel-block">
                          <p className="control has-icons-left">
                            <input className="input is-primary" type="text" placeholder="Search"/>
                            <span className="icon is-left">
                              <i className="fas fa-search" aria-hidden="true"></i>
                            </span>
                          </p>
                        </div>
                        <a className="panel-block is-active">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          bulma
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          marksheet
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          minireset.css
                        </a>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                          </span>
                          jgthms.github.io
                        </a>
                      </article>
          
          </div>





    
{/*     <p className="bd-notification is-primary">First column</p>

    <aside className="menu">

<article className="panel is-primary">
<p className="panel-heading">
  Panel
</p>  
</article>



<div className="panel-block">
  <p className="control has-icons-left">
    <input className="input is-primary" type="text" placeholder="Search"/>
    <span className="icon is-left">
      <i className="fas fa-search" aria-hidden="true"></i>
    </span>
  </p>
</div>
<ul className="menu-list">
  <li><Link to= '/dashboard'>Dashboard</Link></li>
  <li><Link to = '/favorites'>Favoritos</Link></li>
</ul>
<p className="menu-label">
  Administration
</p>
<ul className="menu-list">
  <li><a>Team Settings</a></li>
  <li>
    <a className="is-active">Manage Your Team</a>
    <ul>
      <li><a>Members</a></li>
      <li><a>Plugins</a></li>
      <li><a>Add a member</a></li>
    </ul>
  </li>
  <li><a>Invitations</a></li>
  <li><a>Cloud Storage Environment Settings</a></li>
  <li><a>Authentication</a></li>
</ul>


</aside> */}



  

{/* columns end */}




{/* columns is-vcentered */}






</div>

    )


}


export default Aside 