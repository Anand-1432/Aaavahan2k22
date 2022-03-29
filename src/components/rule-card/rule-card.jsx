import { useState } from 'react';

import rules from './rules';

import './rule-card.scss';

const Rules1 = ({ setShowRuleBox, sport }) => {
  return (
    <div className='sport-rule-box' onClick={() => setShowRuleBox(false)}>
      <div className='rules' onClick={e => e.stopPropagation()}>
        <h1 className='aa'>{sport} Rules</h1>
        <div className='ruless'>
          <h1>Boys</h1>
          <ul>
            {rules[sport.toLowerCase()]['boys'].map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
          <h1>Girls</h1>
          <ul>
            {rules[sport.toLowerCase()]['girls'].map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Rules2 = ({ setShowRuleBox, sport }) => {
  return (
    <div className='sport-rule-box' onClick={() => setShowRuleBox(false)}>
      <div className='rules' onClick={e => e.stopPropagation()}>
        <h1 className='aa'>{sport} Rules</h1>
        <div className='ruless'>
          <ul>
            {rules[sport.toLowerCase()].map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const RuleCard = ({ sport, imgSrc }) => {
  const [showRuleBox, setShowRuleBox] = useState(false);
  return !showRuleBox ? (
    <div className='rule-card'>
      <img src={imgSrc} />
      <div className='rule-card-details' onClick={() => setShowRuleBox(true)}>
        {sport}
      </div>
    </div>
  ) : sport === 'Cricket' || sport === 'Futsal' ? (
    <Rules1 setShowRuleBox={setShowRuleBox} sport={sport} />
  ) : (
    <Rules2 setShowRuleBox={setShowRuleBox} sport={sport} />
  );
};

export default RuleCard;
