import React from "react";
import * as Survey from "survey-react";
var surveyJSON = {
  "title":"Union College Weekly Improvement Survey",
  "pages":[
    {
      "name":"page1",
      "elements":[
        {
          "type":"checkbox",
          "name":"question1",
          "title":"What was your favorite lunch this week?",
          "choices":[
            "Veggie Burgers and Frech Fries",
            "Orange Chicken and Fried Rice",
            "Burrito Bar",
            "Chickpea Curry with Naan Bread",
            "Spaghetti and Meat Balls with Garlic Bread"
            ]
        },
        {
          "type":"checkbox",
          "name":"question2",
          "title":"What was your least favorite lunch this week?",
          "choices":[
            "Veggie Burgers and Frech Fries",
            "Orange Chicken and Fried Rice",
            "Burrito Bar",
            "Chickpea Curry with Naan Bread",
            "Spaghetti and Meat Balls with Garlic Bread"
            ]
          
        },
        {
          "type":"text",
          "name":"question3",
          "title":"What is a meal that you would like to see the cafeteria serve?"
        },
        {
         "type":"rating",
         "name": "question4",
         "title":"On a scale from 1 (Terrible)-10 (Excellent), did you enjoy the Saturday Night activity this week?",
         "rateMax":10
        },
        {
          "type":"text",
          "name":"question5",
          "title":"How could have the Saturday Night Activity be improved?"
        },
        {
          "type":"rating",
          "name":"question6",
          "title":"On a scale from 1 (Terrible)-10 (Excellent), how was your experience in the classroom this week?",
          "rateMax":10
        },
        {
          "type":"text",
          "name":"question7",
          "title":"Please explain your reason for the ranking of the previous question:"
        },
        {
          "type":"rating",
          "name":"question8",
          "title":"On a scale from 1(Very Stressed)-10 (Not Stressed),how stressed were you this week?",
          "rateMax":10
        },
        {
          "type":"text",
          "name":"question9",
          "title":"Based on the answer to the previous question, what did you do to help cope with your stress?\n"
        },
        {
          "type":"rating",
          "name":"question10",
          "title":"On a scale from 1-10 has Union stood up to your expectations this week?",
          "rateMax":10
        },
        {
          "type":"text",
          "name":"question11",
          "title":"Please explain your reason for the ranking of the previous question: "}]}]}


function Surveys() {
  const handleComplete=(event)=>{
    const answers = event.valuesHash
    console.log(answers)
    localStorage.setItem('answers', answers);
  }
  const storedItem = localStorage.getItem('answers')
  console.log(storedItem)
 
  return (
        <div>
          <div style={{paddingLeft:'10px'}}>
            <h1 style={{color: 'rgba(220, 4, 44)', paddingTop:'16px', fontSize: "300%", paddingBottom: '10px%'}}>Surveys</h1>
            <Survey.Survey json={ surveyJSON } onComplete={handleComplete}/>
          </div>
        </div>
  );
}

export default Surveys;