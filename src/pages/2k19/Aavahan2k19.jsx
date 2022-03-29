import React from 'react'
import './aavahan2k19.scss'
import Silder2 from '../../components/slider2/Silder2';

import img0 from '../../assets/galaxy.png'
import bgmain from '../../assets/bgmain3.png'

import n1 from '../../assets/n1.jpg'
import n2 from '../../assets/n2.jpg'
import n3 from '../../assets/n3.jpg'
import n4 from '../../assets/n4.jpg'
import Footer from '../../components/footer/Footer';


const Aavahan2k19 = () => {
  return (
    <>
      <div id='History'></div>
      <img src={img0} alt="" id='Rbg' />
      <img src={bgmain} alt="" id='Rbg2' />

      <div className='MainDiv'>
        <h2>Aavahan 2k19</h2>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={n1} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={n2} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={n3} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={n4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div id='PastSpon'></div>
      <Silder2
        name="Past Sponsors"
      />

    
    <h1 id='dj'>Dj Night</h1>
      <div className='EventVideo'>
        <iframe
          width='480'
          height='300'
          src='https://www.youtube.com/embed/_AQdXkTwp64'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>

      <Footer />

    </>
  )
}

export default Aavahan2k19