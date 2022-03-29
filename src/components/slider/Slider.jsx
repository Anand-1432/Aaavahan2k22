import React from 'react';
import './slider.scss';
// import Img from '../../assets/av7.jpg'
import m1 from '../../assets/m1.jpeg';
import m2 from '../../assets/m2.jpeg';
import m3 from '../../assets/m3.jpeg';
import m4 from '../../assets/m4.jpg';
import m5 from '../../assets/m5.jpg';

const Slider = props => {
  return (
    <>
      <div className='slider'>
        <h1>{props.name}</h1>
        <div className='slider_track'>
          <div className='com'>
            <div className='box'>
              <img src={m4} alt='' />
              <p>
                Dr. A.K. Sharma
                <br />
                <span>Principal of JEC</span>
              </p>
            </div>
          </div>

          <div className='com'>
            <div className='box'>
              <img src={m1} alt='' />
              <p>
                Dr. A.k. Kori <br />
                <span>HOD of Electrical Department</span>
              </p>
            </div>
          </div>

          <div className='com'>
            <div className='box'>
              <img src={m2} alt='' />
              <p>
                Prof. Mohit Verma <br />
                <span>Civil Department</span>
              </p>
            </div>
          </div>

          <div className='com'>
            <div className='box'>
              <img src={m3} alt='' />
              <p>
                Dr. Shilpa Saxena <br />
                <span>Chemistry Department</span>
              </p>
            </div>
          </div>
          <div className='com'>
            <div className='box'>
              <img src={m5} alt='' />
              <p>
                Dr. Ranjana Singh <br />
                <span>Electrical Department</span>
              </p>
            </div>
          </div>
          <div className='com'>
            <div className='box'>
              <img src={m4} alt='' />
              <p>
                Dr. A.K. Sharma <br />
                <span>Principal of JEC</span>
              </p>
            </div>
          </div>

          <div className='com'>
            <div className='box'>
              <img src={m1} alt='' />
              <p>
                Dr. A.K. Kori
                <br />
                <span>HOD of Electrical Department</span>
              </p>
            </div>
          </div>

          <div className='com'>
            <div className='box'>
              <img src={m2} alt='' />
              <p>
                Prof. Mohit Verma <br />
                <span>Civil Department</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
