import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
const Main = () => {

    const [name, setName] = useState([null]);
    const [order, setOrder] = useState([null]);
    const [exp, setExp] = useState([null]);
    const [height, setHeight] = useState([null]);
    const[id,setId] = useState([null]);
    const [search, setSearch] = useState([""]);
    useEffect(() => {

           const  getPokemon = async() =>{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
            const actdata = await res.json();
            setId(actdata.id);
            setName(actdata.name);
            setOrder(actdata.order);
            setExp(actdata.base_experience);
            setHeight(actdata.height);
            
        }

        getPokemon();

    }, [search])


    const imge=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;


    return (
        <div className="centerpage">
            <div className="search">
                <input type="text" placeholder="Enter name or Id" value={search}
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
            </div>
            <div className="data">
                <h1><b>Name :</b><span className="colorname">{name}</span></h1>
                <h1><b>Id :</b> {id }</h1>
                <h1><b>Height :</b>{height}</h1>
                <h1><b>Order :</b>{order}</h1>
                <h1><b>base_experience:</b>{exp}</h1>

                <p>Pokemon cards ...</p>
                <h2>Catch em ! Collect your</h2>
                <h2>Strongest and Rarest</h2>
                <h2><span class="colorchange">Pokemon</span></h2>
                <button><NavLink activeClassName="active_class"  to='/'>Back</NavLink></button>
            </div>
            <div className="info">
            <img src={imge} alt=""/>
            </div>

        </div>
    )
}
export default Main;