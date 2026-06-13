import './App.css'
import useData from './useData'


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
  const data = useData('../data.json');
  if (!data) return;
  const criteria = []
  for (const item of data) {
    criteria.push(
      <Criteria key={item.category} name={item.category} icon={item.icon} color={item.color} score={item.score} />
    )
  }
  return (
    <div className="result-summary">
      <h2>Summary</h2>
      {criteria}
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

