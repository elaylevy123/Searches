import React from 'react'
import VodItem from "./vodItem";

function VodList(props){
    return(
        <div className='container-fluid py-5'>
            <div className='container'>
                <h2>List of tv shows: </h2>
                <div className="row">
                    {Array.isArray(props.vod_ar) ? (
                        props.vod_ar.map(item => (
                            <VodItem key={item.imdbID} item={item} />
                        ))
                    ) : (
                        <p>No TV shows available.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
export default VodList