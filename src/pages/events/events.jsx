
import img0 from '../../assets/galaxy.png';
import bgmain from '../../assets/bgmain3.png';

import './events.scss';
import Footer from '../../components/footer/Footer';
import EventCard from '../../components/event-card/event-card';

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

      <h1 className='headings' style={{ color: 'grey' }}>
        1st Day
      </h1>
    <div className='event-section container-fluid'>
        <div className='row'>
          <div className='col-6-md col-6-xl col-6-lg game'>
      <EventCard sport='Cricket' team1='CSE' team2='IT' time='2:00 pm' />
          </div>
          
          <div className='col-6-md col-6-xl col-6-lg game'>
      <EventCard sport='Basketball' team1='ECE' team2='ME' time='10:00 am' />
          </div>
          
        </div>
      </div>


      <h1 className='headings' style={{ color: 'grey' }}>
        2nd Day
      </h1>
    <div className='event-section container-fluid'>
        <div className='row'>
          <div className='col-6-md col-6-xl col-6-lg game'>
      <EventCard sport='Futsal' team1='CSE' team2='IP' time='12:00 pm' />
          </div>
          
          <div className='col-6-md col-6-xl col-6-lg game'>
      <EventCard sport='Tennis' team1='ECE' team2='CE' time='3:00 pm' />
          </div>
          
        </div>
      </div>


      <h1 className='headings' style={{ color: 'grey' }}>
        3rd Day
      </h1>
    <div className='event-section container-fluid'>
        <div className='row'>
          <div className='col-6-md col-6-xl col-6-lg game'>
      <EventCard sport='Volleyball' team1='IT' team2='CE' time='4:00 pm' />
          </div>
          
          <div className='col-6-md col-6-xl col-6-lg game'>
      <EventCard sport='KhoKho' team1='IP' team2='ME' time='1:00 pm' />
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventPage;
