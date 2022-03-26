import React from 'react'
import './slider.scss'
import Img from '../../assets/av7.jpg'
import m1 from '../../assets/m1.jpeg'
import m2 from '../../assets/m2.jpeg'
import m3 from '../../assets/m3.jpeg'


const Slider = (props) => {
    return (
        <>
            <div className='slider'>
                <h1>{props.name}</h1>
                <div className='slider_track'>

                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand<br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>

                    <div className='com'>
                        <div className='box'>
                            <img src={m1} alt="" />
                            <p>Ak Kori <br />
                                <span>HOD of Electrical Department</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={m2} alt="" />
                            <p>Mohit Verma <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={m3} alt="" />
                            <p>Shilpa Saxena <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Slider