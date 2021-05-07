import React from "react";
import Poll from 'react-polls';


function Polls() {
  const pollQuestion1 = "Do you like Ballot Box?"
  const pollAnswers1 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  const pollQuestion2 = "Did your teachers pray during class today?"
  const pollAnswers2 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }] 
  const pollQuestion3 = "Did you like the cafe food today?"
  const pollAnswers3 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  const pollQuestion4 = "Did you win anything at night under the lights"
  const pollAnswers4 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  const pollQuestion5 = "What is your favorite class?"
  const pollAnswers5 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  const pollQuestion6 = "Did you go to the Friday night vespers this week?"
  const pollAnswers6 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  return (
    <div style={{backgroundColor: 'White'}}>
      <div style={{color: 'rgba(220, 4, 44)'}}>
        <h1 style={{paddingTop:'16px', paddingLeft:'10px', fontSize: "300%", paddingBottom: "10px"}}>Polls</h1>
      </div>
          <Poll question={pollQuestion1} answers={pollAnswers1} onVote={()=>null}/>
          <Poll question={pollQuestion2} answers={pollAnswers2} onVote={()=>null}/>
          <Poll question={pollQuestion3} answers={pollAnswers3} onVote={()=>null}/>
          <Poll question={pollQuestion4} answers={pollAnswers4} onVote={()=>null}/>
          <Poll question={pollQuestion5} answers={pollAnswers5} onVote={()=>null}/>
          <Poll question={pollQuestion6} answers={pollAnswers6} onVote={()=>null}/>
      </div>
  );
}

export default Polls;