import React from 'react';
import NavbarP from '../../components/Navbar/Navbar';
import Paginations from '../../components/Paginations/Pagination';


const Dashboard = () => {

return(


    <div>

<section className="section">
       <div className='container '>
                
        <div className="column ">
                 
                 <div className="columns  ">
                     <div className="column ">
                         <div className="card">
                             <div className="card-image">
                               <figure className="image is-4by3">
                                 <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                               </figure>
                             </div>
                             <div className="card-content">
                               <div className="media">
                                 <div className="media-left">
                                   <figure className="image is-48x48">
                                     <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                   </figure>
                                 </div>
                                 <div className="media-content">
                                   <p className="title is-4">John Smith</p>
                                   <p className="subtitle is-6">@johnsmith</p>
                                 </div>
                               </div>
                           
                               <div className="content">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                 <a href="#">#css</a> <a href="#">#responsive</a>
                                 <br/>
                                 <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                               </div>
                             </div>
                           </div>
<hr/>
                       
                           
                     </div>
                  
                     <div className="column">
                         <div className="card">
                             <div className="card-image">
                               <figure className="image is-4by3">
                                 <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                               </figure>
                             </div>
                             <div className="card-content">
                               <div className="media">
                                 <div className="media-left">
                                   <figure className="image is-48x48">
                                     <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                   </figure>
                                 </div>
                                 <div className="media-content">
                                   <p className="title is-4">John Smith</p>
                                   <p className="subtitle is-6">@johnsmith</p>
                                 </div>
                               </div>
                           
                               <div className="content">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                 <a href="#">#css</a> <a href="#">#responsive</a>
                                 <br/>
                                 <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                               </div>
                             </div>
                           </div>
                           <hr/>
                     </div>
                  
                   </div>

      
  

  {/*   <p className="bd-notification is-primary">
        Second column with more content. 
        This is so you can see the vertical 
        alignment.
        Second column with more content. 
        This is so you can see the vertical 
        alignment
        Second column with more content. 
        This is so you can see the vertical 
        alignment
        Second column with more content. 
        This is so you can see the vertical 
        alignment
        Second column with more content. 
        This is so you can see the vertical 
        alignment
        Second column with more content. 
        This is so you can see the vertical 
        alignment
        Second column with more content. 
        This is so you can see the vertical 
        alignment</p>
         */}
      

  
<Paginations/>



</div>

 
  </div>


  </section>
  </div>

      
        
       

)


}


export default Dashboard