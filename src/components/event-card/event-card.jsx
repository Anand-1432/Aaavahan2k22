import './event-card.scss';

const EventCard = ({ sport, team1, team2, time }) => {
  return (
    <div className='event-card'>
      <div className='event-details'>
        <h2>{sport}</h2>
        <p>
          {team1} vs {team2}
        </p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EventCard;
