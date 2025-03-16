import React ,{useRef} from 'react'
import {useNavigate} from "react-router-dom"

function VodInput() {
    const inputRef = useRef();
    const nav = useNavigate();

    const onKeyboardClick = (e) => {
        if(e.key == "Enter"){
            onSearchClick();
        }
    }

    const onSearchClick = () => {
        let input_val = inputRef.current.value;
        // alert(input_val);
        nav(`/?s=${input_val}`)
    }

    return (
        <header className='container-fluid bg-dark p-2'>
            <div className="container">
                <div className="row">
                    <div className='logo col-auto'>
                        <h2 className='text-white'>My Vod</h2>
                    </div>
                    <nav className='d-flex col-md-4'>
                        <input onKeyDown={onKeyboardClick} ref={inputRef} placeholder='search...' type="search" className='form-control'/>
                        <button onClick={onSearchClick} className='btn btn-warning'>Search</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default VodInput