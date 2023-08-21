import { useEffect, useRef, useState } from 'react'
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import { getUserdata } from './API'
import bgImage from './logo.jpeg';
function Layout(){

    const [data,setData] = useState()
    const navigate = useNavigate()
    const nav = useRef()
    
    useEffect(()=>{
        getUserdata().then(res => {
            setData(res)
            // console.log(res)
        })
    },[])

    const logout = () => {
        sessionStorage.removeItem('userdata')
        navigate('/login')
    }

    const navSlide = ()=>{
        nav.current.classList.toggle('slide')
    }

    return (
        <>
            <div className='layout'>
            <nav>
            <div class="logo">
            <img src={bgImage} alt="Image Description"  />
        <h4>KITE INSTITUTE</h4>
    </div>
                <div class="nav-links" ref={nav}>
                    <li onClick={navSlide}>
                        <NavLink to='/main/home'>Home</NavLink>
                    </li>

                    <li onClick={navSlide}>
                        <NavLink to='/main/educators' state={data}>Educators</NavLink>
                    </li>
                    
                    <li onClick={navSlide}>
                        <NavLink to='/main/courses' state={data}>Course</NavLink>
                    </li>

                    <li onClick={navSlide}>
                        <NavLink to='/main/quiz' state={data}>Practice</NavLink>
                    </li>

                    <li onClick={navSlide}>
                        <NavLink to='/main/successstories' state={data}>Success Stories</NavLink>
                    </li>

                    <li onClick={navSlide}>
                        <NavLink to='/main/contactus'>Contact Us</NavLink>
                    </li>
                    {data && <li className='profilepos'>
                        <div className='profile'>
                            <img src={data.image} className='image' alt='avatar'></img>
                            <div className={"details"}>
                                <span className={"username"}>{data.username}</span>
                            </div>
                        </div>
                        <li className={'logout'} onClick={logout}>Logout</li>
                    </li>}
                </div>
                <div class="burger" onClick={navSlide}>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
            <Outlet/>
            </div>
        </>
    )
}

export default Layout