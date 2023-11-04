import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
    const {vis } = props;
    let myStyle =false;
    let handleClicks = () => {

        if (myStyle === true) {
            document.getElementById('textform').style.cssText = 'background-color: #3D4E78';

            myStyle = false;

        }
        else {
            document.getElementById('textform').style.cssText = 'background-color: black';
            myStyle = true;

        }
    }


    return (
        <nav style={{ backgroundColor: '#060709' }} class="navbar navbar-expand-lg bg-#060709" id='navbar'>
            <div class="container-fluid text-white fw-bold">
                <Link class="navbar-brand text-white" to="/">{props.title}</Link>
                {/* <link to='/'>{props.title}</link> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active text-white" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                {vis && <div class="form-check form-switch" onClick={() => {
                    handleClicks();
                }}>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label class="form-check-label text-white" for="flexSwitchCheckDefault" onClick={handleClicks}>DarkMode</label>
                </div>
}

            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: propTypes.string.isRequired
};


// aria-current="page"  line 19