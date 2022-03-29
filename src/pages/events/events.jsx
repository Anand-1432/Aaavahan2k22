import EventSection from '../../components/event-section/event-section';

import img0 from '../../assets/galaxy.png';
import bgmain from '../../assets/bgmain3.png';

import './events.scss';
import Footer from '../../components/footer/Footer';

const EventPage = () => {
  return (
    <>
      <div id='Events'></div>
      <img src={img0} alt='' id='Rbg' />
      <img src={bgmain} alt='' id='Rbg2' />
      <div className='EventVideo'>
        <iframe
          width='480'
          height='300'
          src='https://www.youtube.com/embed/ideEAks0ZF0'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>

      <EventSection heading='1st Day' />
      <EventSection heading='2nd Day' />
      <EventSection heading='3rd Day' />
      <EventSection heading='DJ Night' />

      <Footer />
    </>
  );
};

export default EventPage;
