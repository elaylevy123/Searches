import React, {useEffect,useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function MovieInfo() {
    const params = useParams();
    const nav = useNavigate();
    const [item,setItem] = useState({})

    useEffect(() => {
        doApi();
    },[])

    const doApi = async() => {
        let url = `http://www.omdbapi.com/?i=${params["id"]}&apikey=5a292f28`
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);
        setItem(data);
    }

    return (
        <div className='container p-2 text-center'>
            <img src={item.Poster} alt="" className='col-md-2'/>
            <h2>{item.Title}</h2>
            <div>Runtime: {item.Runtime}</div>
            <div>Rating: {item.imdbRating}</div>
            <div>Genere: {item.Genre}</div>
            <div className='col-md-5 mx-auto'>Plot: {item.Plot}</div>
            <button className='btn btn-dark mt-3' onClick={() => {
                nav(-1)
            }}>Back to list</button>
        </div>
    )
}
