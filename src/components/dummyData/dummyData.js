import React,{useEffect, useState} from "react";
// import fetch from 'isomorphic-fetch'

const DummyData = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        // getDataByApi()
        fetchtoPokemon()
    },[data])

    const getDataByApi = () => {
        const data = fetch('https://api.publicapis.org/entries')
        .then((data)=> data.json())
        .then((data => setData(data.entries)))
    }

    // console.log(data)

    function fetchtoPokemon(){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then(response => response.json())
        .then(allpokemon => setData(allpokemon.results))
        .catch((error)=> console.log(error))
      }

    return(
        <>
            <div 
                className="p-5 bg-white w-75 row m-0 d-flex justify-content-around align-items-center rounded-4 shadow-lg"
                style={{height : '600px', overflowY: 'auto'}}
                role='home-page'
            >
                {data && data.length ? 
                data.map((val, index)=> {
                    return <div className="p-0 p-3 my-1 rounded-4 bg-warning col-5" role="card" data-testid="card" name="cardElement" key={index}>
                    <p className="m-0 text-start">Name :- {val.name}</p>
                    {/* <p className="m-0 text-start">Description :- {val.Description}</p> */}
                    <p className="m-0 text-start">Link :- {val.url}</p>
                </div>
                })
                : 
                <div>
                    No DATA FOUND.............
                </div>}
            </div>
        </>
    )
}

export default DummyData ;