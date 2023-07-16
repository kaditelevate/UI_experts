import './Signuppagestyle.css';
import React from 'react';
 function Signuppage() {
    return(
        <>
           
            <div className='Signuppage-container'>
            <div className='Signuppage'>
                <h2 className='h1f1'><u><strong>New User Account</strong></u></h2>

            <div className='select'>
                <select className='form-select form-select-lg mb-3'>
                    <option selected>Choose...</option>
                    <option>Admin signup</option>
                    <option>User signup</option>
                </select>
            </div>

            <div className='input-group input-group-lg mb-3'>
                <span className='input-group-addon'><i className="uil uil-user-circle"></i></span>
                <input type="text" id="name" className="form-control" name='username' placeholder='Enter your name' required></input>
            </div>

            <div className='input-group input-group-lg mb-3'>
                <span className='input-group-addon'><i class="uil uil-envelopes"></i></span>
                <input type="text" id="name" className="form-control" name='username' placeholder='Enter email address' required></input>
            </div>

            <div className='input-group input-group-lg mb-3'>
                <span className='input-group-addon'><i class="uil uil-calling"></i></span>
                <input type="text" id="name" className="form-control" name='username' placeholder='Enter phone number' required></input>
            </div>

            <div className='input-group input-group-lg mb-3'>
                <span className='input-group-addon'><i class="uil uil-padlock"></i></span>
                <input type="text" id="name" className="form-control" name='username' placeholder='Enter Password' required></input>
            </div>

            <div className='input-group input-group-lg mb-3'>
                <span className='input-group-addon'><i class="uil uil-padlock"></i></span>
                <input type="text" id="name" className="form-control" name='username' placeholder='Repeat Password' required></input>
            </div>

            <div className="form-check form-check-inline mb-5">
                <input type="checkbox" id="checkbox" className="form-check-input" value=""/>
                <label for="checkbox" className="form-check-label">I accept all terms & conditions</label>
            </div>
            </div>

                <button type="submit" className='Signupbutton' value="send">Register</button>
           
            </div>
           
        </>
    )
}
export default Signuppage;