import React from "react";
import Poll from 'react-polls';


function Polls() {
  const pollQuestion = "Do you like Ballot Box?"
  const pollAnswers = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  const pollQuestion2 = "Did your teachers pray during class today?"
  const pollAnswers2 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }] 
  const pollQuestion3 = "Did you like the cafe food today?"
  const pollAnswers3 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  const pollQuestion4 = "How was night under the lights"
  const pollAnswers4 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  const pollQuestion5 = "What is your favorite class?"
  const pollAnswers5 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  const pollQuestion6 = "Did you like vespers tonight?"
  const pollAnswers6 = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
                        
  return (
    <div>
      <div>
        <div>
          <div>
          </div>
          <div>
            <h1>Polls</h1>
            <Poll question={pollQuestion} answers={pollAnswers} onVote={()=>null}/>
            <Poll question={pollQuestion2} answers={pollAnswers2} onVote={()=>null}/>
            <Poll question={pollQuestion3} answers={pollAnswers3} onVote={()=>null}/>
            <Poll question={pollQuestion4} answers={pollAnswers4} onVote={()=>null}/>
            <Poll question={pollQuestion5} answers={pollAnswers5} onVote={()=>null}/>
            <Poll question={pollQuestion6} answers={pollAnswers6} onVote={()=>null}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Polls;