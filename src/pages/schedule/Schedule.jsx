import React from 'react';
import './schedule.scss';

import img0 from '../../assets/galaxy.png';
import bgmain from '../../assets/bgmain3.png';
import sch from '../../assets/schedule.png';
import Footer from '../../components/footer/Footer';


const Schedule = () => {
  return (
    <>
      <img src={img0} alt='' id='Rbg' />
      <img src={bgmain} alt='' id='Rbg2' />

         <div className='Container schedule'>
          
          <h2>Schedule</h2>

           <div className='schimg'>
               <img src={sch} alt=".." />
           </div>

         </div>
           
       <Footer/>

    </>
  )
}

export default Schedule