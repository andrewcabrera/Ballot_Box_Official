import React from "react";
import Poll from 'react-polls';


function Polls() {
  const pollQuestion = "Do you like Ballot Box?"
  const pollAnswers = [ { option: 'Yes', votes: 200},
                        { option: 'No', votes: 5 }]
  const pollQuestion2 = "Did your teachers pray during class today??"
  const pollAnswers2 = [ { option: 'Yes', votes: 200},
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Polls;