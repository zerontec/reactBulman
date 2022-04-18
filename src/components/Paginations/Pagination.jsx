import React from "react";




const Paginations = ({pokemonPerpage, allPokemons, paginate}) => {


const pagesNumber = [];

for (let i = 1; i <= Math.ceil(allPokemons / pokemonPerpage); i ++){
pagesNumber.push(i)

}

  return(

<div>

<nav className="pagination is-rounded" role="navigation" aria-label="pagination">
  <a className="pagination-previous">Previous</a>
  <a className="pagination-next">Next page</a>
  <ul className="pagination-list">
    <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span className="pagination-ellipsis">&hellip;</span></li>
    {pagesNumber && pagesNumber.map((number)=>( 
    <li><a key={number} className="pagination-link is-current" aria-label="Page 46" aria-current="page" onClick={()=>paginate(number)}>{number} </a></li>
    )) }
    <li><span className="pagination-ellipsis">&hellip;</span></li>
    <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
  </ul>
</nav>


</div>


)



}


export default Paginations