import EventSection from '../../components/event-section/event-section';

import img0 from '../../assets/galaxy.png';
import bgmain from '../../assets/bgmain3.png';

import './events.scss';
import Footer from '../../components/footer/Footer';

const EventPage = () => {
  return (
    <>
      <img src={img0} alt='' id='Rbg' />
      <img src={bgmain} alt='' id='Rbg2' />
      <EventSection heading='1st Day' />
      <EventSection heading='2nd Day' />
      <EventSection heading='3rd Day' />
      <EventSection heading='DJ Night' />

        
      <Footer/>  


    </>
  );
};

export default EventPage;
