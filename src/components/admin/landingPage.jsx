import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    

    <section id ="landingPage">
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <section id ="title">
        <h1>Table Time</h1>

        </section>

     <section id ="welcome">
      <h1>Welcome to Admin Panel</h1>
      </section>


      {/*sign up button below   */}
      <section id ="adminSignUp">
      <Link to ="/admin/signUp">
      <button className="sign-up">Admin Sign up</button>
      </Link>
      </section>

        {/*Admin Sign in button */}
      <section id ="adminSignIn">
      <Link to ="/admin/signIn">
      <button className="sign-in">Admin Sign in</button>
      </Link>
      </section>


    </div>
    </section>
    
  );
};

export default LandingPage;
