import './App.css'
import reactionIcon from './assets/images/icon-reaction.svg'
import memoryIcon from './assets/images/icon-memory.svg'
import verbalIcon from './assets/images/icon-verbal.svg'
import visualIcon from './assets/images/icon-visual.svg'

export default function Results() {
  return (
    <div className="app">
      <OverallResult />
      <ResultSummary />
    </div>
  )
}

function OverallResult() {
  return (
    <div className='overall-result'>
      <h1 className='result-title'>Your Result</h1>
      <MainScore />
      <ResultText />
    </div>
  )
}
function MainScore() {
  return (
    <div className="main-score">
      <h2 className='score-value'>76</h2>
      <p className="total-points">of 100</p>
    </div>
  )
}
function ResultText() {
  return (
    <div className="result-txt">
      <h2 className='result-txt-title'>Great</h2>
      <p  className='result-txt-content'>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
}
function ResultSummary() {
  return (
    <div className="result-summary">
      <h2>Summary</h2>
      <Criteria name='Reaction' icon={reactionIcon} color='red' score='80' />
      <Criteria name='Memory' icon={memoryIcon} color='yellow' score='92' />
      <Criteria name='Verbal' icon={verbalIcon} color='green' score='61' />
      <Criteria name='Visual' icon={visualIcon} color='blue' score='73' />
      <button className="continue-btn">Continue</button>
    </div>
  );
}
function Criteria({ name, icon, color, score }: { name: string, icon: string, color: string, score: string }) {
  return (
    <div className={`criteria criteria-${color}`}>
      <div>
        <img src={icon} alt="" className='criteria-icon'/>
        <p className='criteria-name'>{name}</p>
      </div>
      <p>
        <span className='criteria-score'>{score}</span>
        <span className='criteria-total-points'>/ 100</span>
      </p>
    </div>
  );
}

