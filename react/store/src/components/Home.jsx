import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";


function Home(){


    return(
        <div>
            <div className="Man">
                <Link to="/Man" className="Manlink">
                    <h1>Man Clothing</h1>
                    <p>CLick Here to go in Man Clothing page</p>
                </Link>    
            </div>
            <div className="Women">
                <Link to="/Women" className="Womenlink">
                    <h1>Women Clothing</h1>
                    <p>CLick Here to go in Women Clothing page</p>
                </Link>    
            </div>
            <div className="Electronicts">
                <Link to="./Electronicts" className="Electronicts-link">
                    <h1>Electronicts</h1>
                    <p>CLick Here to go in Electronicts page</p>
                </Link>    
            </div>
        </div>
    );
}
export default Home