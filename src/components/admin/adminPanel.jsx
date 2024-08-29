import React from 'react';
import { useNavigate} from 'react-router-dom';


const adminPanel = () => {
    const navigate = useNavigate();

    const handleBackClick = () =>{
        navigate('/admin');
    };


    return(
<>
        <section id ="title">

        <h1>Table Time</h1>
        </section>

        <section id="Welcome">
        <h1>Welcome to Tabl Time Management Panel</h1>
        </section>

        <section id="backButton">
            <button onClick={handleBackClick} className="back-button">
                Sign Out
            </button>
        </section>

        </>
    )
}


export default adminPanel;