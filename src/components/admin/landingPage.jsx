import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/admin.css'


const LandingPage = () => {
  return (
    
    <>
        <section className ="title-landingPage">
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <section className ="landingpage-title">
            <h1>Table Time</h1>

            </section>

        <section className ="landingpage-welcome">
        <h1>Welcome to Table Time Central Management System</h1>
        </section>


        {/*sign up button below   */}
        <section className ="landingpage-adminSignUp">
        <Link to ="/admin/signUp">
        <button className="sign-up">Admin Sign up</button>
        </Link>
        </section>

            {/*Admin Sign in button */}
        <section className ="landingpage-adminSignIn">
        <Link to ="/admin/signIn">
        <button className="sign-in">Admin Sign in</button>
        </Link>
        </section>


        </div>
        </section>
    </>
  );
};

export default LandingPage;
