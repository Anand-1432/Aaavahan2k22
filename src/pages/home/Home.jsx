import React from 'react'
import Homebg from '../../assets/av4.png';
import foot from '../../assets/foot.png';
import ball from '../../assets/ball.png';
import png from '../../assets/p4.png';
import bgmain from '../../assets/bgmain3.png';
import About from '../../components/about/About';

import './home.styles.scss'
import Introductory from '../../components/intoductory_section/Introductory';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/slider/Slider';
import Silder2 from '../../components/slider2/Silder2';

const Home = () => {
    return (
        <>
            <img src={Homebg} alt="" id='Rbg' />
            <img src={bgmain} alt="" id='Rbg2' />
            <div className='RaagDiv container-fluid'>
                <div className='row'>
                    <div className='rcg col-md-12 col-lg-6 col-xl-6' data-aos="flip-right">
                        <p> <span>Aavahan</span> <br />The Annual sports fest</p>
                        <section>The grand sports event of Jabalpur Engineering College.<br />Best talent from all over the city is back again,<br />ready to sweat it out.</section>
                        <img src={foot} alt="..." />
                    </div>
                    <div className='rmg col-md 12 col-lg-6 col-xl-6' data-aos="fade-right">
                        <img src={png} alt="..." id='Rgmg' />
                    </div>
                </div>
            </div>


            <Introductory />

            {/* <Slider
                name="Our Sponsors"
            /> */}

            <Silder2
                name="Our Sponsors"
            />

            <About
                image={ball}
                bgcolor="black"
                content="A man may die, nations may fall, but ideas live
                        On forever. Aavahan is the beginning of a
                        Revolution. A revolution where young minds
                        Get an opportunity to not just evolve ideas,
                        But also to execute them. After waiting
                        So long we have come together to bring you
                        The opportunity to witness the annual sports
                        Fest aavahan 2k19 with a great initiative to
                        Encourage various sports activities where
                        All 7 branches compete with each other in the
                        Field. So join us in our initiative 'dare
                        To dream'..
                        "
            />

            <Slider
                name="Our Mentors"
            />

            <Footer />
        </>
    )
}

export default Home