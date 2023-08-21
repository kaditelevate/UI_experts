import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { googleSignIn, facebookSignIn, twitterSignIn} from './firebase';
import { Login } from './API';


function Loginpage() {
    const [loader,setLoader] = useState(false)        
    const [input, setInput] = useState({username:'',password:''});
    const [errorMessage,seterrorMessage] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate()
    const handleChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value});
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const login = async(event)=>{
        setLoader(true)
        seterrorMessage('')
        try {
            event.preventDefault()
            const data = await Login(input)
            // console.log(data)
            if(data.status !== "Invalid username or password")
            {
                setLoader(false)
                sessionStorage.setItem('API_Key',JSON.stringify(data.API_Key))
                navigate('/main/home')
            }

            else
            {
                setLoader(false)
                seterrorMessage(data.status)
            }
        } catch (error) {
            alert(error)
        }
    };
    
    
            return(
            <>
            <section>
                <form className='box-size' onSubmit={login}>
                {loader && <div className="loader"/>}
                <div className='Loginpage'>
                    <h2 className='h2f1'>Welcome to Kadit Institute</h2>
                    <h2 className='h2f2'>Login</h2>

                    {errorMessage.length > 0 && <div className='msg'>{errorMessage}</div>}
                
                <div className='input-box'>
                <div className='input-group mb-3'>
                    <span className='input-group-addon'><i className="uil uil-user-circle"></i></span>
                    <input type="email" id="email" className="form-control" name='email' placeholder='Email address' required onChange={handleChange}></input>
                </div>

                <div className='input-group mb-3'>
                <span className='input-group-addon'><i className="uil uil-key-skeleton"></i></span>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    className="form-control"
                                    name='password'
                                    placeholder='Password'
                                    required
                                    onChange={handleChange}
                                />
                                <span className='input-group-addon'>
                                    <i
                                        className={`uil ${passwordVisible ? 'uil-eye-slash' : 'uil-eye'}`}
                                        onClick={togglePasswordVisibility}
                                    ></i>
                                </span>
                </div>
                
                <div className='formcheck'>
                <div className="form-check form-check-inline mb-5">
                    <input type="checkbox" id="checkbox" className="form-check-input" value=""/>
                    <label htmlFor="checkbox" className="form-check-label" style={{fontSize:"15px"}}>Remember me</label>
                    <Link to="/forgotpassword" className='forgetpassword'>Forgot Password?</Link>
                </div>
                </div>
                </div>

                <input type="submit" className='Loginbutton' value='login'/>

                <p className="divider">OR</p>
                <p className='p1f1'>Get started with your free account</p>

                <div className='Socialmediapage'>
                    <button type="button" className="Socialmediabutton" onClick={() => { googleSignIn().then(() => navigate('/password')).catch(err => {console.error(err)})}}><div className='icon'></div> Login via Google</button>
                    {/* <button type="button" className="Socialmediabutton facebook" onClick={() => { facebookSignIn().then(() => navigate('/password')).catch(err => {console.error(err)})}}><i className="fa fa-facebook-square"> Login via Facebook</i></button>
                    <button type="button" className="Socialmediabutton twitter" onClick={() => { twitterSignIn().then(() => {navigate('/password')}).catch(err => {console.error(err)})}}><i className="fa fa-twitter-square"> Login via Twitter</i></button> */}
                </div>

                    <p className='p1f2'>Don't have an account? <Link to="/signup" className='signup'>Sign Up</Link></p>
                </div>
                </form>
            </section>
                
            </>
    )
}
export default Loginpage