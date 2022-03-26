import React from 'react'
import './sidebar.scss'

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import GroupsIcon from '@material-ui/icons/Group';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

import logo from '../../assets/logo.png';

const Sidebar = () => {


    const clickEvent = () =>{
        var s = document.querySelector(".side");
        var p = document.querySelector(".sidebar");
  
        if(s.style.opacity==0){
            s.style.opacity = 1
            p.style.display = "block"
        }else{
            s.style.opacity = 0
            p.style.display = "none"
        }

    }
    

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-brand m-auto" to=""><img src={logo} alt="..." /></div>
                    <button className='btn' onClick={clickEvent} >
                    <MenuRoundedIcon htmlColor='rgb(142, 110, 255)' />
                    </button>
                </div>
            </nav>

         <div className='main'>
            <div className="side">
                <p> <Link className='link' to="/"> <HomeIcon /> </Link></p>
                <p> <a className='link' href='/#About'> <InfoIcon /> </a></p>
                <p> <Link className='link' to='/events'> <GroupsIcon /> </Link></p>
                <p> <Link className='link' to='/2k19'> <EmojiEventsIcon /> </Link></p>
                <p> <a className='link' href='/#Sponsorships'> <BeenhereIcon /> </a></p>
                <p> <a className='link' href='mailto:gaikwadanandrao2@gmail.com' target='1' > <ContactPhoneIcon /> </a></p>
            </div>

            <div className="sidebar" id="c">
                <div className="barlink">
                    <p> <Link className='link' to="/"> Home </Link></p>
                    <p> <a className='link' href='/#About'> About </a></p>
                    <p> <Link className='link' to='/events'> Events </Link></p>
                    <p> <Link className='link' to='/2k19'> 2k19 </Link></p>
                    <p> <a className='link' href='/#Sponsorships'> Sponsorships</a></p>
                    <p> <a className='link' href='mailto:gaikwadanandrao2@gmail.com'> Contact </a></p>
                </div>
            </div>
          </div>

        </>
    )
}

export default Sidebar