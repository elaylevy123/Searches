import React from 'react'
import {useNavigate} from "react-router-dom"

function VodItem(props) {

    const nav = useNavigate();

    let item = props.item;

    const onInfoClick = () => {
        nav(`/info/${item.imdbID}`)
    }

    return (
        <div className='col-md-4 p-2'>
            <div className='border p-2 h-100 overflow-hidden shadow'>
                <img src={item.Poster} className='float-start me-2 w-25' />
                <h3>{item.Title}</h3>
                <div>Year: {item.Year}</div>
                <button onClick={onInfoClick} className='btn btn-dark'>More info</button>
            </div>
        </div>
    )
}

export default VodItem