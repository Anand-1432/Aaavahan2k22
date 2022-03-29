import RuleCard from '../../components/rule-card/rule-card';
import './rule-box.scss';

import img0 from '../../assets/galaxy.png';
import bgmain from '../../assets/bgmain3.png';
import Footer from '../../components/footer/Footer';

import cricketImg from '../../assets/cricket.jpg';
import futsalImg from '../../assets/futsal.jpg';
import basketballImg from '../../assets/basketball.jpg';
import tennisImg from '../../assets/tennis.jpg';
import valleyball from '../../assets/volleyball.jpg';
import khokhoImg from '../../assets/khokho.png';
import chessImg from '../../assets/chess.jpg';
import badmintonImg from '../../assets/badminton.jpg';
import kabaddiImg from '../../assets/kabaddi.jpg';

const RuleBox = () => {
  return (
    <>
      <img src={img0} alt='' id='Rbg' />
      <img src={bgmain} alt='' id='Rbg2' />

      <h1 className='head'>Rules Section</h1>

      <div className='rule-box container-fluid'>
        <div className='row'>
          <div className='col-lg-4 col-xl-4 col-md-4 rule'>
            <RuleCard sport='Cricket' imgSrc={cricketImg} />
          </div>

          <div className='col-lg-4 col-xl-4 col-md-4 rule'>
            <RuleCard sport='Futsal' imgSrc={futsalImg} />
          </div>

          <div className='col-lg-4 col-xl-4 col-md-4 rule'>
            <RuleCard sport='Basketball' imgSrc={basketballImg} />
          </div>
        </div>
      </div>

      <div className='rule-box container-fluid'>
        <div className='row'>
          <div className='col-lg-4 col-xl-4 col-md-4 rule'>
            <RuleCard sport='Tennis' imgSrc={tennisImg} />
          </div>

          <div className='col-lg-4 col-xl-4 col-md-4 rule'>
            <RuleCard sport='Volleyball' imgSrc={valleyball} />
          </div>

          <div className='col-lg-4 col-xl-4 col-md-4 rule'>
            <RuleCard sport='Khokho' imgSrc={khokhoImg} />
          </div>
        </div>
      </div>

      <div className='rule-box container-fluid'>
        <div className='row'>
          <div className='col-lg-4 col-xl-4 col-md-4 rule'>
            <RuleCard sport='Chess' imgSrc={chessImg} />
          </div>

          <div className='col-lg-4 col-xl-4 col-md-4 rule'>
            <RuleCard sport='Badminton' imgSrc={badmintonImg} />
          </div>

          <div className='col-lg-4 col-xl-4 col-md-4 rule'>
            <RuleCard sport='Kabaddi' imgSrc={kabaddiImg} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RuleBox;
