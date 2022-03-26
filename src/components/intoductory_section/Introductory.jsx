import React, { useEffect, useState } from 'react';
import './introductory.scss';

const Introductory = () => {
  const [sponsorCnt, setSponsorCnt] = useState(0);
  const [gameCnt, setGameCnt] = useState(0);
  const [participantCnt, setParticipantCnt] = useState(0);
  const [dayCnt, setDayCnt] = useState(0);

  function isOnScreen() {
    var screenHeight = window.height;
    return window.pageYOffset >= screenHeight ? false : true;
  }

  useEffect(() => {
    console.log(isOnScreen());
    if (isOnScreen()) {
      setTimeout(() => {
        if (participantCnt !== 50) setParticipantCnt(participantCnt + 1);
        else if (sponsorCnt !== 20) setSponsorCnt(sponsorCnt + 1);
        else if (gameCnt !== 8) setGameCnt(gameCnt + 1);
        else if (dayCnt !== 4) setDayCnt(dayCnt + 1);
      }, 50);
    }
  });

  return (
    <>
      <div
        className='container intro'
        data-aos='zoom-in'
        // onLoad={() => console.log('Ended')}
      >
        <div className='row'>
          <div className='com-md-6 col-xl-6 col-lg-6 video'>
            <iframe
              width='480'
              height='300'
              src='https://www.youtube.com/embed/tpM0h283zb8'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <div className='col-md-6 col-xl-6 col-lg-6 contentbox'>
            <div className='content'>
              <p>{participantCnt}+</p>
              <span>Participants</span>
            </div>
            <div className='content'>
              <p>{sponsorCnt}+</p>
              <span>Sponsors</span>
            </div>
            <div className='content'>
              <p>{gameCnt}+</p>
              <span>Games</span>
            </div>
            <div className='content'>
              <p>{dayCnt}+</p>
              <span>Days</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introductory;
