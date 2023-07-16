import './Loginpagestyle.css';
import React from 'react';
function Loginpage() {
    return(
    <>
            <div className='Loginpage-container'>
            <div className='Loginpage'>
                <h2 className='h2f1'>Welcome to Kadit Institute</h2>
                <h2 className='h2f2'>Login</h2>

            <div className='input-group input-group-lg mb-3'>
                <span className='input-group-addon'><i className="uil uil-user-circle"></i></span>
                <input type="text" id="name" className="form-control" name='username' placeholder='Username' required></input>
            </div>

            <div className='input-group input-group-lg mb-3'>
                <span className='input-group-addon'><i className="uil-key-skeleton"></i></span>
                <input type="text" id="name" className="form-control" name='username' placeholder='password' required></input>
            </div>

            <div className="form-check form-check-inline mb-5">
                <input type="checkbox" id="checkbox" className="form-check-input" value=""/>
                <label for="checkbox" className="form-check-label">Remember me</label>
                <a href="#" className='forgetpassword'>Forget Password?</a>
            </div>
            </div>

            <div className='mb-3'>
                <button type="submit" className='Loginbutton' value="send">Submit</button>
            </div>

                <span class="divider-text">OR</span>
                <p class="divider"></p>

            <div className='Socialmedipage mb-3'>
                <p className='p1f2'>Get started with your free account</p>
                <a href="#"><button type="button" class="Socialmediabutton3"><i class="fa fa-google" style={{color:"green"}}></i> Login via Google</button></a><br></br><br></br>
                <a href="#"><button type="button" class="Socialmediabutton2"><i class="fa fa-facebook-square"> Login via Facebook</i></button></a><br></br><br></br>
                <a href="#"><button type="button" class="Socialmediabutton1"><i class="fa fa-twitter-square"> Login via Twitter</i></button></a>
            </div>

                <p className='p1f3'>Don't have an account? <a href="/Signuppage.js" className='p1a1'>Sign up</a></p>
                
            </div>  
        </>
    )
}
export default Loginpage;