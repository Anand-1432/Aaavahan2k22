import EventCard from '../event-card/event-card';
import './event-section.scss';

const EventSection = ({ heading }) => {
  return (
    <>
    <div className='event-section'>
      <h1 className='heading' style={{ color: 'grey' }}>
        {heading}
      </h1>
      <EventCard sport='Cricket' team1='CSE' team2='IT' time='2:00 pm' />
    </div>
    </>
  );
};
export default EventSection;
