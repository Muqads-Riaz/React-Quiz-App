import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import Countdown from './components/Timer';


function App() {
  let [indexNumber ,setIndexNumber] =useState(0)
 let [questions,setQuestions]= useState([
    {
        question : "What is our country name?",
        options : ["Pakistan","China","America","India"],
        correctOption : "Pakistan" 
    },
    {
        question : "What is our national language?",
        options : ["Urdu","Chinese","English","Punjabi"],
        correctOption : "Urdu" 
    },
    {
        question : "Allama Iqbal is our national _________",
        options : ["Actor","Poet","Writer","Singer"],
        correctOption : "Poet" 
    },
    {
        question : "_________ is the founder of pakistan.",
        options : ["Imran Khan","Allama Iqbal","Quaid-e-Azam"],
        correctOption : "Quaid-e-Azam" 
    },
    {
        question : "Pakistan is an islamic country?",
        options : ["True","False"],
        correctOption : "True" 
    }
    ])
    let[score,setScore] = useState(0);
    let[showResult,setShowResult] = useState(false);
    let[start, setStart] = useState(false);
    let startQuiz = ()=>{
      setStart(true);
    }
  
    let checkQuestion = (e , x) =>{
    if(e==x){
     setScore(score + 1);
     
    }
    if(indexNumber + 1 == questions.length){
      setShowResult(true);
    }else{
      setIndexNumber(indexNumber + 1);
    }
    }
    let timeOver = ()=>{
      setShowResult(true);
    }
  return (
    
    <div className='parent' >
      
      {showResult && indexNumber + 1 != questions.length?  <div className='position'> <img src={img1}></img><h1>Time Over!</h1><p>You have attemped {indexNumber} questions<br/>Your Score is {score}<br/>Your percentege is {score * 100 / questions.length}</p> </div>  
      : showResult && score>= 4? <div className='position'> <img src={img2}></img><h1>Congratulations!</h1><p>You have attemped {indexNumber + 1 } questions<br/>Your Score is {score}<br/>Your percentege is {score * 100 / questions.length}</p> </div> 
      : showResult && score<= 4 && score>= 2? <div className='passed'> <img src={img4}></img>  <h1>Passed!</h1><p>You have attemped {indexNumber + 1 } questions<br/>Your Score is {score}<br/>Your percentege is {score * 100 / questions.length}</p> </div> 
      : showResult && score<= 2?  <div className='failed'> <img src={img3}></img>  <h1>Failed!</h1><p>You have attemped {indexNumber + 1 } questions<br/>Your Score is {score}<br/>Your percentege is {score * 100 / questions.length}</p> </div>  :
       
      !start ? 
        <button className='startQuiz' onClick={startQuiz}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDDer3BIUOHCTB8fLIFY5MetfIUkY8cpsAA&usqp=CAU"></img></button>:

       <div className='main p-3'>
        <div className='timer bg-secondary text-white'>
          <Countdown func={timeOver}/>
          </div>
         <div>{indexNumber + 1 + "/" + questions.length}</div>
         <div className='fs-3 m-2'>{questions[indexNumber].question}</div>
   {questions[indexNumber].options.map((e) =>{
     return <button className='btn btn-secondary m-2' onClick={()=>checkQuestion(e,questions[indexNumber].correctOption)}>{e}</button>
   })}
   </div>}
   
   
    </div>
  );
}

export default App;
