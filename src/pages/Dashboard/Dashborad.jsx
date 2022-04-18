import React, { Fragment, useEffect, useState } from 'react';
import NavbarP from '../../components/Navbar/Navbar';
import Paginations from '../../components/Paginations/Pagination';
import { getPokemon, getPokemonList } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import _ from "lodash";
import './ListStyles.css'




const Dashboard = (props) => {
 const [search, setSeacrh] = useState();
 const dispatch = useDispatch();
 const PokemonList = useSelector((state) => state.PokemonList);
 

  //useEfect

  useEffect(() => {
    FetchData(1);
  
  }, []);

  const FetchData = (page = 1) => {

      dispatch(getPokemonList(page));


  }

  const ShowData = () => {
    if(PokemonList.Loading){

      <p>Loading...</p>
    }

if(!_.isEmpty(PokemonList.data)){


return(
  <div className="card">
   
{PokemonList.data.map((el) => {


return(
  <div className="card-image">
    <figure className="Imagea">
   <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${el.name}.jpg`}/>
    </figure>


  <div className="card-content">
  <div className="media">
      <div className="media-left">
          <figure className="image is-48x48">
              <img src={`https://img.pokemondb.net/artwork/large/${el.name}.jpg`}/>
          </figure>
      </div>
      <div className="media-content">
          <p className="title is-4">{el.name}</p>
          <p className="subtitle is-6">@1johnsmith</p>
      </div>
  </div>

  <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </div>
</div>
</div>
)


})}
 
</div>
  
)

}
  }




 
  return (


    <div>

      <section className="section">
        <div className='container '>

          <div className="column ">

            <div className="columns  ">
              <div className="column ">


<ShowData/>



              </div>

              

            </div>





{/* 
            <Paginations
              pokemonPerpage={pokemonPerpage}
              allPokemons={allPokemons}
              paginate={paginate}

            /> */}



          </div>


        </div>


      </section>
    </div>





  )


}


export default Dashboard