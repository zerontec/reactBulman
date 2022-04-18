import React, { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'
import { getPokemonList } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import _ from "lodash";
import './ListStyles.css'
import { Link } from 'react-router-dom';




const Dashboard = (props) => {

  const [search, setSearch] = useState();
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
    if (PokemonList.Loading) {

      <p>Loading...</p>
    }

    if (!_.isEmpty(PokemonList.data)) {


      return (
        <div className="row">



          {PokemonList.data.map((el) => {


            return (
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="Imagea">
                      <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${el.name}.jpg`} />
                    </figure>


                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src={`https://img.pokemondb.net/artwork/large/${el.name}.jpg`} />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">{el.name}</p>
                          <p className="subtitle is-6"><Link to={`/detail/${el.name}`}> Ver</Link></p>
                        </div>
                      </div>

                      <div className="content">
                        Conoce más habilidades y caracteristicas. de <strong>{el.name} </strong> 
                        <br />
                        <p className="subtitle is-6"><Link to={`/detail/${el.name}`}> Conoce más</Link></p>
                        
                      </div>
                    </div>
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

{/* search */}
          <div className='container '>
         <div className="columns">
           <div className="column is-four-fifths">
         <div className="field is-grouped">
  <p className="control is-expanded">
    <input className="input" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Encuentra tu pokemon"/>
  </p>
  <p className="control">
    <button className="button is-primary" onClick={() => props.history.push(`/detail/${search}`)}>
      Search
    </button>
  </p>
  </div>
</div>
</div>
</div>{/* End search */}
<hr />

          {ShowData()}
    
          </div>
          {!_.isEmpty(PokemonList.data) && (

          <div className="container">
       <hr/>
                  <ReactPaginate 
                  
                  pageCount={Math.ceil(PokemonList.count / 9)}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  onPageChange={(data) => FetchData(data.selected + 1)}
                  containerClassName={"pagination is-rounded"}
                 pageClassName={"container"}
                  previousClassName={"pagination-previous"}
                  nextClassName={"pagination-next"}
                  /* activeLinkClassName={"pagination-link"} */
                  pageLinkClassName={"pagination-link" }
                  activeLinkClassName={"pagination-link is-current"}
                  />
                   
                   

          </div>
    )}


        </div>
      </section>
    </div>





  )


}


export default Dashboard