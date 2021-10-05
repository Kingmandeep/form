import React, { useEffect, useState } from 'react'

const Pokemons = () => {

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
    const image = "https://cdn.vox-cdn.com/thumbor/e4KRzS--UsuixA2G8TOCwJ-O024=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png";
    return (
        <>
            <div className="header">
                <div className="leftside">
                
                    <img src={image} alt="please check Internet Connection"></img>
                    
                    <h1>Pokemon</h1>
                </div>
                <div className="rightside">
                    <input type="text" placeholder="    Enter Id"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>

            </div>
            <div className="main">
                <div className="lbox">
                    <img src={imge} alt="Please Enter Id"></img>

                </div>
                <div className="rbox">
                    <h1>Name : {name}</h1>
                    <h1>Height :  {height} </h1>
                    <h1>Order :  {order}</h1>
                    <h1>Id :  {id}</h1>
                    <h1>Base experience : {exp}</h1>
                </div>
            </div>
        </>
    )
}
export default Pokemons;
